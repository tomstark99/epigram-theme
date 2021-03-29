function time_ago(time, uuid) {

    // console.log(time);
    // console.log(uuid);
    var time_ = '<i class="fa fa-clock-o"></i><div style="display: inline;">';
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
    } else if ((seconds - week) < 0) {
        time__ = Math.floor(seconds/day) + ' days ago';
    } else {
        var format = { year: 'numeric', month: 'short', day: 'numeric' };
        // time__ = posted.toLocaleDateString("en", format);
        time__ = posted.format("MMM DD, YYYY")
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
