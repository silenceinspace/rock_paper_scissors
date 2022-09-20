// 1. create a random choice mechanism for computer

const gameArray = ['rock', 'paper', 'scissors']; 

function getComputerChoice() {
    let randomItem = gameArray[Math.floor(Math.random() * 3)];
    return randomItem;
}

// 2. image clicking for getting values
const images = document.querySelectorAll('img');
let playerChoice = images.forEach((img) => {
    img.addEventListener('click', e => {
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
        if (playerSelection == 'paper') {
            div.textContent = 'Tie! You both have PAPER';
            score.textContent = `Score: ${player} - ${computer}`;
        } else if (playerSelection == 'rock') {
            div.textContent = 'Tie! You both have ROCK';
            score.textContent = `Score: ${player} - ${computer}`;
        } else if (playerSelection == 'scissors') {
            div.textContent = 'Tie! You both have SCISSORS';
            score.textContent = `Score: ${player} - ${computer}`;
        }
    }
    
    if (computerSelection == 'paper' && playerSelection == 'rock') {
        div.textContent = 'Lose! Paper beats Rock';
        lose();
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        div.textContent = 'Lose! Rock beats scissors';
        lose();
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        div.textContent = 'Lose! Scissors beat paper';
        lose();
    }

    if (computerSelection == 'rock' && playerSelection == 'paper') {
        div.textContent = 'Win! Paper beats rock';
        win();
    } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
        div.textContent = 'Win! Rock beats scissors';
        win();
    } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
        div.textContent = 'Win! Scissors beat rock';
        win();
    } return gameOver();
}

function lose(){
    ++computer;
    score.textContent = `Score: ${player} - ${computer}`;
};

function win(){
    ++player;
    score.textContent = `Score: ${player} - ${computer}`;
}

// 4. track and display progress of game
const div = document.querySelector('.outcome');
const score = document.querySelector('.score');
let player = 0;
let computer = 0;
let winner;

let hide = document.getElementById('container');

function showForWinner(){
    let finals = document.querySelector('.final-pictures');
    let image = document.createElement('img');
    image.setAttribute('src', './images/final image/deva-williamson-S2jw81lfrG0-unsplash.jpg');
    let para = document.createElement('p');
    para.textContent = "Here's your little surprise, you deserved a piece of cake <3";
    para.style.maxWidth = '800px'; 
    image.style.marginTop = '10px';
    image.style.border = '2px solid red';
    finals.style.textAlign = 'center'; 
    finals.append(image, para);
}

function showForLoser(){
    let finals = document.querySelector('.final-pictures');
    let image = document.createElement('img');
    image.setAttribute('src', './images/final image/thought-catalog-fnztlIb52gU-unsplash.jpg');
    let para = document.createElement('p');
    para.textContent = "Even the best of us have to go through failure sometimes... Cheer up and play again!";
    para.style.maxWidth = '800px';
    image.style.marginTop = '10px';
    image.style.border = '2px solid red';
    finals.style.textAlign = 'center'; 
    finals.append(image, para);
}

function gameOver() {
    switch(true) {
        case player === 5 && player>computer:
            div.textContent = 'Winner: You';
            hide.style.display = 'none';
            showForWinner();
            startNewGame();
            break;
            
        case computer === 5 && computer>player:
            div.textContent = 'Winner: Computer';
            hide.style.display = 'none';
            startNewGame();
            showForLoser();
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