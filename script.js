function passwordMismatch() {
    const password = document.getElementById("password");
    const passwordValue = password.value;
    const confirmPassword = document.getElementById("confirm_password");
    const confirmPasswordValue = confirmPassword.value;

    const passwordContainer = document.getElementById("password-container");
    const passwordNotMatchText =  document.getElementById("password-not-match");
    
    if(passwordValue !== confirmPasswordValue) 
    {
        passwordNotMatchText.textContent = "*Passwords do not match";
        password.classList.add("invalid");
        confirmPassword.classList.add("invalid");
    }
    else 
    {
        passwordNotMatchText.textContent = "";
        password.classList.remove("invalid");
        confirmPassword.classList.remove("invalid");
    }
}