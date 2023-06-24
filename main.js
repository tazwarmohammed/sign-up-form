// document.getElementById('registration-form').addEventListener('submit', function(event) {
//     var password = document.getElementById('password').value;
//     var confirmPassword = document.getElementById('confirm-password').value;

//     if (password !== confirmPassword) {
//       event.preventDefault(); // Prevent form submission
//       document.getElementById('confirm-password').classList.add('invalid');
//     }
// });

function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword) {
      document.getElementById("confirm-password").setCustomValidity("Passwords do not match.");
    } else {
      document.getElementById("confirm-password").setCustomValidity("");
    }
}