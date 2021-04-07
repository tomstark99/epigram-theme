var re = RegExp("^.*(the(%20|-| ){1}croft|wellbeing|food|travel|style){1}.*$");
if(re.test(document.URL)){
    document.getElementById("style").href = "/assets/css/style-croft.css?v=336cc0b901";
    document.getElementById("colour").href = "/assets/css/croft-color.css?v=336cc0b901";
} else {
    const metas = document.getElementsByTagName("meta");
    
    for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('property') === "article:tag") {
            if (re.test(metas[i].getAttribute('content'))) {
                document.getElementById("style").href = "/assets/css/style-croft.css?v=336cc0b901";
                document.getElementById("colour").href = "/assets/css/croft-color.css?v=336cc0b901";
                break;
            }
        }
    }
}
