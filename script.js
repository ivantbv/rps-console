function getComputerChoice() {
    let arrChoice = ['Rock','Paper','Scissors']
    let compChoice =  arrChoice[Math.floor(Math.random() * arrChoice.length)]
    return compChoice;
}

const btnRock = document.querySelector('.rock')
const btnPaper = document.querySelector('.paper')
const btnScissors = document.querySelector('.scissors')
const resultField = document.querySelector('.result-container')
const compBtnRock = document.querySelector('.computer-rock')
const compBtnPaper = document.querySelector('.computer-paper')
const compBtnScissors = document.querySelector('.computer-scissors')
const playerChoiceDiv = document.querySelector('.playerChoice')
const tieWinOrLose = document.querySelector('.tieWinOrLose')
const computerChoiceDiv = document.querySelector('.compChoice')
const resetBtn = document.querySelector('.reset')
let para = document.createElement('p');
let scoreFieldPlayer = document.querySelector('.player-score')
let scoreFieldComputer = document.querySelector('.computer-score')

let computerScore = 0;
let playerScore = 0;

function choicesClick(choice) {
    let results = round(choice, getComputerChoice())
    if (results.computerSelection === 'Rock') {
        compBtnScissors.classList.remove('choiceHighlight')
        compBtnPaper.classList.remove('choiceHighlight')
        compBtnRock.classList.add('choiceHighlight')
    } else if (results.computerSelection === 'Paper') {
        compBtnScissors.classList.remove('choiceHighlight')
        compBtnRock.classList.remove('choiceHighlight')
        compBtnPaper.classList.add('choiceHighlight')
    } else if (results.computerSelection === 'Scissors') {
        compBtnPaper.classList.remove('choiceHighlight')
        compBtnRock.classList.remove('choiceHighlight')
        compBtnScissors.classList.add('choiceHighlight')
    }
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
    if (result.playerSelection === 'Rock' && result.computerSelection === 'Rock' || result.playerSelection === 'Paper' && result.computerSelection === 'Paper' || result.playerSelection === 'Scissors' && result.computerSelection === 'Scissors') {
        playerChoiceDiv.textContent = `${result.playerSelection}`
        tieWinOrLose.textContent = 'TIES'
        computerChoiceDiv.textContent = `${result.computerSelection}`
    } else if (result.playerSelection === 'Rock' && result.computerSelection === 'Scissors' || result.playerSelection === 'Scissors' && result.computerSelection === 'Paper' || result.playerSelection === 'Paper' && result.computerSelection === 'Rock') {
        playerChoiceDiv.textContent = `${result.playerSelection}`
        tieWinOrLose.textContent = 'BEATS'
        computerChoiceDiv.textContent = `${result.computerSelection}`

    } else {
        playerChoiceDiv.textContent = `${result.playerSelection}`
        tieWinOrLose.textContent = 'LOSES TO'
        computerChoiceDiv.textContent = `${result.computerSelection}`
    }
    //resultField.appendChild(para);
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
        playerChoiceDiv.textContent = ''
        tieWinOrLose.textContent = ''
        computerChoiceDiv.textContent = ''
        resultField.appendChild(para);

    } else if (playerScore === 5) {
        para.textContent = 'Player wins!'
        playerChoiceDiv.textContent = ''
        tieWinOrLose.textContent = ''
        computerChoiceDiv.textContent = ''
        resultField.appendChild(para);
    }

}

function resetGame() {
    computerScore = 0;
    playerScore = 0;
    scoreFieldPlayer.textContent = ''
    scoreFieldComputer.textContent = '';
    para.textContent = ''
    compBtnRock.classList.remove('choiceHighlight')
    compBtnPaper.classList.remove('choiceHighlight')
    compBtnScissors.classList.remove('choiceHighlight')
    btnRock.classList.remove('choiceHighlight')
    btnScissors.classList.remove('choiceHighlight')
    btnPaper.classList.remove('choiceHighlight')
    btnRock.addEventListener('click', handleClickRock)
    btnPaper.addEventListener('click', handleClickPaper)
    btnScissors.addEventListener('click', handleClickScissors)

}

resetBtn.addEventListener('click', resetGame)