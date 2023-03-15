const playerOption =  document.querySelector(`.player-selection`)
const computerOption = document.querySelector(`.computer-selection`)
const computerImg = document.querySelector(`.computer-images`)





function playerChoice (){
  let playerInput = false
  while (playerInput == false) {
    let playerChoice = prompt(`Play Rock, Paper or Scissors`).toLowerCase()
    if (playerChoice == null){
      continue
    }
    const playerChoiceInLowerCase = playerChoice
    if (playerChoice.includes(playerChoiceInLowerCase)){
      playerInput = true
      return playerChoiceInLowerCase
    }
  }
}

// computer  randomly selects Rock or Paper or Scissors
function computerPlay (){
  let choice =``
switch (Math.floor(Math.random() * 3)) {
  case 0:
    choice = renderRock()
    break;
  case 1:
    choice = renderpaper() 
    break;
  case 2:
    choice = renderScissors()
    break;   
  }
  return choice
}

function renderRock(){
  const image = document.createElement(`img`)
  image.src = `./images/a-rock.png`
  computerImg.appendChild(image)
}
function renderpaper(){
  const image = document.createElement(`img`)
  image.src = `./images/paper.jpg`
  computerImg.appendChild(image)
}
function renderScissors(){
  const image = document.createElement(`img`)
  image.src = `./images/scissors.jpg`
  computerImg.appendChild(image)
}

// Check who wins buy comparing the two choices
function checkWinner(playerSelection, computerSelction) {
  if(playerSelection === computerSelction) {
    return `Draw`
  } else if (
    (playerSelection === `rock` && computerSelction === `scissors`) ||
    (playerSelection === `scissors` && computerSelction === `paper`) ||
    (playerSelection === `paper` && computerSelction === `rock`) 
  ){
    return `Player win`
  } else {
    return `Computer win`
  } 
}
// outPuts the result of Check winner function and returns the winner
function playRound(playerSelection, computerSelection){
  const result = checkWinner(playerSelection, computerSelection)
  if(result === `Draw`){
    return `Player plays: ${playerSelection } a Tie 0 points`
  } else if (result === `Player win`){
    return `Player WINS! ${playerSelection} beats ${computerSelection}`
  }else {
    return `You LOSE! ${computerSelection} beats ${playerSelection}`
  }
}
 // The game is played and looped through for  5 rounds then diplayes the player game points 
 // each round and diplays the final score and who won the game


function game() {
  let playerScore = 0
  let computerScore = 0
  let round = 0
  for ( let i = 0; i < 5; i++) {
      const playerSelection = playerChoice()
      const computerSelection = computerPlay()
      console.log(playRound(playerSelection,computerSelection))
      if(checkWinner(playerSelection, computerSelection) == `Player win`){
        console.log(`Player score: ${++playerScore}`)
      }else if(checkWinner(playerSelection, computerSelection) == `Computer win`){
        console.log(`Computer score: ${++computerScore}`)
      }
      console.log(`----- ROUND: ${++round} OVER -----`)
  }
  document.querySelector(`.final`).textContent = `------ FINAL SCORE ------`
  if(playerScore > computerScore) {
    document.querySelector(`.final-score`).textContent = (`Player you won. Player: ${playerScore} vs Computer: ${computerScore}`)
  }else if(playerScore < computerScore) {
    document.querySelector(`.final-score`).textContent = (`Computer wins. Player: ${playerScore} vs Computer: ${computerScore}`)
  }else {
    document.querySelector(`.final-score`).textContent = (`We have a tie. Player: ${playerScore} and Computer: ${computerScore}`)
  }
  document.querySelector(`.start-btn`).textContent = `Start New game`
  document.querySelector(`.game-over`).textContent = `------ GAME OVER ------`
}