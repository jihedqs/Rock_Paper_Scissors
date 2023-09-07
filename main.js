let arr = ["rock", "paper", "scissors"];
function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    let computerSelection = arr[index];
    return computerSelection;
}
let score = 0
let botScore = 0
function game() {
    for (let i = 0; i < 5; i++) {
        function playRound(playerSelection, computerSelection) {
            lowPlayer = playerSelection.toLowerCase()
            if (lowPlayer == computerSelection) {
                return "draw"
            }
            else if ((lowPlayer == 'rock' && computerSelection == 'scissors') ||
                (lowPlayer == 'paper' && computerSelection == 'rock') ||
                (lowPlayer == 'scissors' && computerSelection == 'paper')) {

                score += 1
                botScore -= 1
                return `You win! ${playerSelection} beats ${computerSelection}`
            }
            else {
                score -= 1
                botScore += 1
                return `You Lose! ${computerSelection} beats ${playerSelection}`
            }

        }

        function conditionSeclect() {
            let x = prompt("enter:")
            while (x.toLowerCase() != 'rock' && x.toLowerCase() != 'scissors' && x.toLowerCase() != 'paper') {
                x = prompt("enter again:")
            }
            return x
        }

        const playerSelection = conditionSeclect();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));


    }
    if (score > botScore) {
        console.log("you won " + score)
    }
    else if (score == botScore) {
        console.log("Draw " + score)
    }
    else {
        console.log("you lose " + score)
    }
}

game()
