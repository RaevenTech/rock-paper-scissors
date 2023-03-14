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
function computerPlay (value){
  let choice =``
switch (value) {
  case 0:
    choice = `rock`
    console.log(`Computer plays: rock`)
    break;
  case 1:
    choice = `paper`
    console.log(`Computer plays: paper`)
    break;
  case 2:
    choice = `scissors`
  console.log(`Computer plays: scissors`)
    break;   
  }
  return choice
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
let playerScore = 0
let computerScore = 0
let round = 1

function game() {
  console.log(`Let's play Rock, Paper, Scissors,`)
  console.log(`-------------------------------`)
  for ( let i = 0; i < 5; i++) {
      const playerSelection = playerChoice()
      const computerSelection = computerPlay(Math.floor(Math.random() * 3))
      console.log(playRound(playerSelection,computerSelection))
      if(checkWinner(playerSelection, computerSelection) == `Player win`){
        console.log(`Player: ${++playerScore}`)
      }else if(checkWinner(playerSelection, computerSelection) == `Computer win`){
          console.log(`Computer: ${++computerScore}`)
      }
      console.log(`----- ROUND: ${round++} OVER -----`)
  }
  console.log(`------ FINAL SCORE ------`)
  if(playerScore > computerScore) {
    console.log(`Player you won. Player: ${playerScore} vs Computer: ${computerScore}`)
  }else if(playerScore < computerScore) {
    console.log(`Computer wins. Player: ${playerScore} vs Computer: ${computerScore}`)
  }else {
    console.log(`We have a tie. Player: ${playerScore} and Computer: ${computerScore}`)
  }
  document.querySelector(".start-btn").textContent = "Start New Game"
  console.log(`------ GAME OVER ------`)
}