let winners = [];
const choices = ["rock", "paper", "scissors"];

function resetGame() {
  winners = [];
  document.querySelector(".playerScore").textContent = " 👤 Score: 0";
  document.querySelector(".computerScore").textContent = "🤖 Score: 0";
  document.querySelector(".ties").textContent = "Ties: 0";
  document.querySelector(".winner").textContent = "";
  document.querySelector(".playerChoice").textContent = "";
  document.querySelector(".computerChoice").textContent = "";
  document.querySelector(".reset").style.display = "none";
}

function startGame() {
  //play the game until someone wins 5 times
  let imgs = document.querySelectorAll("img");
  imgs.forEach((img) =>
    img.addEventListener("click", () => {
      if (img.id) {
        playRound(img.id);
      }
    })
  );
}

function playRound(playerChoice) {
  let wins = checkWins();
  if (wins >= 3) {
    return;
  }

  const computerChoice = computerSelect();

  const winner = checkWinner(playerChoice, computerChoice);
  winners.push(winner);
  tallyWins();
  displayRound(playerChoice, computerChoice, winner);
  wins = checkWins();
  if (wins == 3) {
    //display end results
    //change the button to visible,
    //change the text to display winner
    displayEnd();
  }
}

function displayEnd() {
  let playerWins = winners.filter((item) => item == "Player").length;
  if (playerWins == 3) {
    document.querySelector(".winner").textContent =
      "🧑‍💻 Won 3 Games, 🏅 WINNER!";
  } else {
    document.querySelector(".winner").textContent =
      "🧑‍💻 LOST! 🤖 won 3 times";
  }
  document.querySelector(".reset").style.display = "flex";
}

function displayRound(playerChoice, computerChoice, winner) {
  document.querySelector(".playerChoice").textContent = `🧑‍💻 Selected: ${
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
  }`;
  document.querySelector(
    ".computerChoice"
  ).textContent = `The 🤖 Chooses: ${
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
  }`;
  displayRoundWinner(winner);
}

function displayRoundWinner(winner) {
  if (winner == "Player") {
    document.querySelector(".winner").textContent = "🧑‍💻 won the Round!";
  } else if (winner == "Computer") {
    document.querySelector(".winner").textContent =
      "The 🤖 won the Round";
  } else {
    document.querySelector(".winner").textContent = "The Round was a tie";
  }
}

function tallyWins() {
  const playerWinCount = winners.filter((item) => item == "Player").length
  const computerWinCount = winners.filter((item) => item == "Computer").length
  const ties = winners.filter((item) => item == "Tie").length;
  document.querySelector(".playerScore").textContent = `🧑‍💻 Score: ${playerWinCount}`
  document.querySelector(".computerScore").textContent = `🤖 Score: ${computerWinCount}`
  document.querySelector(".ties").textContent = `Ties: ${ties}`
}

function computerSelect() {
  const choice = choices[Math.floor(Math.random() * choices.length)]
  document.querySelector(`.${choice}`).classList.add("active")
  setTimeout(() => {
    document.querySelector(`.${choice}`).classList.remove("active")
  }, 1000);
  return choice;
}

function checkWins() {
  const playerWinCount = winners.filter((item) => item == "Player").length
  const computerWinCount = winners.filter((item) => item == "Computer").length
  return Math.max(playerWinCount, computerWinCount)
}

function checkWinner(choice1, choice2) {
  if (
    (choice1 == "rock" && choice2 == "scissors") ||
    (choice1 == "scissors" && choice2 == "paper") ||
    (choice1 == "paper" && choice2 == "rock")
  ) {
    return "Player";
  } else if (choice1 == choice2) {
    return "Tie";
  } else {
    return "Computer";
  }
}

function setWins() {
  const playerWinCount = winners.filter((item) => item == "Player").length
  const computerWinCount = winners.filter((item) => item == "Computer").length
  const ties = winners.filter((item) => item == "Tie").length
}
startGame();