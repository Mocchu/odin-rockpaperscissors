console.log("Script is running");

const choices = ["Rock", "Paper", "Scissors"];
getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();

	if (
		(playerSelection === "rock" && computerSelection === "paper") ||
		(playerSelection === "paper" && computerSelection === "scissors") ||
		(playerSelection === "scissors" && computerSelection === "rock")
	) {
		return `You lose! ${computerSelection} beats ${playerSelection}`;
	} else {
		return `You win! ${playerSelection} beats ${computerSelection}`;
	}
}

function game() {
	for (let i = 0; i <= 5; i++) {
		const playerSelection = prompt(
			"Enter your choice (Rock, Paper, Scissors): "
		);
		const computerSelection = getComputerChoice();
		console.log(playRound(playerSelection, computerSelection));
	}
}

game();
console.log("Game over!");
