// 1. create a random choice mechanism for computer

const gameArray = ['rock', 'paper', 'scissors']; 

function getComputerChoice() {
    let randomItem = gameArray[Math.floor(Math.random() * 3)];
    return randomItem;
}

// 2. create a function for one round
const buttons = document.querySelectorAll('button');
let playerChoice = buttons.forEach((btn) => {
    btn.addEventListener('click', e => {
        if (e.target.className == 'Rock') {
            playRound('rock', getComputerChoice())
        } else if (e.target.className == 'Paper') {
            playRound('paper', getComputerChoice())
        } else if (e.target.className == 'Scissors') {
            playRound('scissors', getComputerChoice())
        }
    });
});

const div = document.querySelector('.outcome'); 
function playRound(playerSelection, computerSelection) {

    if (computerSelection == playerSelection) {
        div.textContent = 'Tie'; //use return instead 
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        div.textContent = 'You lose! Paper beats Rock';
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        div.textContent = 'You lose! Rock beats scissors';
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        div.textContent = 'You lose! Scissors beat paper';
    } else if (
        computerSelection == 'rock' && playerSelection == 'paper' || computerSelection == 'scissors' && playerSelection == 'rock' || computerSelection == 'paper' && playerSelection == 'scissors'
    ) {
        div.textContent = 'You won';
    }
}

