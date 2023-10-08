const passwordField = document.getElementById("password");
  const confirmPasswordField = document.getElementById("confirmPassword");

  function validatePassword() {
    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;

    if (password !== confirmPassword) {
      confirmPasswordField.setCustomValidity("Passwords must match");
    } else {
      confirmPasswordField.setCustomValidity("");
    }
  }

  confirmPasswordField.addEventListener("input", validatePassword);