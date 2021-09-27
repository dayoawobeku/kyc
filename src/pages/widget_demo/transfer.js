const acctNumber = document.getElementById("acct_number");
const acctName = document.getElementById("acct_name");

acctNumber.addEventListener("keyup", (e) => {
  const value = e.currentTarget.value;
  if (value.length === 10) {
    acctName.style.display = "block";
  } else {
    acctName.style.display = "none";
  }
});
