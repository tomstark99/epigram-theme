if(document.URL.split("/").slice(-2)[0] === "the%20croft"){
    document.getElementById("style").href = "/assets/css/style-croft.css?v=336cc0b901";
    document.getElementById("colour").href = "/assets/css/croft-color.css?v=336cc0b901";
} else {
    const metas = document.getElementsByTagName("meta");
    
    for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('property') === "article:tag") {
            if (metas[i].getAttribute('content') === "the croft") {
                document.getElementById("style").href = "/assets/css/style-croft.css?v=336cc0b901";
                document.getElementById("colour").href = "/assets/css/croft-color.css?v=336cc0b901";
                break;
            }
        }
    }
}
