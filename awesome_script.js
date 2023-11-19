console.log("Script is running");

const choices = ["rock", "paper", "scissors"];
getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();

	if (!choices.includes(playerSelection)) {
		return "Invalid input!";
	} else if (
		(playerSelection === "rock" && computerSelection === "paper") ||
		(playerSelection === "paper" && computerSelection === "scissors") ||
		(playerSelection === "scissors" && computerSelection === "rock")
	) {
		return `You lose! ${computerSelection} beats ${playerSelection}`;
	} else if (playerSelection === computerSelection) {
		return "It's a tie!";
	} else {
		return `You win! ${playerSelection} beats ${computerSelection}`;
	}
}

function game() {
	for (let i = 0; i < 5; i++) {
		const playerSelection = prompt(
			"Enter your choice (Rock, Paper, Scissors): "
		);
		const computerSelection = getComputerChoice();
		console.log(playRound(playerSelection, computerSelection));
	}
}

// Run
game();
console.log("Game over!");
