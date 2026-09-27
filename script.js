const passwordInput = document.getElementById("password");

const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");

const lengthCheck = document.getElementById("length");
const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numberCheck = document.getElementById("number");
const specialCheck = document.getElementById("special");

const recommendationText =
    document.getElementById("recommendation-text");


passwordInput.addEventListener("input", analyzePassword);


function analyzePassword() {

    const password = passwordInput.value;

    let score = 0;

    const hasLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    updateCheck(lengthCheck, hasLength, "At least 8 characters");
    updateCheck(uppercaseCheck, hasUppercase, "Contains uppercase letter");
    updateCheck(lowercaseCheck, hasLowercase, "Contains lowercase letter");
    updateCheck(numberCheck, hasNumber, "Contains a number");
    updateCheck(specialCheck, hasSpecial, "Contains special character");


    if (hasLength) score++;
    if (hasUppercase) score++;
    if (hasLowercase) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;


    if (password.length === 0) {

        strengthBar.style.width = "0%";
        strengthText.textContent = "Enter a password";

        recommendationText.textContent =
            "Enter a password to receive security recommendations.";

        return;
    }


    const percentage = score * 20;

    strengthBar.style.width = percentage + "%";


    if (score <= 2) {

        strengthText.textContent = "Weak";

        strengthBar.style.background = "#ff4d4d";

        recommendationText.textContent =
            "Use a longer password with uppercase letters, numbers, and special characters.";

    } else if (score === 3 || score === 4) {

        strengthText.textContent = "Medium";

        strengthBar.style.background = "#ffc107";

        recommendationText.textContent =
            "Your password has some good characteristics, but it can be stronger.";

    } else {

        strengthText.textContent = "Strong";

        strengthBar.style.background = "#00ffaa";

        recommendationText.textContent =
            "Good password structure. Keep using unique passwords for different accounts.";

    }
}


function updateCheck(element, condition, text) {

    if (condition) {

        element.textContent = "✅ " + text;
        element.style.color = "#00ffaa";

    } else {

        element.textContent = "❌ " + text;
        element.style.color = "#9fb3c3";

    }
}


function togglePassword() {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

    } else {

        passwordInput.type = "password";

    }
}
