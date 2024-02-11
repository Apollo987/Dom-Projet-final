import "./style.css";

const startButton = document.querySelector("#startButton");
const startContainer = document.querySelector("#startContainer");
const guessCountElement = document.querySelector("#guessCount");
const playAgainButton = document.querySelector("#playAgainButton");
const submitButton = document.querySelector("#submitButton");

let submitNumber;
let randomNumber = Math.floor(Math.random() * 500);
let countGuess = 0;

function playAgain() {
  countGuess = 0;
  document.getElementById("yourGuessInput").value = "";
  playAgainButton.style.visibility = "hidden";
  randomNumber = Math.floor(Math.random() * 500);

  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  game();
}

startButton.addEventListener("click", (event) => {
  startContainer.style.transform = `translateX(${5000}px)`;
  startContainer.style.transition = `transform 5s ease-out`;
});

function drawX(wrongNumber) {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.beginPath();

    ctx.moveTo(wrongNumber - 10, 10);
    ctx.lineTo(wrongNumber + 10, 30);
    ctx.moveTo(wrongNumber + 10, 10);
    ctx.lineTo(wrongNumber - 10, 30);
    ctx.closePath();

    ctx.strokeStyle = "#0891b2";
    ctx.stroke();
  }
}

function game() {
  // let randomNumber = Math.floor(Math.random() * 500);
  console.log(randomNumber);

  submitButton.addEventListener("click", (event) => {
    let yourGuess = document.getElementById("yourGuessInput").value;
    submitNumber = parseInt(yourGuess, 10);
    const hintbox = document.querySelector("#hintBox");
    event.preventDefault();
    if (
      submitNumber !== randomNumber &&
      submitNumber <= 500 &&
      submitNumber >= 0 &&
      submitNumber < randomNumber
    ) {
      let wrongNumber = submitNumber;
      hintbox.innerText = "Le numéro est plus grand !";
      drawX(wrongNumber);
      document.getElementById("yourGuessInput").value = "";
      countGuess += 1;
    } else if (
      submitNumber !== randomNumber &&
      submitNumber <= 500 &&
      submitNumber >= 0 &&
      submitNumber > randomNumber
    ) {
      let wrongNumber = submitNumber;
      hintbox.innerText = "Le numéro est plus petit !";
      drawX(wrongNumber);
      document.getElementById("yourGuessInput").value = "";
      countGuess += 1;
    } else if (submitNumber > 500 || submitNumber < 0) {
      hintbox.innerText = " Le numéro doit être compris entre 0 et 500 !";
      document.getElementById("yourGuessInput").value = "";
      countGuess += 1;
    } else if (submitNumber === randomNumber) {
      hintbox.innerText = "Good Job ! Number was : " + randomNumber;
      playAgainButton.style.visibility = "visible";
    } else if (isNaN(submitNumber)) {
      hintbox.innerText = "Vous devez entrer un nombre !";
      document.getElementById("yourGuessInput").value = "";
      countGuess += 1;
    }
    console.log(countGuess);
    guessCountElement.textContent = countGuess;
  });
}

game();

playAgainButton?.addEventListener("click", (event) => {
  playAgain();
});
