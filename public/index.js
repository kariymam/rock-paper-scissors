var rockBtn = document.getElementById('rock-btn');
var paperBtn = document.getElementById('paper-btn');
var scissorsBtn = document.getElementById('scissors-btn');
function randomComputerResult() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    return arr[Math.floor(Math.random() * arr.length)];
}
function playerHasWon(player, computer) {
    return ((player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock"));
}
var computerResult = randomComputerResult('Rock', 'Paper', 'Scissors');
console.log(playerHasWon('Rock', computerResult));
console.log(computerResult);
