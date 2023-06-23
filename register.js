function submitForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
  
    // Perform form validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    // Display form data
    var formData = {
      Name: name,
      Email: email,
      Password: password
    };
    console.log(formData);
  
    // Clear form inputs
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm-password").value = "";
  }
  