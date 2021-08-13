game();

function game() {
  let computerWins = 0;
  let playerWins = 0;

  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay();
    const playerSelection = playerPlay();
    const result = playRound(playerSelection, computerSelection);
    console.log(`Computer played ${computerSelection}`);
    console.log(`You played ${playerSelection}`);
    console.log(result);

    if (result.includes("win")) {
      playerWins++;
    } else if (result.includes("lose")) {
      computerWins++;
    }
  }

  console.log(`Player wins: ${playerWins}`);
  console.log(`Computer wins: ${computerWins}`);
  if (playerWins > computerWins) {
    console.log("You win the game!");
  } else if (computerWins > playerWins) {
    console.log("You lost the game!");
  }
}

function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playerPlay() {
  const playerInput = prompt("Enter your move (rock/paper/scissors)")
    .trim()
    .toLowerCase();
  if (!["rock", "paper", "scissors"].includes(playerInput)) {
    alert("Enter a valid move!");
    return playerPlay();
  }
  return playerInput;
}

function playRound(playerSelection, computerSelection) {
  const PLAYER_WIN_MESSAGE = "You win!";
  const PLAYER_LOSE_MESSAGE = "You lose!";
  const TIE_MESSAGE = "Tie! Both played the same move";
  const ROCK_WIN_REASON = "Rock beats Scissors";
  const PAPER_WIN_REASON = "Paper beats Rock";
  const SCISSORS_WIN_REASON = "Scissors beats Paper";

  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      return `${TIE_MESSAGE}`;
    } else if (computerSelection === "paper") {
      return `${PLAYER_LOSE_MESSAGE} ${PAPER_WIN_REASON}`;
    } else if (computerSelection === "scissors") {
      return `${PLAYER_WIN_MESSAGE} ${ROCK_WIN_REASON}`;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return `${PLAYER_WIN_MESSAGE} ${PAPER_WIN_REASON}`;
    } else if (computerSelection === "paper") {
      return `${TIE_MESSAGE}`;
    } else if (computerSelection === "scissors") {
      return `${PLAYER_LOSE_MESSAGE} ${SCISSORS_WIN_REASON}`;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return `${PLAYER_LOSE_MESSAGE} ${ROCK_WIN_REASON}`;
    } else if (computerSelection === "paper") {
      return `${PLAYER_WIN_MESSAGE} ${SCISSORS_WIN_REASON}`;
    } else if (computerSelection === "scissors") {
      return `${TIE_MESSAGE}`;
    }
  }
}
