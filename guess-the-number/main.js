import "./style.css";

const startButton = document.querySelector("#startButton");
const startContainer = document.querySelector("#startContainer");

const submitButton = document.querySelector("#submitButton");
const randomNumber = 250;
const wrongNumbers = [];

let submitNumber;

startButton.addEventListener("click", (event) => {
  startContainer.style.transform = `translateX(${5000}px)`;
  startContainer.style.transition = `transform 5s ease-out`;
});
console.log(startButton);

function drawX(wrongNumber) {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  for (let i = 0; i < wrongNumbers.length; i++) {
    let currentNumber = wrongNumbers[i];
    ctx.moveTo(currentNumber - 10, 10);
    ctx.lineTo(currentNumber + 10, 30);
    ctx.moveTo(currentNumber + 10, 10);
    ctx.lineTo(currentNumber - 10, 30);
  }

  ctx.strokeStyle = "#0891b2";
  ctx.stroke();
}

submitButton.addEventListener("click", (event) => {
  let yourGuess = document.getElementById("yourGuessInput").value;
  submitNumber = yourGuess;
  console.log(yourGuess);

  if (yourGuess !== randomNumber) {
    let wrongNumber = yourGuess;
    wrongNumbers.push(wrongNumber);
    drawX(wrongNumber);
  }
});
