var class_list = document.body.classList;

// regex to more cleanly identify sub list items
var re_croft = new RegExp("^tag-(the-croft|wellbeing|food|travel|style){1}$");
var re_culture = new RegExp("^tag-(entertainment|film-tv|arts|music){1}$");
var re_sport = new RegExp("^tag-(sport|intramural|football|basketball|netball|badminton|hockey){1}$");
var re_page = new RegExp("^page-(get-involved|advertise-with-us|alumni|meet-the-team|read-the-paper){1}$");

var list_items = document.getElementsByTagName("li");
var nav_items = []

// select nav list items from all li items on the page
for(var i = 0; i < list_items.length; i++) {
    if(list_items[i].className.match(/^nav-.*$/)){
        nav_items.push(list_items[i]);
    }
}

/*  didn't understand how switch statement would work for this so just big if block
    toggle home takes the innerText from the list element to compare against expected for the page
*/
if(class_list.contains("home-template")) {
    togglehome("HOME");
} else if (class_list.contains("tag-news")) {
    togglehome("NEWS");
} else if (class_list.contains("tag-features")) {
    togglehome("FEATURES");
} else if (class_list.contains("tag-comment")) {
    togglehome("OPINION");
} else if (class_list.contains("tag-science")) {
    togglehome("SCITECH");
} else if (document.body.className.split(' ').some(function(c) { return re_croft.test(c) })) {
    togglehome("THE CROFT");
} else if (document.body.className.split(' ').some(function(c) { return re_culture.test(c) })) {
    togglehome("CULTURE");
} else if (document.body.className.split(' ').some(function(c) { return re_sport.test(c) })) {
    togglehome("SPORT");
} else if (class_list.contains("tag-puzzles")) {
    togglehome("PUZZLES");
} else if (document.body.className.split(' ').some(function(c) { return re_page.test(c) })) {
    togglehome("GET INVOLVED");
}

function togglehome(xd) {
    for(var i = 0; i < nav_items.length; i++) {
        // kinda redundant check since current-menu-item class was removed from default item in header.hbs
        if(nav_items[i].innerText === xd && nav_items[i].classList.contains("current-menu-item")) {
            return;
        } else {
            nav_items[i].classList.remove("current-menu-item");
            if(nav_items[i].innerText === xd) {
                nav_items[i].classList.add("current-menu-item");
            }
        }
    }
}
