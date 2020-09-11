const rangeForm = document.querySelector(".js-rangeForm"),
  rangeNum = rangeForm.querySelector(".js-rangeNum"),
  rangeInput = rangeForm.querySelector(".js-rangeInput"),
  guessForm = document.querySelector(".js-guessForm"),
  guessInput = guessForm.querySelector(".guessInput"),
  playBtn = guessForm.querySelector(".playBtn"),
  machineChose = document.querySelector(".js-machineChose"),
  result = document.querySelector(".js-result");

function paintrange(text) {
  rangeNum.innerText = `Generate a number between 0 and ${text}`;
  ranNum();
}

function handleInput() {
  const currentValue = rangeInput.value;
  paintrange(currentValue);
}

function handlePlay() {
  const currentValue = guessInput.value;
}

function game() {
  const ranNum = ranNum();
  console.log(ranNum);
}

function ranNum(event) {
  return Math.floor(Math.randon() * event);
}

function init() {
  rangeForm.addEventListener("input", handleInput);
  playBtn.addEventListener("click", handlePlay);
  game();
}
init();
