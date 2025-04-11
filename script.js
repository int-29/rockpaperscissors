function getComputerChoice() {
    let computerChoice = "";
    choice = (Math.floor(Math.random() * 100));
    if (choice >=0 && choice <=33) {
        computerChoice = "Rock";
    } else if (choice > 33 && choice <= 66) {
        computerChoice = "Paper";
    } else {computerChoice = "Scissors";
    }
    console.log('Computer choice: ', computerChoice);
    return computerChoice;
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'Scissors') {
        console.log('You WIN! Rock beats scissors!');
        humanScore += 1;
    } else if (humanChoice === 'rock' && computerChoice === 'Paper') {
        console.log('You lose! Paper beats rock!');
        computerScore += 1;

    } else if (humanChoice === 'paper' && computerChoice === 'Scissors') {
        console.log('You lose! Scissors cuts paper!');
        computerScore += 1;
    } else if (humanChoice === 'paper' && computerChoice === 'Rock') {
        console.log('You Win! Paper beats rock!');
        humanScore += 1;

    } else if (humanChoice === 'scissors' && computerChoice === 'Paper') {
        console.log('You Win! Scissors cuts paper!');
        humanScore += 1;
    } else if (humanChoice === 'scissors' && computerChoice === 'Rock') {
        console.log('You lose! Rock beats scissors!');
        computerScore += 1;
    } else {
        console.log("It's a tie!");
    }
}

let humanScore = 0;
let computerScore = 0;
game_over = false;
const container = document.querySelector('#container');

const button_rock = document.createElement('button');
button_rock.setAttribute('style', 'width:100px; height: 50px; margin-right: 10px;');
button_rock.textContent = 'Rock';
container.appendChild(button_rock);

const button_paper = document.createElement('button');
button_paper.setAttribute('style', 'width:100px; height: 50px; margin-right: 10px;');
button_paper.textContent = 'Paper';
container.appendChild(button_paper);

const button_scissors = document.createElement('button');
button_scissors.setAttribute('style', 'width:100px; height: 50px');
button_scissors.textContent = 'Scissors';
container.appendChild(button_scissors);

const results = document.querySelector('#results');
const humanResult = document.createElement('p');
humanResult.textContent = 'You: ' + humanScore;
results.appendChild(humanResult);

const computerResult = document.createElement('p');
computerResult.textContent = 'Computer: ' + computerScore;
results.appendChild(computerResult);

const winner = document.createElement('p');
winner.textContent = 'Winner: ';
results.appendChild(winner);



function playGame(humanChoice) {
    if (game_over) return;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice)
    humanResult.textContent = 'You: ' + humanScore;
    computerResult.textContent = 'Computer: ' + computerScore;

    if (humanScore >= 5 || computerScore >= 5) {
        gameOver = true;
    if (humanScore > computerScore) {
        winner.textContent = 'Winner: You!';
    } else {
        winner.textContent = 'Winner: Computer!';
    }
}}


button_rock.addEventListener('click', () => {
    playGame('rock')
})

button_paper.addEventListener('click', () => {
    playGame('paper');
})

button_scissors.addEventListener('click', () => {
    playGame('scissors');
})
