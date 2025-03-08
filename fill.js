// Initialize EmailJS
emailjs.init("Edyhv_zdaE7mM_85n");  // Use the User ID you get after signing up on EmailJS

document.getElementById("business-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Send form data using EmailJS
    emailjs.sendForm("service_9uhd9wv", "template_seitjwq", this)
        .then(function(response) {
            console.log("SUCCESS!", response);
            alert("Your inquiry has been sent successfully!");
        }, function(error) {
            console.log("FAILED...", error);
            alert("Something went wrong. Please try again later.");
        });
});
