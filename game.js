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

    // playerSelection = prompt('Your choice?');
    playerSelection = playerSelection.toLowerCase();

    if (computerSelection == playerSelection) {
        return 'Tie';
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        return 'You lose! Paper beats Rock';
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        return 'You lose! Rock beats scissors';
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        return 'You lose! Scissors beat paper';
    } else {
        return 'You won';
    }
}


//4.

    let player = 0;
    let computer = 0;
    let winner;

function game() {

    for (let i = 0; i < 5; i++){
        let result = playRound('rock', getComputerChoice());

        if (result == 'You won') {
            ++player;
            console.log(`Player score: ${player}`);
        } else if (result == 'You lose! Paper beats Rock' || result == 'You lose! Rock beats scissors' || result == 'You lose! Scissors beat paper'){
            ++computer;
            console.log(`Computer score: ${computer}`)
        } else {
            console.log('tie');
        }
    }

    switch(true) {
        case player>computer:
            winner = 'You are winner! Congrats';
            break;

        case computer>player:
            winner = 'I am sorry for your defeat...';
            break;
            
        default: winner = "Neither, it's a freaking tie xD";
    }
    return winner;
}

console.log(game());

