function hide_show() {
    var x = document.getElementById("something_wrong");
    var b = document.getElementById("button_sm");
    
    if(x.style.display === "none") {
        x.style.display = "block";
        if(document.body.classList.contains("tag-the-croft")){
            b.style.background = "#e9dcff"
            b.style.color = "#a272f2"
        } else {
            b.style.background = "#EFD0D1"
            b.style.color = "#c2262f"
        }
    } else {
        x.style.display = "none";
        if(document.body.classList.contains("tag-the-croft")){
            b.style.background = "#a272f2"
            b.style.color = "#fff"
        } else {
            b.style.background = "#c2262f"
            b.style.color = "#fff"
        }
    }
}
