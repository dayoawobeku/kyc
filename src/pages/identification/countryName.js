const type = document.getElementById("type");
const kenya = document.getElementById("kenya");
const nigeria = document.getElementById("nigeria");
const rwanda = document.getElementById("rwanda");
const ghana = document.getElementById("ghana");
const selectedCountry = document.getElementById("dropdownMenuButton");

// toggle check mark and background color onclick
const countryChecked = document.createElement("img");
countryChecked.src = "../../../assets/images/check.svg";
nigeria.appendChild(countryChecked);

// for some reason, the dropdown disappeared on clicking another country. this fixed it
const showDropdown = document.createElement("img");
showDropdown.src = "../../../assets/images/dropdown.svg";

function addDropdown() {
  selectedCountry.appendChild(showDropdown);
}

// so a forEach can easily loop through
const arrKenya = [nigeria, rwanda, ghana];
const arrNigeria = [kenya, rwanda, ghana];
const arrRwanda = [nigeria, kenya, ghana];
const arrGhana = [nigeria, rwanda, kenya];

kenya.addEventListener("click", function () {
  selectedCountry.innerText = "Kenya";
  kenya.classList.add("bg-lightblue");
  arrKenya.forEach((i) => {
    i.classList.remove("bg-lightblue");
  });
  kenya.appendChild(countryChecked);
  addDropdown();
});

nigeria.addEventListener("click", function () {
  selectedCountry.innerText = "Nigeria";
  nigeria.classList.add("bg-lightblue");
  arrNigeria.forEach((i) => {
    i.classList.remove("bg-lightblue");
  });
  nigeria.appendChild(countryChecked);
  addDropdown();
});

rwanda.addEventListener("click", function () {
  selectedCountry.innerText = "Rwanda";
  rwanda.classList.add("bg-lightblue");
  arrRwanda.forEach((i) => {
    i.classList.remove("bg-lightblue");
  });
  rwanda.appendChild(countryChecked);
  addDropdown();
});

ghana.addEventListener("click", function () {
  selectedCountry.innerText = "Ghana";
  ghana.classList.add("bg-lightblue");
  arrGhana.forEach((i) => {
    i.classList.remove("bg-lightblue");
  });
  ghana.appendChild(countryChecked);
  addDropdown();
});
