// 1. create a random choice mechanism for computer

const gameArray = ['rock', 'paper', 'scissors']; 

function getComputerChoice() {
    let randomItem = gameArray[Math.floor(Math.random() * 3)];
    return randomItem;
}

// 2. use buttons for getting values
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

// 3. set rules for game
function playRound(playerSelection, computerSelection) {

    if (computerSelection == playerSelection) {
        div.textContent = 'Tie';
        score.textContent = `Tie: ${player} - ${computer}`; 
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        div.textContent = 'You lose! Paper beats Rock';
        lose();
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        div.textContent = 'You lose! Rock beats scissors';
        lose();
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        div.textContent = 'You lose! Scissors beat paper';
        lose();
    } else if (
        computerSelection == 'rock' && playerSelection == 'paper' || computerSelection == 'scissors' && playerSelection == 'rock' || computerSelection == 'paper' && playerSelection == 'scissors'
    ) {
        div.textContent = 'You won';
        ++player;
        score.textContent = `Player won: ${player} - ${computer}`; 
    } return gameOver();
}

function lose(){
    ++computer;
    score.textContent = `Computer won: ${player} - ${computer}`;
};

// 4. track and display progress of game
const div = document.querySelector('.outcome');
const score = document.querySelector('.score');
let player = 0;
let computer = 0;
let winner;

let hide = document.getElementById('hide');

function gameOver() {
    switch(true) {
        case player === 5 && player>computer:
            div.textContent = 'Winner: You';
            hide.style.display = 'none';
            startNewGame();
            // .classList.add('final');
            break;
            
        case computer === 5 && computer>player:
            div.textContent = 'Winner: Computer';
            hide.style.display = 'none';
            startNewGame();
            break;
    }
    return winner = div.textContent;
}

function startNewGame() {
    let newGame = document.createElement('button');
    let div = document.querySelector('.new-game');
    newGame.textContent = 'Start a new game!';
    div.appendChild(newGame);

    newGame.addEventListener('click', () => {
        window.location.reload();
    });
}