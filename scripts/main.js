// 1. declare and initialize playerWins and computerWins to 0
// 2. play 5 rounds by repeating the following 5 times:
//   1. get computer's play and store it in computerSelection
const computerSelection = computerPlay();
//   2. get user's play and store it in playerSelection
const playerSelection = playerPlay();
//   3. decide winner by comparing computerSelection and playerSelection
//      and store it in winner
const result = playRound(playerSelection, computerSelection);
console.log(`Computer played ${computerSelection}`);
console.log(`You played ${playerSelection}`);
console.log(result);
//   4. if winner is player increment playerWins
//   5. if winner is computer increment computerWins
// 3. if playerWins is greater than computerWins declare player as winner
// 4. if computerWins is greater than computerWins declare player as loser
// 5. else declare tie

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
