var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send( null );
    }
    this.post = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "POST", aUrl, true );
        anHttpRequest.send( null );
    }
}
const api = new GhostContentAPI({
    url: 'https://epigram.ghost.io',
    key: 'e6939fe25f93a0dec8eb900c95',
    version: "v3"
});

const {readingTime} = GhostHelpers;

var client = new HttpClient();
var access_token = '';
if(document.getElementById("most_read").offsetParent !== null) {
    get_most_read();
}

function get_most_read() {
    if(access_token === '') {
        console.log("get token");
        get_access_token_();
    } else {
        console.log("check token");
        check_validity_();
    }
}

function get_access_token_() {
    client.post("https://www.googleapis.com/oauth2/v3/token?client_id=320426734823-du3a7075fbmsbmjspp68u81pe00fpm5r.apps.googleusercontent.com&client_secret=ql3fwAvpE9rgMpBYfrHjA1me&grant_type=refresh_token&refresh_token=1//03WLuXGQadtK9CgYIARAAGAMSNwF-L9IrPrRT9mrpafL-H-Lt1Q13py1NNyBmwmpkR_0Xg4NU5RnjAEmPTEhfVWfWqt8GLtCVLb0", function(response) {
        access_token = JSON.parse(response).access_token;
        check_validity_();
    });
}

function check_validity_() {
    var uri = "https://www.googleapis.com/oauth2/v1/tokeninfo?access_token="+access_token;
    client.post(uri, function(response) {
        var check = JSON.parse(response).hasOwnProperty("expires_in");
        if(check) {
            console.log("TOKEN OK");
            make_read_request();
        } else {
            console.log("RENEW TOKEN")
            get_access_token_();
        }
    });
}

function make_read_request() {
    var uri = "https://www.googleapis.com/analytics/v3/data/ga?ids=ga%3A176589224&start-date=21daysAgo&end-date=today&metrics=ga%3Apageviews&dimensions=ga%3ApagePath&sort=-ga%3Apageviews&filters=ga%3ApagePath!%3D%2F%3Bga%3ApagePath!%40tag%3Bga%3ApagePath!%40page%3Bga%3ApagePath!%40amp&max-results=7&access_token=" + access_token;
    const div = document.getElementById("featured-box");
    client.get(uri, function(response) {
        var arr = JSON.parse(response).rows;
        var slugs = [];
        var views = [];
        for (var i = 0; i < arr.length; i++) {
            slugs[i] = arr[i][0].split("/").slice(-2)[0];
            views[i] = arr[i][1];
        }
        var filter = 'slug:['+String(slugs)+']';
        api.posts.browse({
            filter: filter
        }).then((posts) => {
            posts.forEach((post, i) => {
                // console.log(readingTime(post, {minute: 'A 1 minute read.', minutes: 'A % minute read.'}));
                div.innerHTML += ` 
                <article class="post">
                    <h4 class="title-side"><a href=${post.url}>${post.title}</a></h4>
                    <div class="clear"></div>
                    <time class="uppercase" datetime=${post.published_at} format='YYYY-MM-DD'><i class="fa fa-clock-o"></i> ${moment(post.published_at).format("MMM DD, YYYY")} <div style="margin-left:8px;display:none;"><i class="fa fa-eye"></i> ${Math.floor(views[i]/3)} / week</time>
                </article>	
                `
            });
        })
    });
}

