const selectOption = document.querySelector(".country");

const selectCountry = "country";

function saveOption(text) {
  localStorage.setItem(selectCountry, text);
}

function optionSubmit(event) {
  const userCountry = selectOption.options[selectOption.selectedIndex].value;

  saveOption(userCountry);
}

function init() {
  selectOption.addEventListener("change", optionSubmit);
}

init();
