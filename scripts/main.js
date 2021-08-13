// 1. declare and initialize playerWins and computerWins to 0
// 2. play 5 rounds by repeating the following 5 times:
//   1. get computer's play and store it in computerSelection

const computerSelection = computerPlay();

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

//   2. get user's play and store it in playerSelection
//   3. decide winner by comparing computerSelection and playerSelection
//      and store it in winner
//   4. if winner is player increment playerWins
//   5. if winner is computer increment computerWins
// 3. if playerWins is greater than computerWins declare player as winner
// 4. if computerWins is greater than computerWins declare player as loser
// 5. else declare tie
