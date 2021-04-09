var class_list = document.body.classList;
var re_croft = new RegExp("^tag-(the-croft|wellbeing|food|travel|style){1}$");
var re_culture = new RegExp("^tag-(entertainment|film-tv|arts|music){1}$");
var re_sport = new RegExp("^tag-(sport|intramural|football|basketball|netball|badminton|hockey){1}$");
var list_items = document.getElementsByTagName("li");
var nav_items = []

for(var i = 0; i < list_items.length; i++) {
    if(list_items[i].className.match(/^nav-.*$/)){
        nav_items.push(list_items[i]);
    }
}
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
} else if (class_list.contains("tag-the-croft")) {
    togglehome("THE CROFT");
} else if (class_list.contains("tag-entertainment")) {
    togglehome("CULTURE");
} else if (class_list.contains("tag-sport")) {
    togglehome("SPORT");
} else if (class_list.contains("tag-puzzles")) {
    togglehome("PUZZLE");
} else if (class_list.contains("page-get-involved")) {
    togglehome("GET INVOLVED");
}

function togglehome(xd) {
    for(var i = 0; i < nav_items.length; i++) {
        if(nav_items[i].innerText === xd && nav_items[i].classList.contains("current-menu-item")) {
            return;
        } else {
            console.log(nav_items[i].innerText, "REMOVED OMG");
            nav_items[i].classList.remove("current-menu-item");
            if(nav_items[i].innerText === xd) {
                nav_items[i].classList.add("current-menu-item");
            }
        }
    }
}
