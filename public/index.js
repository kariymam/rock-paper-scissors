var _a, _b;
var playerButtons = document.querySelectorAll('#rock-btn, #paper-btn, #scissors-btn');
var player = (_a = document.getElementById('player-score')) === null || _a === void 0 ? void 0 : _a.querySelector('.score');
var computer = (_b = document.getElementById('computer-score')) === null || _b === void 0 ? void 0 : _b.querySelector('.score');
var playerScore = 0;
var computerScore = 0;
var rock = { name: "Rock" };
var paper = { name: "Paper" };
var scissors = { name: "Scissors" };
rock.beats = scissors;
paper.beats = rock;
scissors.beats = paper;
function randomComputerResult() {
    var options = [rock, paper, scissors];
    return options[Math.floor(Math.random() * options.length)];
}
function playerHasWon(player, computer) {
    return (!(player === computer) && (player.beats === computer));
}
var choices = { 'rock-btn': rock, 'paper-btn': paper, 'scissors-btn': scissors };
playerButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        var playerChoice = choices[btn.id];
        var computerChoice = randomComputerResult();
        if (!playerHasWon(playerChoice, computerChoice) && !(playerChoice.name === computerChoice.name)) {
            ++computerScore;
        }
        else if (playerHasWon(playerChoice, computerChoice)) {
            ++playerScore;
        }
        return console.log("Player Choice: ".concat(playerChoice.name, " Score: ").concat(playerScore, ", Computer Choice: ").concat(computerChoice.name, " Score: ").concat(computerScore));
    });
});
