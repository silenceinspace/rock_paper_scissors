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
        console.log('You lose! Scissors beats paper');
    } else {
        console.log('You won');
    }
}


/*4.
1) Write a new function that will allow playing 5 rounds
2) After each round there should be a message of the result
3) The result messages should be stored somewhere, and after 5 rounds there should be a winner and loser
4)
*/


function game() {
    for (let i = 0; i < 5; i++){

        let result = playRound('Rock', getComputerChoice());

        if (result == 'You won') {console.log('Woah!')};
        
        // if (result == 'You won') {
        //     player = player++;
        //     console.log(player)    
        // }
        // } else if (result == 'You lose! Scissors beats paper' || result == 'You lose! Rock beats scissors' || result == 'You lose! Paper beats rock') {
        //     console.log(`Score: ${computer++}`)
        // } else {}
    }
}

console.log(game());
