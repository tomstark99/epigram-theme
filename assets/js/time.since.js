function time_ago(time, uuid) {

    // console.log(time);
    // console.log(uuid);
    var time_ = '<i class="fa fa-clock-o"></i>';
    var time__ = '';

    var posted = moment(time);
    var now = moment();

    var minute = 60.0;
    var hour = 60.0 * minute;
    var day = 24.0 * hour;
    var week = 7 * day;

    var seconds = (now.subtract(posted)).unix();

    if ((seconds - (minute * 2.0)) < 0) {
        time__ = 'Just Now';
    } else if ((seconds - hour) < 0) {
        time__ = Math.floor(seconds/60) + ' minutes ago';
    } else if ((seconds - (hour * 2.0)) < 0) {
        time__ = Math.floor(seconds/hour) + ' hour ago';
    } else if ((seconds - day) < 0) {
        time__ = Math.floor(seconds/hour) + ' hours ago';
    } else if ((seconds - (day * 2.0)) < 0) {
        time__ = Math.floor(seconds/day) + ' day ago';
    } else if ((seconds - (week * 2.0)) < 0) {
        time__ = Math.floor(seconds/day) + ' days ago';
    } else {
        var format = { year: 'numeric', month: 'short', day: 'numeric' };
        // time__ = posted.toLocaleDateString("en", format);
        time__ = posted.format("DD MMM YYYY")
    }
    var exists = setInterval(function () {
        if(document.getElementById(uuid) !== null) {
            clearInterval(exists);
            document.getElementById(uuid).innerHTML = time_ + '' + time__;
        }
    }, 100);
    // window.addEventListener('load', function(){
        // document.getElementById(uuid).removeAttribute('id');
    // })
    return;
}

function excerpt(excerpt, n, uuid) {
    var exists = setInterval(function () {
        if(document.getElementById(`excerpt_${uuid}`) !== null) {
            clearInterval(exists);
            document.getElementById(`excerpt_${uuid}`).innerHTML = `
            ${excerpt.split(" ").slice(0, n).join(" ")}...
            <div class="clear"></div>`
          }
    }, 100);
    return
}

function title(title, n, uuid) {
  var exists = setInterval(function () {
    if(document.getElementById(`title_${uuid}`) !== null) {
      clearInterval(exists)
      document.getElementById(`title_${uuid}`).innerHTML = `
      ${title.split(" ").slice(0, n).join(" ")}...`
    }
  }, 100)
  return
}

//function to trim titles in story-grid if too long
function titleBody(title, n, uuid) {
    var exists = setInterval(function () {
        if(document.getElementById(`title_${uuid}`) !== null) {
            clearInterval(exists)
            if (title.length > 75) {
                document.getElementById(`title_${uuid}`).innerHTML = `
            ${title.split(" ").slice(0, n).join(" ")}...`
            } else {
                document.getElementById(`title_${uuid}`).innerHTML = `
            ${title}`
            }
        }
    }, 100)
    return
}

