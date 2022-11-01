function getComputerChoice() {
    let arrChoice = ['Rock','Paper','Scissors']
    let compChoice =  arrChoice[Math.floor(Math.random() * arrChoice.length)]
    return compChoice;
}

function round(playerSelection, computerSelection) {

    let fixedPlayerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
    
    console.log(computerSelection + ' this is the comp selection ' + fixedPlayerSelection + ' this is player')
        if (fixedPlayerSelection === 'Rock' && computerSelection === 'Rock' || fixedPlayerSelection === 'Paper' && computerSelection === 'Paper' || fixedPlayerSelection === 'Scissors' && computerSelection === 'Scissors') {
        return 'Its a tie!'
        
    } else if (fixedPlayerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats Scissors'
    } else if (fixedPlayerSelection === 'Scissors' && computerSelection === 'Paper' ) {
        return 'You win! Scissors beats Paper'
    } else if (fixedPlayerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You win! Paper beats Rock'
    } else if (computerSelection === 'Rock' && fixedPlayerSelection === 'Scissors') {
            return 'You lose. Rock beats Scissors'
    } else if (computerSelection === 'Scissors' && fixedPlayerSelection === 'Paper' ) {
        return 'You lose! Scissors beats Paper'
    } else if (computerSelection === 'Paper' && fixedPlayerSelection === 'Rock') {
        return 'You lose! Paper beats Rock'
    } else {
        let anotherRound = confirm('You entered something else. Play again?')
        if (anotherRound) {
            round()
        } else {
            alert('Bye')
            return
        }
    }
}

// let playerSelection = 'rock'
// let computerSelection = getComputerChoice()

// console.log(round(playerSelection, computerSelection) + 'this is round')

function game() {
    let computerWins = 0;
    let playerWins = 0;
    for(let i = 0; i < 5; i++) {
        let fiveRounds = round(prompt('Rock, paper or scissors?'), getComputerChoice())
        if (fiveRounds.indexOf('You win') !== -1) {
            playerWins++
            console.log(playerWins + ' player score. \n Comp score: ' + computerWins)
        } else if (fiveRounds.indexOf('You lose') !== -1) {
            computerWins++
            console.log(playerWins + ' player score. \n Comp score: ' + computerWins)
        }
        //console.log(fiveRounds + 'this is five rounds')
    }

    if (computerWins > playerWins) {
        alert('Comp won')
    } else if (computerWins < playerWins) {
        alert('player won')
    } else {
        alert('Its a tie!')
    }
}