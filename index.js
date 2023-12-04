function submitForm() {
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Display data on the screen
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Entered Data:</h2>" +
        "<p><strong>Name:</strong> " + name + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Message:</strong> " + message + "</p>";
}