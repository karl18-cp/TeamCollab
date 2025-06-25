document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission until validation passes

    var name = document.querySelector("[name='name']").value;
    var email = document.querySelector("[name='email']").value;

    // Validate Name
    if (name.trim() === "") {
        alert("Name is required");
        return;
    }

    // Validate Email
    if (email.indexOf('@') === -1 || email.trim() === "") {
        alert("Invalid email");
        return;
    }

    alert("Form submitted!");  // Show this alert only if all validations pass
    this.submit(); // Manually submit the form after validation
});
