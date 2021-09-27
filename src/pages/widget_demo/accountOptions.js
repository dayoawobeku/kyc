const accountSvg = document.querySelectorAll(".account_svg");

function changeFill(item) {
  for (let i = 0; i < accountSvg.length; i++) {
    if (item === i) {
      accountSvg[item].style.fill = "#3977DE";
      accountSvg[item + 1].style.fill = "#677189";
      return;
    } else {
      accountSvg[item - 1].style.fill = "#677189";
    }
  }
}
