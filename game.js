
function getComputerChoice() {
    const gameArray = ['rock', 'paper', 'scissors'];
    let randomItem = gameArray[Math.floor(Math.random() * 3)];
    return randomItem;
}

// limit input to the three options (no number, no empty string) otherwise alert an error. If there's the alert, the game function mustn't run!

// function dontStartGame

// input !== NaN ? alert('Choose these: paper, scissors, rock') : '';

// else if (computerSelection == 'rock' && playerSelection == 'paper' || computerSelection == 'scissors' && playerSelection == 'rock' || computerSelection == 'paper' && playerSelection == 'scissors')

function playRound(playerSelection, computerSelection) {

    let input = prompt('Your choice?', '');
    playerSelection = input;
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
            winner = 'Winner: You';
            break;

        case computer>player:
            winner = 'Winner: Computer';
            break;
            
        default: winner = "Winner: Neither, it's a freaking tie xD";
    }
    return winner;
}

console.log(game());

