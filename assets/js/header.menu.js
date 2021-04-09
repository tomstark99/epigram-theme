var class_list = document.body.classList;
var re_croft = new RegExp("^tag-(the-croft|wellbeing|food|travel|style){1}$");
var re_culture = new RegExp("^tag-(entertainment|film-tv|arts|music){1}$");
var re_sport = new RegExp("^tag-(sport|intramural|football|basketball|netball|badminton|hockey){1}$");
if(class_list.contains("home-template")) {
    console.log("home");
} else if (class_list.contains("tag-news")) {
    console.log("news");
} else if (class_list.contains("tag-features")) {
    console.log("features");
} else if (class_list.contains("tag-comment")) {
    console.log("opinion");
} else if (class_list.contains("tag-science")) {
    console.log("science");
} else if (class_list.contains("tag-the-croft")) {
    console.log("the croft");
} else if (class_list.contains("tag-entertainment")) {
    console.log("culture");
} else if (class_list.contains("tag-sport")) {
    console.log("sport");
} else if (class_list.contains("tag-puzzles")) {
    console.log("puzzle");
} else if (class_list.contains("page-get-involved")) {
    console.log("get-involved");
}
