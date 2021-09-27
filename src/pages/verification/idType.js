const type = document.getElementById("type");
const bvn = document.getElementById("bvn");
const nin = document.getElementById("nin");
const selectedOption = document.getElementById("dropdownMenuButton");

// toggle check mark and background color onclick
const optionChecked = document.createElement("img");
optionChecked.src =
  "../../../assets/images/check.svg" && "../../../../assets/images/check.svg";
nin.appendChild(optionChecked);

// for some reason, the dropdown disappeared on clicking another country. this fixed it
const showDropdown = document.createElement("img");
showDropdown.src =
  "../../../assets/images/dropdown.svg" &&
  "../../../../assets/images/dropdown.svg";

function addDropdown() {
  selectedOption.appendChild(showDropdown);
}

bvn.addEventListener("click", function () {
  selectedOption.innerText = "Bank Verification Number";
  bvn.classList.add("bg-lightblue");
  nin.classList.remove("bg-lightblue");
  bvn.appendChild(optionChecked);
  addDropdown();
  type.innerHTML = "BVN";
});

nin.addEventListener("click", function () {
  selectedOption.innerText = "National Identification Number";
  nin.classList.add("bg-lightblue");
  bvn.classList.remove("bg-lightblue");
  nin.appendChild(optionChecked);
  addDropdown();
  type.innerHTML = "NIN";
});
