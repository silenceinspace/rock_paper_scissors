/*1. create 3 different values: rock, paper, scissors 
2. make computer pick either 
3. create a function for the game with a winner + loser (taking into account the rules) 
4. player needs to type in one of the options (input should be case-insensitive)
5. a message will be shown (either tie/you win/you lose)
6. the game goes on till a player/computer wins 5 times in general */

//1,2

function getComputerChoice() {
    const gameArray = ['rock', 'paper', 'scissors'];
    let randomItem = gameArray[Math.floor(Math.random() * 3)];
    return randomItem;
}

//3

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (computerSelection == playerSelection) {
        console.log('Tie');
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        console.log('You lose! Paper beats Rock');
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        console.log('You lose! Rock beats scissors');
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        console.log('You win! Scissors beats paper');
    } else {
        console.log('You won');
    }
}

const playerSelection = 'rOCK';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));



