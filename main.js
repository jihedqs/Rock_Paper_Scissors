let arr = ["rock", "paper", "scissors"];
let score = 0;
let botScore = 0;

function getComputerChoice() {
  let index = Math.floor(Math.random() * 3);
  return arr[index];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("draw");
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    score += 1;
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    console.log(score + " / " + botScore);
  } else {
    botScore += 1;
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    console.log(score + " / " + botScore);
  }
}

function game() {
  while (score != 5 && botScore != 5) {
    const playerSelection = prompt("enter:");
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
  if (score == 5) {
    console.log("you win " + score + " / " + botScore);
  } else {
    console.log("you lose " + score + " / " + botScore);
  }
}

game();
