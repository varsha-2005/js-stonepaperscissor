const buttons = document.querySelectorAll('.buttons button');
const result = document.getElementById('result');
const userscore1 = document.getElementById('userscore');
const computerscore1 = document.getElementById('computerscore');
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');

let computerscore = 0;
let playerscore = 0;

function computer() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function play(computerChoice, playerChoice) {
    let resultText = "";
    let winner = "";

    if (computerChoice === playerChoice) {
        resultText = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerscore++;
        resultText = `You win! ${playerChoice} beats ${computerChoice}`;
        winner = "player";
    } else {
        computerscore++;
        resultText = `You lose! ${computerChoice} beats ${playerChoice}`;
        winner = "computer";
    }

    result.textContent = resultText;
    userscore1.textContent = `${playerscore}`;
    computerscore1.textContent = `${computerscore}`;
    computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;

    if (winner === "player") {
        result.style.color = "green";
    } else if (winner === "computer") {
        result.style.color = "red";
    } else {
        result.style.color = "black";
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = computer();
        play(computerChoice, playerChoice);
    });
});
