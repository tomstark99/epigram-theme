var onJOB = false;

if(document.URL.split("/").slice(-2)[0] === "the%20croft"){
    var elements = document.getElementsByClassName("menu-wrapper");
    for (var i = 0; i < elements.length; i++) {
        // elements[i].style.backgroundColor = "#CF71EE";
        elements[i].style.backgroundColor = "#CF71EE";
    }
    onJOB = true;
}
if(!onJOB) {
    var croft = document.getElementById("croft_head");
    croft.addEventListener("mouseover", function() {
        var elements = document.getElementsByClassName("menu-wrapper");
        for (var i = 0; i < elements.length; i++) {
            // elements[i].style.backgroundColor = "#CF71EE";
            elements[i].animate([{backgroundColor:"#c2262f"},{backgroundColor:"#CF71EE"}],{duration:500});
            elements[i].style.backgroundColor = "#CF71EE";
        }
    });
    croft.addEventListener("mouseout", function() {
        var elements = document.getElementsByClassName("menu-wrapper");
        for (var i = 0; i < elements.length; i++) {
            elements[i].animate([{backgroundColor:"#CF71EE"},{backgroundColor:"#c2262f"}],{duration:500});
            elements[i].style.backgroundColor = "#c2262f";
        }
    });
}
