const btn1 = document.getElementById("btn1"); 
const btn2 = document.getElementById("btn2"); 
const btn3 = document.getElementById("btn3"); 

const playerChoiceText = document.getElementById("player-choice");
const computerChoiceText = document.getElementById("computer-choice");
const resultText = document.getElementById("result");
const scoreText = document.getElementById("score");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}

btn1.addEventListener("click", () => play("rock"));
btn2.addEventListener("click", () => play("paper"));
btn3.addEventListener("click", () => play("scissors"));

function play(playerChoice) {
  const computerChoice = getComputerChoice();

  playerChoiceText.textContent = `You chose: ${playerChoice}`;
  computerChoiceText.textContent = `Computer chose: ${computerChoice}`;

  if (playerChoice === computerChoice) {
    resultText.textContent = "Result: It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    resultText.textContent = "Result: You win! 😎";
    playerScore++;
  } else {
    resultText.textContent = "Result: You lose! 😢";
    computerScore++;
  }

  scoreText.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}
