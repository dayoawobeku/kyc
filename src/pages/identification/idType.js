const type = document.getElementById("type");
const passport = document.getElementById("passport");
const nin = document.getElementById("nin");
const license = document.getElementById("license");
const selectedOption = document.getElementById("dropdownMenuButton");

// toggle check mark and background color onclick
const optionChecked = document.createElement("img");
optionChecked.src = "../../../assets/images/check.svg";
passport.appendChild(optionChecked);

// for some reason, the dropdown disappeared on clicking another country. this fixed it
const showDropdown = document.createElement("img");
showDropdown.src = "../../../assets/images/dropdown.svg";

function addDropdown() {
  selectedOption.appendChild(showDropdown);
}

// so a forEach can easily loop through
const arrPassport = [nin, license];
const arrNin = [passport, license];
const arrLicense = [passport, nin];

passport.addEventListener("click", function () {
  selectedOption.innerText = "International Passport";
  passport.classList.add("bg-lightblue");
  arrPassport.forEach((i) => {
    i.classList.remove("bg-lightblue");
  });
  passport.appendChild(optionChecked);
  addDropdown();
  type.innerHTML = "Passport number";
});

nin.addEventListener("click", function () {
  selectedOption.innerText = "National Identification Number";
  nin.classList.add("bg-lightblue");
  arrNin.forEach((i) => {
    i.classList.remove("bg-lightblue");
  });
  nin.appendChild(optionChecked);
  addDropdown();
  type.innerHTML = "NIN";
});

license.addEventListener("click", function () {
  selectedOption.innerText = "Driver's License";
  license.classList.add("bg-lightblue");
  arrLicense.forEach((i) => {
    i.classList.remove("bg-lightblue");
  });
  license.appendChild(optionChecked);
  addDropdown();
  type.innerHTML = "License number";
});
