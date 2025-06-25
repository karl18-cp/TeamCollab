document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission until validation passes

    var name = document.querySelector("[name='name']").value;
    var email = document.querySelector("[name='email']").value;

    // Validate Name
    if (name === "") {
        alert("Name is required");
        return; // Stop further execution if name is empty
    }

    // Validate Email
    if (email.indexOf('@') === -1) {
        alert("Invalid email");
        return; // Stop further execution if email is invalid
    }

    alert("Form submitted!");  // Show this alert only if all validations pass
    this.submit(); // Manually submit the form after validation
});
