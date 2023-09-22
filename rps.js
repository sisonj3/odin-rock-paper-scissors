let score = 0;

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

/* Plays a single round of rock, paper, scissors */
function playRound(e, computerSelection = getComputerChoice()){

    /* Win/Loss Strings */
    const win = "You Win! ";
    const lose = "You Lose! ";

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
            result.textContent = win + playerChoice + " beats " + computerSelection;
        } else {
            result.textContent = lose + computerSelection + " beats " + playerChoice;
        }
    } else if (playerChoice == "Paper") {
        if (computerSelection == "Rock") {
            result.textContent = win + playerChoice + " beats " + computerSelection;
        } else {
            result.textContent = lose + computerSelection + " beats " + playerChoice;
        }
    } else if (playerChoice == "Scissors") {
        if (computerSelection == "Paper") {
            result.textContent = win + playerChoice + " beats " + computerSelection;
        } else {
            result.textContent = lose + computerSelection + " beats " + playerChoice;
        }
    } else {
        result.textContent = "Invalid player selection!";
    }

}


