let playerScore = 0;
let botScore = 0;
const choice = document.querySelectorAll(".choice");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");
const roundResult = document.querySelector("#result");
const scoreResult = document.querySelector("#scoreResult");
const playAgainButton = document.getElementById("playAgainButton");
playAgainButton.addEventListener("click", resetGame);

function resetGame() {
  playerScore = 0;
  botScore = 0;
  playerScoreDisplay.textContent = "0";
  computerScoreDisplay.textContent = "0";
  roundResult.textContent = "Start!";
  scoreResult.textContent = "Player: 0 - Bot: 0";
  enable();
  playAgainButton.style.display = "none";
}

function enable() {
  choice.forEach((button) => {
    button.disabled = false;
  });
}

let arr = ["rock", "paper", "scissors"];
function getComputerChoice() {
  let index = Math.floor(Math.random() * 3);
  return arr[index];
}

function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  if (playerSelection == computerSelection) {
    roundResult.textContent = `Draw`;
    scoreResult.textContent = `player : ${playerScore} - bot : ${botScore}`;
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    playerScore += 1;
    roundResult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    scoreResult.textContent = `player : ${playerScore} - bot : ${botScore}`;
  } else {
    botScore += 1;
    roundResult.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    scoreResult.textContent = `player : ${playerScore} - bot : ${botScore}`;
  }
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = botScore;
  checkOver();
}
function disable() {
  choice.forEach((button) => {
    button.disabled = true;
  });
}
function checkOver() {
  if (playerScore == 5) {
    roundResult.textContent = "you win " + playerScore + " / " + botScore;
    disable();
    playAgainButton.style.display = "block";
  } else if (botScore == 5) {
    roundResult.textContent = "you win " + playerScore + " / " + botScore;
    disable();
    playAgainButton.style.display = "block";
  }
}

function game() {
  choice.forEach((button) => {
    button.addEventListener("click", function () {
      const playerSelection = button.classList.contains("rock")
        ? "rock"
        : button.classList.contains("paper")
        ? "paper"
        : button.classList.contains("scissors")
        ? "scissors"
        : "";
      playRound(playerSelection);
    });
  });
}

game();
