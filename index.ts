interface Player { name: string; score: number; }

let user: Player = { name: "You", score: 0 };
let computer: Player = { name: "Computer", score: 0 };

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

function playerHasWon(player: Weapon, computer: Weapon) {
    return (!(player === computer) && !(player.beats === computer));
}

function getRoundResult(userOption: Weapon) {
    const computerChoice = randomComputerResult();
    const playerChoice = userOption;
    if (playerHasWon(playerChoice, computerChoice)){
        user.score++
    } else if (playerChoice === computerChoice){
        return `It's a tie! Both chose ${user.name} and ${computer.name} chose ${playerChoice.name}`
    } else {
        computer.score++
    }
    return `${user.name}: ${playerChoice.name}, ${computer.name}: ${computerChoice.name}`;
}

const choices = { 'rock-btn': rock, 'paper-btn': paper, 'scissors-btn': scissors };
const playerButtons = document.querySelectorAll('#rock-btn, #paper-btn, #scissors-btn');
const roundResultsMsg = document.getElementById('results-msg');
const playerScore = document.getElementById('computer-score');
const computerScore = document.getElementById('player-score');

playerButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const result = getRoundResult(choices[btn.id]);
        roundResultsMsg.innerText = result;
        playerScore.innerText = `${user.score}`;
        computerScore.innerText = `${computer.score}`;
    });
});