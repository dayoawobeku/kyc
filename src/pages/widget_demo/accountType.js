const parent = document.querySelector(".parent");
const parent2 = document.querySelector(".parent2");
const child = document.querySelectorAll(".child");
const grand = document.querySelector(".grandp");
const code = document.querySelector(".code-current");
const code2 = document.querySelector(".code-savings");
const savingAmount = document.querySelector(".saving-amount");
const currentAmount = document.querySelector(".current-amount");

grand.addEventListener("click", function (e) {
  const clicked = e.target.closest(".parent");
  const clicked2 = e.target.closest(".parent2");
  if (clicked) {
    currentAmount.classList.remove("sage");
    code.classList.remove("sage");
    savingAmount.classList.add("sage");
    code2.classList.add("sage");
  } else if (clicked2) {
    savingAmount.classList.remove("sage");
    code2.classList.remove("sage");
    code.classList.add("sage");
    currentAmount.classList.add("sage");
  }
});
