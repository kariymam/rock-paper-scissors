const playerButtons = document.querySelectorAll('#rock-btn, #paper-btn, #scissors-btn');
const choicesBtnContainer = (document.getElementById('choice-container') as HTMLDivElement)
let inputValue = (document.getElementById('rounds') as HTMLInputElement);
const roundResultsMsg = (document.querySelector('#result-msg') as HTMLParagraphElement);
const playerScore = (document.querySelector('#player-score') as HTMLParagraphElement);
const computerScore = (document.querySelector('#computer-score') as HTMLParagraphElement);
const winnerMsg = (document.querySelector('#winner-msg') as HTMLParagraphElement);
const resetGameBtn = (document.querySelector('#reset-game-btn') as HTMLButtonElement);

inputValue.addEventListener('input', () => {inputValue.value});

interface Player { name: string; score: number; winner: () => boolean; }
let user: Player = { name: "You", score: 0, winner: () => (user.score === parseInt(inputValue.value, 10)) };
let computer: Player = { name: "Computer", score: 0, winner: () => (computer.score === parseInt(inputValue.value, 10)) };

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

function displayScore(result: { points: number, playerChoice: Weapon, computerChoice: Weapon }) {
    winnerMsg.innerText = user.winner() ? `${user.name} win!` : computer.winner() ? `${computer.name} wins!` : ``;
    playerScore.innerText = `${user.score}`;
    computerScore.innerText = `${computer.score}`;
    return `<span>${user.name}: 
            ${result.playerChoice.name} 
            ${result.computerChoice === result.playerChoice.beats ? '(+1)' : ''}</span> |
            <span>${computer.name}: ${result.computerChoice.name} 
            ${result.playerChoice === result.computerChoice.beats ? '(+1)' : ''}</span>`
}

const choices = { 'rock-btn': rock, 'paper-btn': paper, 'scissors-btn': scissors };
playerButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const result = getRoundResult(choices[btn.id]);
        let p = document.createElement("p");
        p.innerHTML += displayScore(result);

        roundResultsMsg?.insertBefore(p, roundResultsMsg.children[0]);
        if (user.winner() || computer.winner()){
            choicesBtnContainer.classList.add('hidden');
            resetGameBtn.classList.remove('hidden');
        }
    });
});

resetGameBtn.addEventListener("click", () => {
    user.score = 0;
    computer.score = 0;
    playerScore.innerText = `${user.score}`
    computerScore.innerText = `${computer.score}`;
    winnerMsg.innerText = '';
    roundResultsMsg.innerText = '';
    choicesBtnContainer.classList.remove('hidden');
    resetGameBtn.classList.add('hidden');
    return
})