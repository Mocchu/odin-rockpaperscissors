const CHOICES = ["rock", "paper", "scissors"];
const buttons = document.querySelector(".buttons");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

const playerScoreP = document.querySelector(".player-score");
const computerScoreP = document.querySelector(".computer-score");
const resultP = document.querySelector(".result");
const winnerP = document.querySelector(".winner");

let playerSelection;
let playerScore = 0;
let computerScore = 0;

getComputerChoice = () => CHOICES[Math.floor(Math.random() * CHOICES.length)];
resetScores = () => ([playerScore, computerScore] = [0, 0]);

buttons.addEventListener("click", (e) => {
	// Plays the game and display outcome on player selection
	switch (e.target.className) {
		case "rock":
			playerSelection = "rock";
			break;
		case "paper":
			playerSelection = "paper";
			break;
		case "scissors":
			playerSelection = "scissors";
			break;
	}
	updateOutcomes();
});

function updateOutcomes() {
	// Modifies the DOM to reflect round result and current scores
	if (playerScore === 0 && computerScore === 0) winnerP.textContent = "";

	resultP.textContent = playRound(
		playerSelection,
		(computerSelection = getComputerChoice())
	);
	playerScoreP.textContent = playerScore;
	computerScoreP.textContent = computerScore;

	if (playerScore === 5) {
		winnerP.textContent = "😊 You won the game! 😊";
		resetScores();
	} else if (computerScore === 5) {
		winnerP.textContent = "☹️ You lost the game! ☹️";
		resetScores();
	}
}

function playRound(playerSelection, computerSelection) {
	// Returns output of round (str) and updates score variables
	playerSelection = playerSelection.toLowerCase();

	if (
		(playerSelection === "rock" && computerSelection === "paper") ||
		(playerSelection === "paper" && computerSelection === "scissors") ||
		(playerSelection === "scissors" && computerSelection === "rock")
	) {
		computerScore++;
		return `You lose! ${computerSelection} beats ${playerSelection}`;
	} else if (playerSelection === computerSelection) {
		return "It's a tie!";
	} else {
		playerScore++;
		return `You win! ${playerSelection} beats ${computerSelection}`;
	}
}
