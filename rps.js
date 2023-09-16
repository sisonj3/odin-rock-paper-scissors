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
function playRound(playerSelection = "rock", computerSelection = getComputerChoice()){
    /* Set playerSelection to appropriate format*/
    let playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
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

function game(){
    for(let i = 0; i < 5; i ++) {
        console.log(playRound(prompt("Rock, Paper, Scissors?")));
    }
}
