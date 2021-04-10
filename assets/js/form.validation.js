const email = document.getElementById("email");
// const form = document.getElementById("form");

const reg = new RegExp("^[a-zA-Z0-9.]{2,50}[@]bristol.ac.uk$");

email.addEventListener("input", function(event) {
    if(!reg.test(email.value)) {
        email.setCustomValidity("Please enter a @bristol.ac.uk email");
    } else {
        email.setCustomValidity("");
    }
})

// form.addEventListener("submit", function(event) {
//     console.log("SUBMITTTT");
//     if(!reg.test(email.value)) {
//         event.preventDefault();
//     }
// })
