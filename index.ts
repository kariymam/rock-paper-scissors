const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

function randomComputerResult(...arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function playerHasWon(player: string, computer: string) {
    return (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
      );
}


const computerResult = randomComputerResult('Rock', 'Paper', 'Scissors');
console.log(playerHasWon('Rock', computerResult));
console.log(computerResult);