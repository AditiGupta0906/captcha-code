
var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");

var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var back1 = document.getElementById("back1");
var back2 = document.getElementById("back2");

var submit = document.getElementById("submit");
var progress = document.getElementById("progress");

next1.onclick = function () {
    form1.style.left = "-450px";
    form2.style.left = "40px";
    progress.style.width = "180px";
}

back1.onclick = function () {
    form1.style.left = "40px";
    form2.style.left = "450px";
    progress.style.width = "90px";
}

next2.onclick = function () {
    form2.style.left = "-450px";
    form3.style.left = "40px";
    progress.style.width = "270px";
}

back2.onclick = function () {
    form2.style.left = "40px";
    form3.style.left = "450px";
    progress.style.width = "180px";
}

submit.onclick = function () {
       form3.style.left = "-450px";
       form4.style.left = "40px";
       progress.style.width = "360px";
}
// Generate a random CAPTCHA string
function generateCaptcha() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

// Initialize CAPTCHA
function initCaptcha() {
    const captchaText = document.getElementById("captchaText");
    const captchaInput = document.getElementById("captchaInput");
    const captchaMessage = document.getElementById("captchaMessage");

    // Generate a random CAPTCHA string and display it
    const captchaValue = generateCaptcha();
    captchaText.textContent = captchaValue;

    // Clear input field and message
    captchaInput.value = "";
    captchaMessage.textContent = "";
}

// Validate CAPTCHA
function validateCaptcha() {
    const captchaText = document.getElementById("captchaText");
    const captchaInput = document.getElementById("captchaInput");
    const captchaMessage = document.getElementById("captchaMessage");

    const captchaValue = captchaText.textContent;
    const userInput = captchaInput.value.trim();

    if (userInput === captchaValue) {
        captchaMessage.textContent = "CAPTCHA is correct!";
        captchaMessage.style.color = "green";
        // You can proceed with your form submission or other actions here.
    } else {
        captchaMessage.textContent = "CAPTCHA is incorrect. Please try again.";
        captchaMessage.style.color = "red";
        // You may want to regenerate a new CAPTCHA here.
        initCaptcha();
    }
}

// Initialize CAPTCHA when the page loads
window.onload = initCaptcha;
