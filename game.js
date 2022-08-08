/*1. create 3 different values: rock, paper, scissors - DONE
2. make computer pick either - DONE
3. create a function for the game with a winner + loser (taking into account the rules) 
4. player needs to type in one of the options (input should be case-insensitive)
5. a message will be shown (either tie/you win/you lose)
6. the game goes on till a player/computer wins 5 times in general */


function getComputerChoice() {
    const gameArray = ['Rock', 'Paper', 'Scissors'];
    let randomItem = gameArray[Math.floor(Math.random() * 3)];
    return randomItem;
}


function playRound(playerSelection, computerSelection) {

    // if (computerSelection == playerSelection) {
    //     console.log('Tie');
    // } else if (computerSelection == 'Rock' && playerSelection == 'Paper') {
    //     console.log('You win! Paper beats Rock');
    // } else if (computerSelection == 'Scissors' && playerSelection == 'Rock') {
    //     console.log('You win! Rock beats scissors');
    // } else if (computerSelection == 'Paper' && playerSelection == 'Scissors') {
    //     console.log('You win! Scissors beats paper');
    // } else {
    //     console.log('You lose');
    // }
}





