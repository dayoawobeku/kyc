// toggle check mark and background color onclick
const div = document.createElement("div");
console.log(div);
const optionChecked = document.createElement("img");
optionChecked.src =
  "../../../assets/images/check.svg" && "../../../../assets/images/check.svg";
div.style.position = "absolute";
div.style.right = "16px";
// div.style.background = "red";
// div.style.width = "100%";
div.appendChild(optionChecked);

const banks = document.querySelectorAll(".banks");

function selectBank(item) {
  for (let i = 0; i < banks.length; i++) {
    if (item == i) {
      banks[item].appendChild(div);
      return;
    }
  }
}

// function myFunction() {
//   let input, filter, ul, li, a, i, txtValue;
//   input = document.getElementById("search_bar");
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("banks_option");
//   li = ul.getElementsByTagName("div");

//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("p")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) != -1) {
//       // li[i].parentElement.classList.add("d-block");
//       li[i].children[1].previousElementSibling.style.display = "";
//       li[i].children[0].nextElementSibling.style.display = "";
//     } else {
//       // li[i].parentElement.classList.add("d-none");

//       li[i].children[1].previousElementSibling.style.display = "none";
//       li[i].children[0].nextElementSibling.style.display = "none";
//     }
//     console.log(li[i].children);
//   }
// }

// // const list = document.querySelector("#banks_option div");

// // // console.log(list);

// // const searchBar = document.forms["search_banks"].querySelector("#search_bar");
// // // console.log(searchBar);

// // searchBar.addEventListener("keyup", function (e) {
// //   const term = e.target.value.toLowerCase();
// //   const banks = list.getElementsByTagName("label");
// //   // console.log(...banks);
// //   Array.from(banks).forEach(function (bank) {
// //     const title = bank.childNodes[1].children[1].textContent;
// //     // console.log(title);
// //     // console.log(bank);
// //     // console.log(bank.childNodes[1].children[1].textContent);
// //     if (title.toLowerCase().indexOf(term) != -1) {
// //       bank.style.display = "block";
// //     } else {
// //       bank.style.display = "none";
// //     }
// //   });
// // });

const searchBar = document.querySelector("#search_bar");
const banksArr = [...banks];

searchBar.addEventListener("keyup", (e) => {
  e.preventDefault();

  const filter1 = banksArr.map((el) => {
    if (el.textContent.toLowerCase().includes(e.target.value)) {
      return el.closest("div");
    } else {
      return undefined;
    }
  });

  const filter2 = banksArr.map((el) => {
    if (!el.textContent.toLowerCase().includes(e.target.value)) {
      return el.closest("div");
    } else {
      return undefined;
    }
  });

  for (const x of filter1) {
    if (x !== undefined) {
      x.classList.remove("filtered");
      x.closest("label").classList.remove("filtered");
    }
  }

  for (const x of filter2) {
    if (x !== undefined) {
      x.classList.add("filtered");
      x.closest("label").classList.add("filtered");
    }
  }
});
