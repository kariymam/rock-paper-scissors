var playerButtons = document.querySelectorAll('#rock-btn, #paper-btn, #scissors-btn');
var playerScore = 0;
var computerScore = 0;
var rock = {};
var paper = {};
var scissors = {};
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
        if (playerChoice === computerChoice) {
            return console.log("It's a tie!");
        }
        else if (playerHasWon(playerChoice, computerChoice)) {
            ++playerScore;
        }
        else {
            ++computerScore;
        }
        return console.log("Player Score: ".concat(playerScore, ", Computer Score: ").concat(computerScore));
    });
});
