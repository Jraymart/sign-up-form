const form = document.querySelector("#sign-up");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phone = document.querySelector("#tel");
const password = document.querySelector("#password");
const confPassword = document.querySelector("#confirm-password")

const fnameError = document.querySelector("#first-name-error");
const lnameError = document.querySelector("#last-name-error");
const emailError = document.querySelector("#email-error");
const telError = document.querySelector("#tel-error");
const pwdError = document.querySelector("#password-error");
const cPwdError = document.querySelector("#confirm-password-error");




form.addEventListener("submit", (e) => {
    let isValid = true;
    if (!firstName.validity.valid) {
        fnameError.textContent = "Please enter your first name";
        isValid = false;
    }

    if (!lastName.validity.valid) {
        lnameError.textContent = "Please enter your last name";
        isValid = false;
    }

    if (!email.validity.valid) {
        emailError.textContent = "Please enter a valid email";
        isValid = false;
    }

    if (!phone.validity.valid) {
        telError.textContent = "Please enter a valid phone number";
        isValid = false;
    }

    if (!password.validity.valid) {
        pwdError.textContent = "Please a valid password";
        isValid = false;
    }

    if (confPassword.value !== password.value) {
        cPwdError.textContent = "Passwords do not match";
        isValid = false;
    }
    else if (confPassword.value === "") {
        cPwdError.textContent = "Please confirm your password";
        isValid = false;
    }
    else {
        cPwdError.textContent = "";
    }

    if (!sValid){
        e.preventDefault();
    }
})