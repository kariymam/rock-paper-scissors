const playerButtons = document.querySelectorAll('#rock-btn, #paper-btn, #scissors-btn');

let playerScore = 0;
let computerScore = 0

interface Player {
    beats: Player;
}

const rock: Player = {} as Player;
const paper: Player = {} as Player;
const scissors: Player = {} as Player;

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
        if (playerChoice === computerChoice){
            return console.log(`It's a tie!`)
        } else if (playerHasWon(playerChoice, computerChoice)){
            ++playerScore
        } else {
            ++computerScore
        }
        return console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
    });
});