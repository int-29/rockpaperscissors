function getComputerChoice() {
    computerChoice = ""
    choice = (Math.floor(Math.random() * 100));
    console.log(choice)
    if (choice >=0 && choice <=33) {
        computerChoice = "Rock"
    } else if (choice > 33 && choice <= 66) {
        computerChoice = "Paper"
    } else {computerChoice = "Scissors"
    }
    console.log(computerChoice)
    return computerChoice
}

function getHumanChoice() {
    let humanChoice = prompt('Introdu Rock Paper sau Scissors')
    console.log(humanChoice)
    return humanChoice.toLowerCase()
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock' && computerChoice == 'Scissors') {
        console.log('You WIN! Rock beats scissors!')
        humanScore += 1
    } else if (humanChoice == 'rock' && computerChoice == 'Paper') {
        console.log('You lose! Paper beats rock!')
        computerScore +=1

    } else if (humanChoice == 'paper' && computerChoice == 'Scissors') {
        console.log('You lose! Scissors cuts paper!')
    } else if (humanChoice == 'paper' && computerChoice == 'Rock') {
        console.log('You Win! Paper beats rock!')

    } else if (humanChoice == 'scissors' && computerChoice == 'Paper') {
        console.log('You Win! Scissors cuts paper!')
    } else if (humanChoice == 'scissors' && computerChoice == 'Rock') {
        console.log('You lose! Rock beats scissors!')
    } else {
        console.log("It's a tie!")
    }

}

let humanScore = 0
let computerScore = 0

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)