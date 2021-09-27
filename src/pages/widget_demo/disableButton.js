const submitButton = document.getElementById("submit");
const otp = document.getElementById("otp");
const password = document.getElementById("password");

function passwordInput() {
  password.addEventListener("keyup", (e) => {
    const value = e.currentTarget.value;
    submitButton.disabled = false;
    if (value === "" || value.length < 8) {
      submitButton.disabled = true;
    }
  });
}

function otpInput() {
  otp.addEventListener("keyup", (e) => {
    const value = e.currentTarget.value;
    submitButton.disabled = false;
    if (value === "") {
      submitButton.disabled = true;
    }
  });
}
