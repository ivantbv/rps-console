function getComputerChoice() {
    let arrChoice = ['Rock','Paper','Scissors']
    let compChoice =  arrChoice[Math.floor(Math.random() * arrChoice.length)]
    return compChoice;
}

const btnRock = document.querySelector('.rock')
const btnPaper = document.querySelector('.paper')
const btnScissors = document.querySelector('.scissors')
const resultField = document.querySelector('.result-container')
let scoreFieldPlayer = document.querySelector('.player-score')
let scoreFieldComputer = document.querySelector('.computer-score')

btnRock.addEventListener('click', (e) => {
    let results = round('Rock', getComputerChoice())
    console.log(e.target.textContent)
    writeResultToDom(results)
    calculateScore(results)

})

btnPaper.addEventListener('click', (e) => {
    let results = round('Paper', getComputerChoice())
    console.log(e.target.textContent)
    writeResultToDom(results)
    calculateScore(results)
})

btnScissors.addEventListener('click', (e) => {
    let results = round('Scissors', getComputerChoice())
    console.log(e.target.textContent)
    writeResultToDom(results)
    calculateScore(results)
})

function round(playerSelection, computerSelection) {
    
    let fixedPlayerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
    
    console.log(computerSelection + ' this is the comp selection ' + fixedPlayerSelection + ' this is player')
    //     if (fixedPlayerSelection === 'Rock' && computerSelection === 'Rock' || fixedPlayerSelection === 'Paper' && computerSelection === 'Paper' || fixedPlayerSelection === 'Scissors' && computerSelection === 'Scissors') {
    //     return 'Its a tie!'
        
    // } else if (fixedPlayerSelection === 'Rock' && computerSelection === 'Scissors') {
    //     return 'You win! Rock beats Scissors'
    // } else if (fixedPlayerSelection === 'Scissors' && computerSelection === 'Paper' ) {
    //     return 'You win! Scissors beats Paper'
    // } else if (fixedPlayerSelection === 'Paper' && computerSelection === 'Rock') {
    //     return 'You win! Paper beats Rock'
    // } else if (computerSelection === 'Rock' && fixedPlayerSelection === 'Scissors') {
    //         return 'You lose. Rock beats Scissors'
    // } else if (computerSelection === 'Scissors' && fixedPlayerSelection === 'Paper' ) {
    //     return 'You lose! Scissors beats Paper'
    // } else if (computerSelection === 'Paper' && fixedPlayerSelection === 'Rock') {
    //     return 'You lose! Paper beats Rock'
    // } 
    let answer = {  playerSelection: playerSelection, 
                    computerSelection: computerSelection
                 }
    return answer;
    
}

function writeResultToDom(result) {
    let para = document.createElement('p');
    para.textContent = `Player: ${result.playerSelection} Computer: ${result.computerSelection}`
    console.log(para);
    resultField.appendChild(para);
}

let computerScore = 0;
let playerScore = 0;

function calculateScore(result) {

          if (result.playerSelection === 'Rock' && result.computerSelection === 'Rock' || result.playerSelection === 'Paper' && result.computerSelection === 'Paper' || result.playerSelection === 'Scissors' && result.computerSelection === 'Scissors') {
        return
        
    } else if (result.playerSelection === 'Rock' && result.computerSelection === 'Scissors') {
        playerScore++
        scoreFieldPlayer.textContent = playerScore;

    } else if (result.playerSelection === 'Scissors' && result.computerSelection === 'Paper' ) {
        playerScore++
        scoreFieldPlayer.textContent = playerScore;
    } else if (result.playerSelection === 'Paper' && result.computerSelection === 'Rock') {
        playerScore++
        scoreFieldPlayer.textContent = playerScore;
    } else if (result.computerSelection === 'Rock' && result.playerSelection === 'Scissors') {
            computerScore++
            scoreFieldComputer.textContent = computerScore
    } else if (result.computerSelection === 'Scissors' && result.playerSelection === 'Paper' ) {
            computerScore++
            scoreFieldComputer.textContent = computerScore
    } else if (result.computerSelection === 'Paper' && result.playerSelection === 'Rock') {
            computerScore++
            scoreFieldComputer.textContent = computerScore
    } 
}

function game() {
    let computerWins = 0;
    let playerWins = 0;
    // for(let i = 0; i < 5; i++) {
    //     let fiveRounds = round(prompt('Rock, paper or scissors?'), getComputerChoice())
    //     if (fiveRounds.indexOf('You win') !== -1) {
    //         playerWins++
    //         console.log(playerWins + ' player score. \n Comp score: ' + computerWins)
    //     } else if (fiveRounds.indexOf('You lose') !== -1) {
    //         computerWins++
    //         console.log(playerWins + ' player score. \n Comp score: ' + computerWins)
    //     }
    // }

    if (computerWins > playerWins) {
        alert('Comp won')
    } else if (computerWins < playerWins) {
        alert('player won')
    } else {
        alert('Its a tie!')
    }
}