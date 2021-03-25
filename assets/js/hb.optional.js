Handlebars.registerHelper('if_eq', function(a, b, opts) {
    alert(a);
    alert(b);
    if (a == b) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
});

Handlebars.registerHelper('announce', function(value) {
    alert(value);
    return true;
});

Handlebars.registerHelper('isdefined', function (value) {
    return value !== undefined;
  });

Handlebars.registerHelper("logx", function(something) {
    console.log(something);
  });


function loggg(val) {
    console.log(val);
}
