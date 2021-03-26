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

var client = new HttpClient();
var access_token = '';
if(document.getElementById("page_views") !== null) {
    get_views();
}

function get_views() {
    if(access_token === '') {
        console.log("get token");
        get_access_token();
    } else {
        console.log("check token");
        check_validity();
    }
}

function get_access_token() {
    client.post("https://www.googleapis.com/oauth2/v3/token?client_id=320426734823-du3a7075fbmsbmjspp68u81pe00fpm5r.apps.googleusercontent.com&client_secret=ql3fwAvpE9rgMpBYfrHjA1me&grant_type=refresh_token&refresh_token=1//03WLuXGQadtK9CgYIARAAGAMSNwF-L9IrPrRT9mrpafL-H-Lt1Q13py1NNyBmwmpkR_0Xg4NU5RnjAEmPTEhfVWfWqt8GLtCVLb0", function(response) {
        // console.log(JSON.parse(response).access_token);
        access_token = JSON.parse(response).access_token;
        check_validity();
    });
}

function check_validity() {
    console.log("checking token...");
    var uri = "https://www.googleapis.com/oauth2/v1/tokeninfo?access_token="+access_token;
    client.post(uri, function(response) {
        var check = JSON.parse(response).hasOwnProperty("expires_in");
        if(check) {
            console.log("TOKEN OK");
            make_view_request();
        } else {
            console.log("RENEW TOKEN")
            get_access_token();
        }
    });
}

function make_view_request() {
    var path = document.URL.split("/").slice(-2)[0];
    console.log(path);
    var uri = "https://www.googleapis.com/analytics/v3/data/ga?ids=ga%3A176589224&start-date=2015-01-01&end-date=today&metrics=ga%3Apageviews&filters=ga%3ApagePath%3D%40" + path + "&access_token=" + access_token;
    client.get(uri, function(response) {
        var text = '<i class="fa fa-eye"></i><div style="display: inline; margin-left:3px;">'
        document.getElementById("page_views").innerHTML = text + JSON.parse(response).totalsForAllResults["ga:pageviews"] + ' reads';
    });
}

