function hide_show() {
    var x = document.getElementById("something_wrong");
    var b = document.getElementById("button_sm");
    
    if(x.style.display === "none") {
        x.style.display = "block";
        if(document.body.classList.contains("tag-the-croft")){
            b.style.background = "#f9e6ff"
            b.style.color = "#7B52C2"
        }
    } else {
        x.style.display = "none";
        if(document.body.classList.contains("tag-the-croft")){
            b.style.background = "#7B52C2"
            b.style.color = "#fff"
        }
    }
}
