let arr = ["rock", "paper", "scissors"];
function getComputerChoice() {
  let index = Math.floor(Math.random() * 3);
  let computerSelection = arr[index];
  return computerSelection;
}
function game() {
  function playRound(playerSelection, computerSelection) {
    lowPlayer = playerSelection.toLowerCase();
    if (lowPlayer == computerSelection) {
      return "draw";
    } else if (
      (lowPlayer == "rock" && computerSelection == "scissors") ||
      (lowPlayer == "paper" && computerSelection == "rock") ||
      (lowPlayer == "scissors" && computerSelection == "paper")
    ) {
      return `Vectory`;
    } else {
      return `Defeat`;
    }
  }

  let playerScore = 0;
  let computerScore = 0;
  const scorePragraph = document.querySelector(".score");
  function check(playerSelection, computerSelection) {
    if (playRound(playerSelection, computerSelection) == "draw") {
      scorePragraph.textContent =
        "computer: " + computerScore + " - " + "player: " + playerScore;

      console.log(playerScore + " - " + computerScore);
    } else if (playRound(playerSelection, computerSelection) == "Vectory") {
      ++playerScore;
      scorePragraph.textContent =
        "computer: " + computerScore + " - " + "player: " + playerScore;

      console.log(playerScore + " - " + computerScore);
    } else if (playRound(playerSelection, computerSelection) == "Defeat") {
      ++computerScore;
      scorePragraph.textContent =
        "computer: " + computerScore + " - " + "player: " + playerScore;
    }
  }

  const div = document.querySelector(".result");
  const btns = document.querySelectorAll("button");
  const winParagraph = document.querySelector(".win");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (playerScore >= 5 || computerScore >= 5) {
        return;
      }
      const computerSelection = getComputerChoice();
      const playerSelection = btn.className;
      const p = `${playRound(playerSelection, computerSelection)}`;
      const result = document.createElement("div");
      result.textContent = p;
      div.append(result);
      check(playerSelection, computerSelection);
    });
  });
}

game();
