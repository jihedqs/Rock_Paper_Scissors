let arr = ["rock", "paper", "scissors"];
function getComputerChoice() {
  let index = Math.floor(Math.random() * 3);
  let computerSelection = arr[index];
  return computerSelection;
}

function game() {
  let score = 0;
  let botScore = 0;
  while (score != 5 && botScore != 5) {
    function playRound(playerSelection, computerSelection) {
      lowPlayer = playerSelection.toLowerCase();
      if (lowPlayer == computerSelection) {
        console.log("draw");
      } else if (
        (lowPlayer == "rock" && computerSelection == "scissors") ||
        (lowPlayer == "paper" && computerSelection == "rock") ||
        (lowPlayer == "scissors" && computerSelection == "paper")
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
