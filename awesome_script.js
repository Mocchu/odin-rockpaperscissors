const CHOICES = ["rock", "paper", "scissors"];
const buttons = document.querySelector(".buttons");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".scissors");
const scissorsBtn = document.querySelector(".scissors");

const playerScoreP = document.querySelector(".player-score");
const computerScoreP = document.querySelector(".computer-score");
const resultP = document.querySelector(".result");

let playerSelection;
let playerScore = 0;
let computerScore = 0;

getComputerChoice = () => CHOICES[Math.floor(Math.random() * CHOICES.length)];

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
	resultP.textContent = playRound(
		playerSelection,
		(computerSelection = getComputerChoice())
	);
	playerScoreP.textContent = playerScore;
	computerScoreP.textContent = computerScore;
});

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
