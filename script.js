function getComputerChoice() {
    choice = (Math.floor(Math.random() * 100));
    console.log(choice)
    if (choice >=0 && choice <=33) {
        let alegere = "Rock"
        console.log(alegere)
    } else if (choice > 33 && choice <= 66) {
        alegere = "Paper"
        console.log(alegere)
    } else {alegere = "Scissors"
        console.log(alegere)
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Introdu Rock Paper sau Scissors')
    console.log(humanChoice)
}

getComputerChoice()
getHumanChoice()