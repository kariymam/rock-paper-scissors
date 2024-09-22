"use strict";
const playerButtons = document.querySelectorAll('#rock-btn, #paper-btn, #scissors-btn');
const roundResultsMsg = document.querySelector('#results-msg');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const winnerMsg = document.querySelector('#winner-msg');
const resetGameBtn = document.querySelector('#reset-game-btn');
let user = { name: "You", score: 0, winner: () => (user.score === 3) };
let computer = { name: "Computer", score: 0, winner: () => (computer.score === 3) };
const rock = { name: "Rock" };
const paper = { name: "Paper" };
const scissors = { name: "Scissors" };
rock.beats = scissors;
paper.beats = rock;
scissors.beats = paper;
function randomComputerResult() {
    const options = [rock, paper, scissors];
    return options[Math.floor(Math.random() * options.length)];
}
function playerHasWon(player, computer) {
    return (!(player === computer) && (player.beats === computer));
}
function getRoundResult(userOption) {
    const computerChoice = randomComputerResult();
    const playerChoice = userOption;
    const points = (playerHasWon(playerChoice, computerChoice)) ? user.score++ : (playerChoice === computerChoice) ? 0 : computer.score++;
    return { points, playerChoice, computerChoice };
}
const choices = { 'rock-btn': rock, 'paper-btn': paper, 'scissors-btn': scissors };
playerButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const result = getRoundResult(choices[btn.id]);
        roundResultsMsg.innerText = `${user.name}: ${result.playerChoice.name}, ${computer.name}: ${result.computerChoice.name}`;
        winnerMsg.innerText = user.winner() ? `${user.name} win!` : computer.winner() ? `${computer.name} wins!` : ``;
        playerScore.innerText = `${user.score}`;
        computerScore.innerText = `${computer.score}`;
    });
});
resetGameBtn.addEventListener("click", () => {
    user.score = 0;
    computer.score = 0;
    playerScore.innerText = `${user.score}`;
    computerScore.innerText = `${computer.score}`;
    winnerMsg.innerText = '';
    roundResultsMsg.innerText = '';
    return;
});
