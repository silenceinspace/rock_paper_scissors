// 1. create a random choice mechanism for computer

const gameArray = ['rock', 'paper', 'scissors']; 

function getComputerChoice() {
    let randomItem = gameArray[Math.floor(Math.random() * 3)]; //picks one option among 0 1 2; works wit strings as well as with numbers
    return randomItem;
}

// 2. create a function for one round, it's like a sample for the 5-round function

let input; //declare this variable in a global scope so that each new round will ask for input

function playRound(playerSelection, computerSelection) {

    input = prompt('Your choice?', '');
    playerSelection = input;
    playerSelection = playerSelection.toLowerCase(); //non-sensitive input, any correct option (PaPer/sciSSorS/ROCK will be converted to lower case)

    if (computerSelection == playerSelection) {
        return 'Tie';
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        return 'You lose! Paper beats Rock';
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        return 'You lose! Rock beats scissors';
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        return 'You lose! Scissors beat paper';
    } else if (
        computerSelection == 'rock' && playerSelection == 'paper' || computerSelection == 'scissors' && playerSelection == 'rock' || computerSelection == 'paper' && playerSelection == 'scissors'
    ) {
        return 'You won';
    } else { 
        return 'error'; //deals with empty strings, numbers and other random values that are not game choices  
    }
}

// 3. create the 5-round function that keeps the score of rounds and announces a winner after 5 rounds 

    let player = 0;
    let computer = 0;
    let winner;

function game() {

    for (let i = 0; i < 5; i++){
        let result = playRound(input, getComputerChoice()); // add two arguments to where function parameters are

        if (result == 'You won') {
            ++player; //incrementing by 1 the score of player
            console.log(`Player won: ${player} - ${computer}`); //keep the score updated in real time
        } else if (result == 'You lose! Paper beats Rock' || result == 'You lose! Rock beats scissors' || result == 'You lose! Scissors beat paper'){
            ++computer;
            console.log(`Computer won: ${player} - ${computer}`)
        } else if (result == 'Tie'){
            ++player;
            ++computer;
            console.log(`Tie: ${player} - ${computer}`);
        } else {
            alert('Choose one of these: rock, paper, or scissors');
            // endGame();
        }
    }

    switch(true) { //determining a winner
        case player>computer:
            winner = 'Winner: You';
            break;

        case computer>player:
            winner = 'Winner: Computer';
            break;
            
        case computer === player && computer !==0 && player !==0:
            winner = "Winner: Neither, it's a freaking tie xD";
            break;

        default: winner = 'Nothing';
        }
        return winner; //returning this value so that it's stored in the global scope variable called "winner"
}

// function endGame() {
//     player = 0;
//     computer = 0;
//     return; 
// }

console.log(game());


