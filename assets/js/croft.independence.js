var onJOB = false;
var in_drop = false;

const epigram_colour = "#c2262f";
const croft_colour = "#d1daa2";

// if(document.body.classList.contains("tag-the-croft")){
//     document.getElementById("style").href = "/assets/css/style-croft.css?v=336cc0b901";
//     document.getElementById("colour").href = "/assets/css/croft-color.css?v=336cc0b901";
//     onJOB = true;
// } else {
//     //document.getElementById("style").href = "/assets/css/style.css?v=336cc0b901";
//     //document.getElementById("colour").href = "/assets/css/main-color.css?v=336cc0b901";
//     onJOB = false;
// }

// if(document.body.className.split(' ').some(function(c) {return /^tag-(the-croft|wellbeing|food|travel|style){1}$/.test(c) })){
//     onJOB = true;
//     document.getElementById("logo").src = "/assets/images/croft_logo.png";
// } else {
//     document.getElementById("logo").src = "/assets/images/epigram_logo.png";
// }

if(!onJOB) {
    var croft = document.getElementById("croft_head");
    var croft_drop_id = document.getElementById("croft_drop");
    var croft_drop = document.getElementsByClassName("croft_drop");

    croft.addEventListener("mouseover", function(evt) {
        // if(document.getElementById("croft_drop") === null)
        // console.log(evt);
        if(!evt.relatedTarget.classList.contains("croft_drop")) {
            var elements = document.getElementsByClassName("menu-wrapper");
            for (var i = 0; i < elements.length; i++) {
                // elements[i].style.backgroundColor = croft_colour;
                elements[i].animate([{backgroundColor:epigram_colour},{backgroundColor:croft_colour}],{duration:500});
                elements[i].style.backgroundColor = croft_colour;
            }
            croft_drop_id.animate([{backgroundColor:epigram_colour},{backgroundColor:croft_colour}],{duration:500});
            croft_drop_id.style.backgroundColor = croft_colour;
        }
    });
    croft.addEventListener("mouseout", function(evt) {
        if(!evt.relatedTarget.classList.contains("croft_drop")) {
            var elements = document.getElementsByClassName("menu-wrapper");
            for (var i = 0; i < elements.length; i++) {
                elements[i].animate([{backgroundColor:croft_colour},{backgroundColor:epigram_colour}],{duration:500});
                elements[i].style.backgroundColor = epigram_colour;
            }
            croft_drop_id.animate([{backgroundColor:croft_colour},{backgroundColor:epigram_colour}],{duration:500});
            croft_drop_id.style.backgroundColor = epigram_colour;
        }
    });
    for (var i = 0; i < croft_drop.length; i++) {
        croft_drop[i].addEventListener("mouseover", function() {
            in_drop = true;
            /*  rewrite this so that it only happens when not from menu item into drop and not from drop to drop for complete bug free fix
                uncomment to see
                
            var elements = document.getElementsByClassName("menu-wrapper");
            for (var i = 0; i < elements.length; i++) {
                // elements[i].style.backgroundColor = croft_colour;
                elements[i].animate([{backgroundColor:"#c2262f"},{backgroundColor:croft_colour}],{duration:500});
                elements[i].style.backgroundColor = croft_colour;
            }
            croft_drop_id.animate([{backgroundColor:"#c2262f"},{backgroundColor:croft_colour}],{duration:500});
            croft_drop_id.style.backgroundColor = croft_colour;
            */
        });
        croft_drop[i].addEventListener("mouseout", function(evt) {
            in_drop = false;
    
            if(evt.relatedTarget.id !== "croft_head" && !evt.relatedTarget.classList.contains("croft_drop")) {
                var elements = document.getElementsByClassName("menu-wrapper");
                for (var i = 0; i < elements.length; i++) {
                    elements[i].animate([{backgroundColor:croft_colour},{backgroundColor:epigram_colour}],{duration:500});
                    elements[i].style.backgroundColor = epigram_colour;
                }
                croft_drop_id.animate([{backgroundColor:croft_colour},{backgroundColor:epigram_colour}],{duration:500});
                croft_drop_id.style.backgroundColor = epigram_colour;
            }
        });
    }
}

function setCroft() {
    document.getElementById("style").href = "/assets/css/style-croft.css?v=336cc0b901";
    document.getElementById("colour").href = "/assets/css/croft-color.css?v=336cc0b901";
}

function setDefault() {
    document.getElementById("style").href = "/assets/css/style.css?v=336cc0b901";
    document.getElementById("colour").href = "/assets/css/main-color.css?v=336cc0b901";
}


