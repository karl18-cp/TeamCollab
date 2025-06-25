// Buggy form.js
document.querySelector("form").addEventListener("submit", function(event) {
event.preventDefault();

    var name = document.querySelector("[name='name']").value;
    var email = document.querySelector("[name='email']").value;

    // Validate Name
    if (name === "") {
        alert("Name is required");
        return;
    }

    // Validate Email
    if (email.indexOf('@') === -1) {
        alert("Invalid email");
        return;
    }

    alert("Form submitted!");
    this.submit();
});
