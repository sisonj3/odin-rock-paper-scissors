let playerScore = 0;
let cpuScore = 0;

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', reset);

const choices = Array.from(document.querySelectorAll('.choice'));
console.log(choices);
choices.forEach(choice => choice.addEventListener('click', playRound));

function getComputerChoice(){
    /* Get a random number between 0 and 2 */
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0){
        return "Rock";
    } else if (choice == 1){
        return "Paper"
    } else if (choice == 2){
        return "Scissors";
    }
}

function win(playerChoice, computerSelection){
    playerScore += 1;
    return "You Win! " + playerChoice + " beats " + computerSelection;
}

function lose(playerChoice, computerSelection){
    cpuScore += 1;
    return "You Lose! " + computerSelection + " beats " + playerChoice;
}

function reset() {
    const score = document.querySelector('.score');

    playerScore = 0;
    cpuScore = 0;

    score.textContent = playerScore + ":" + cpuScore;
}

/* Plays a single round of rock, paper, scissors */
function playRound(e, computerSelection = getComputerChoice()){

    //Query Selectors
    const vs = document.querySelector('.vs');
    const score = document.querySelector('.score');
    const result = document.querySelector('.result');

    /* Set playerChoice based on button pressed */
    let playerChoice = e.target.textContent;
    vs.textContent = playerChoice + " VS " + computerSelection;

    if (playerChoice == computerSelection){
        result.textContent = "Draw!";
    } else if (playerChoice == "Rock") {
        if (computerSelection == "Scissors") {
            result.textContent = win(playerChoice, computerSelection);
        } else {
            result.textContent = lose(playerChoice, computerSelection);
        }
    } else if (playerChoice == "Paper") {
        if (computerSelection == "Rock") {
            result.textContent = win(playerChoice, computerSelection);
        } else {
            result.textContent = lose(playerChoice, computerSelection);
        }
    } else if (playerChoice == "Scissors") {
        if (computerSelection == "Paper") {
            result.textContent = win(playerChoice, computerSelection);
        } else {
            result.textContent = lose(playerChoice, computerSelection);
        }
    } else {
        result.textContent = "Invalid player selection!";
    }

    score.textContent = playerScore + ":" + cpuScore;

    if(playerScore >= 5){
        result.textContent = "You won the game!";
    } else if (cpuScore >= 5) {
        result.textContent = "You loss the game!";
    }
}


