function hide_show() {
    var x = document.getElementById("something_wrong");
    var b = document.getElementById("button_sm");
    if(x.style.display === "none") {
        x.style.display = "block";
        b.style.background = "#EFD0D1"
        b.style.color = "#c2262f"
    } else {
        x.style.display = "none";
        b.style.background = "#c2262f"
        b.style.color = "#fff"
    }
}
