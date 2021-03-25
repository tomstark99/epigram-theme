function time_ago_leg(time) {
  var time_ = '<i class="fa fa-clock-o"></i><div style="display: inline; margin-left:8px;">';

  switch (typeof time) {
    case 'number':
      break;
    case 'string':
      time = +new Date(time);
      break;
    case 'object':
      if (time.constructor === Date) time = time.getTime();
      break;
    default:
      time = +new Date();
  }

  var time_formats = [
    [60, 'seconds', 1], // 60
    [120, '1 minute ago', '1 minute from now'], // 60*2
    [3600, 'minutes', 60], // 60*60, 60
    [7200, '1 hour ago', '1 hour from now'], // 60*60*2
    [86400, 'hours', 3600], // 60*60*24, 60*60
    [172800, '1 day ago', 'Tomorrow'], // 60*60*24*2
    [604800, 'days', 86400], // 60*60*24*7, 60*60*24
    [1209600, '1 week ago', 'Next week'], // 60*60*24*7*4*2
    [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
    [4838400, '1 month ago', 'Next month'], // 60*60*24*7*4*2
    [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
    [58060800, '1 year ago', 'Next year'], // 60*60*24*7*4*12*2
    [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
    [5806080000, '1 century ago', 'Next century'], // 60*60*24*7*4*12*100*2
    [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
  ];
  var seconds = (+new Date() - time) / 1000,
    token = 'ago',
    list_choice = 1;


  if (seconds == 0) {
    return 'Just now'
  }
  if (seconds < 0) {
    seconds = Math.abs(seconds);
    token = 'from now';
    list_choice = 2;
  }
  var i = 0,
    format;
  while (format = time_formats[i++])
  if (seconds < format[0]) {
      if (typeof format[2] == 'string') {
          var time__ = format[list_choice];
          window.addEventListener('load', function(){
            document.getElementById("post_time").innerHTML = time_ + time__;
            // console.log(time__);
        })
        return time__;
    }
    else {
        var time__ = Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
        window.addEventListener('load', function(){
            document.getElementById("post_time").innerHTML = time_ + time__;
            // console.log(time__);
          })
          return time__;
      }
    }
    
  return time;
}

function time_ago(time, uuid) {

    console.log(time);
    console.log(uuid);
    var time_ = '<i class="fa fa-clock-o"></i><div style="display: inline; margin-left:4px;">';
    var time__ = '';

    var posted = new Date(time);
    var now = new Date();

    var minute = 60.0;
    var hour = 60.0 * minute;
    var day = 24.0 * hour;
    var week = 7 * day;

    var seconds = (now.getTime() - posted.getTime())/1000;

    var time_text = document.getElementById("post_time");

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
        time__ = posted.toLocaleDateString("en", format);
    }

    window.addEventListener('load', function(){
        document.getElementById(uuid).innerHTML = time_ + '' + time__;
        // document.getElementById(uuid).removeAttribute('id');
    })
    return;
}

