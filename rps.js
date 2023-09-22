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

    /* Set playerChoice based on button pressed */
    let playerChoice = e.target.textContent;
    console.log(playerChoice + " vs " + computerSelection);

    /* Win/Loss Strings */
    const win = "You Win! ";
    const lose = "You Lose! ";

    if (playerChoice == computerSelection){
        return "Draw!";
    } else if (playerChoice == "Rock") {
        if (computerSelection == "Scissors") {
            return win + playerChoice + " beats " + computerSelection;
        } else {
            return lose + computerSelection + " beats " + playerChoice;
        }
    } else if (playerChoice == "Paper") {
        if (computerSelection == "Rock") {
            return win + playerChoice + " beats " + computerSelection;
        } else {
            return lose + computerSelection + " beats " + playerChoice;
        }
    } else if (playerChoice == "Scissors") {
        if (computerSelection == "Paper") {
            return win + playerChoice + " beats " + computerSelection;
        } else {
            return lose + computerSelection + " beats " + playerChoice;
        }
    } else {
        return "Invalid player selection!";
    }

}

const choices = Array.from(document.querySelectorAll('.choice'));
console.log(choices);
choices.forEach(choice => choice.addEventListener('click', playRound));
