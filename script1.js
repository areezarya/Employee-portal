function submitForm(event) {
  event.preventDefault(); // Prevent form submission

  // Get form input values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Perform form validation
  if (!name || !email || !message) {
    alert("Please fill in all fields!");
    return;
  }

  // Display form data
  var formData = {
    Name: name,
    Email: email,
    Message: message
  };
  console.log(formData);

  // Clear form inputs
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  // Show success message
  alert("Your message has been submitted!");
}
