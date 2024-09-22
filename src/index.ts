const playerButtons = document.querySelectorAll('#rock-btn, #paper-btn, #scissors-btn');
const roundResultsMsg: HTMLElement = document.querySelector('#results-msg');
const playerScore: HTMLElement = document.querySelector('#player-score');
const computerScore: HTMLElement = document.querySelector('#computer-score');
const winnerMsg: HTMLElement = document.querySelector('#winner-msg');
const resetGameBtn: HTMLElement = document.querySelector('#reset-game-btn');

interface Player { name: string; score: number; winner: () => boolean; }
let user: Player = { name: "You", score: 0, winner: () => (user.score === 3) };
let computer: Player = { name: "Computer", score: 0, winner: () => (computer.score === 3) };

type Weapon = { name: string; beats: Weapon; }
const rock: Weapon = {name: "Rock"} as Weapon;
const paper: Weapon = {name: "Paper"} as Weapon;
const scissors: Weapon = {name: "Scissors"} as Weapon;

rock.beats = scissors;
paper.beats = rock;
scissors.beats = paper;

function randomComputerResult(): Weapon {
    const options = [rock, paper, scissors];
    return options[Math.floor(Math.random() * options.length)];
}

function playerHasWon(player: Weapon, computer: Weapon): boolean {
    return (!(player === computer) && (player.beats === computer));
}

function getRoundResult(userOption: Weapon) {
    const computerChoice = randomComputerResult();
    const playerChoice = userOption;
    const points = (playerHasWon(playerChoice, computerChoice)) ? user.score++ : (playerChoice === computerChoice) ? 0 : computer.score++;
    return { points, playerChoice, computerChoice } 
}

const choices = { 'rock-btn': rock, 'paper-btn': paper, 'scissors-btn': scissors };
playerButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const result = getRoundResult(choices[btn.id]);
        roundResultsMsg.innerText = `${user.name}: ${result.playerChoice.name}, ${computer.name}: ${result.computerChoice.name}`
        winnerMsg.innerText = user.winner() ? `${user.name} win!` : computer.winner() ? `${computer.name} wins!` : ``;
        playerScore.innerText = `${user.score}`;
        computerScore.innerText = `${computer.score}`;
    });
});

resetGameBtn.addEventListener("click", () => {
    user.score = 0;
    computer.score = 0;
    playerScore.innerText = `${user.score}`
    computerScore.innerText = `${computer.score}`;
    winnerMsg.innerText = '';
    roundResultsMsg.innerText = '';
    return
})