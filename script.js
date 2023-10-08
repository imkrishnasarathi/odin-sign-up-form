const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirmPassword");
const validationText = document.getElementById("validationText");

  function validatePassword() {
    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;

    if (password !== confirmPassword) {
      confirmPasswordField.setCustomValidity("Passwords must match");
      confirmPasswordField.classList.add("error");
      passwordField.classList.add("error");
      validationText.textContent = "* Passwords must match";

    } else {
      confirmPasswordField.setCustomValidity("");
      confirmPasswordField.classList.remove("error");
      passwordField.classList.remove("error");
      validationText.textContent = "";
    }
  }

  confirmPasswordField.addEventListener("input", validatePassword);