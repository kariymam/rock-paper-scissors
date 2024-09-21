const playerButtons = document.querySelectorAll('#rock-btn, #paper-btn, #scissors-btn');
const player = document.getElementById('player-score')?.querySelector<HTMLParagraphElement>('.score');
const computer = document.getElementById('computer-score')?.querySelector<HTMLParagraphElement>('.score');

let playerScore = 0;
let computerScore = 0

interface Player {
    name: string;
    beats: Player;
}

const rock: Player = {name: "Rock"} as Player;
const paper: Player = {name: "Paper"} as Player;
const scissors: Player = {name: "Scissors"} as Player;

rock.beats = scissors;
paper.beats = rock;
scissors.beats = paper;

function randomComputerResult(): Player {
    const options = [rock, paper, scissors];
    return options[Math.floor(Math.random() * options.length)];
}

function playerHasWon(player: Player, computer: Player) {
    return (!(player === computer) && (player.beats === computer));
}

const choices = { 'rock-btn': rock, 'paper-btn': paper, 'scissors-btn': scissors };

playerButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const playerChoice = choices[btn.id];
        const computerChoice = randomComputerResult();
        if (!playerHasWon(playerChoice, computerChoice) && !(playerChoice.name === computerChoice.name)){
            ++computerScore
        } else if (playerHasWon(playerChoice, computerChoice)){
            ++playerScore
        }
        return console.log(`Player Choice: ${playerChoice.name} Score: ${playerScore}, Computer Choice: ${computerChoice.name} Score: ${computerScore}`);
    });
});