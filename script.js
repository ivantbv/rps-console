function getComputerChoice() {
    let arrChoice = ['Rock','Paper','Scissors']
    let compChoice =  arrChoice[Math.floor(Math.random() * arrChoice.length)]
    return compChoice;
}

const btnRock = document.querySelector('.rock')
const btnPaper = document.querySelector('.paper')
const btnScissors = document.querySelector('.scissors')
const resultField = document.querySelector('.result-container')
let para = document.createElement('p');
let scoreFieldPlayer = document.querySelector('.player-score')
let scoreFieldComputer = document.querySelector('.computer-score')

let computerScore = 0;
let playerScore = 0;

function choicesClick(choice) {
    let results = round(choice, getComputerChoice())
    writeResultToDom(results)
    calculateScore(results)


    if (computerScore >= 5 || playerScore >= 5) {
        btnRock.removeEventListener('click', handleClickRock)
        btnPaper.removeEventListener('click', handleClickPaper)
        btnScissors.removeEventListener('click', handleClickScissors)
    }
}

function handleClickRock() {
    choicesClick('Rock')
    btnScissors.classList.remove('choiceHighlight')
    btnPaper.classList.remove('choiceHighlight')
    btnRock.classList.add('choiceHighlight')
}

function handleClickPaper() {
    choicesClick('Paper')
    btnScissors.classList.remove('choiceHighlight')
    btnRock.classList.remove('choiceHighlight')
    btnPaper.classList.add('choiceHighlight')
}
function handleClickScissors() {
    btnPaper.classList.remove('choiceHighlight')
    btnRock.classList.remove('choiceHighlight')
    btnScissors.classList.add('choiceHighlight')
    choicesClick('Scissors')
}

btnRock.addEventListener('click', handleClickRock)

btnPaper.addEventListener('click', handleClickPaper)

btnScissors.addEventListener('click', handleClickScissors)

function round(playerSelection, computerSelection) {
    
    //let fixedPlayerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
    
    //console.log(computerSelection + ' this is the comp selection ' + fixedPlayerSelection + ' this is player')
    let answer = {  playerSelection: playerSelection, 
                    computerSelection: computerSelection
                 }
    return answer;
}

function writeResultToDom(result) {
    
    para.textContent = `Player: ${result.playerSelection} Computer: ${result.computerSelection}`
    console.log(para);
    resultField.appendChild(para);
}


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

    if (computerScore === 5) {
        para.textContent = 'Computer wins!'

    } else if (playerScore === 5) {
        para.textContent = 'Player wins!'
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