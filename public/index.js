var user = { name: "You", score: 0 };
var computer = { name: "Computer", score: 0 };
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
    return (!(player === computer) && !(player.beats === computer));
}
function getRoundResult(userOption) {
    var computerChoice = randomComputerResult();
    var playerChoice = userOption;
    if (playerHasWon(playerChoice, computerChoice)) {
        user.score++;
    }
    else if (playerChoice === computerChoice) {
        return "It's a tie! Both chose ".concat(user.name, " and ").concat(computer.name, " chose ").concat(playerChoice.name);
    }
    else {
        computer.score++;
    }
    return "".concat(user.name, ": ").concat(playerChoice.name, ", ").concat(computer.name, ": ").concat(computerChoice.name);
}
var choices = { 'rock-btn': rock, 'paper-btn': paper, 'scissors-btn': scissors };
var playerButtons = document.querySelectorAll('#rock-btn, #paper-btn, #scissors-btn');
var roundResultsMsg = document.getElementById('results-msg');
var playerScore = document.getElementById('computer-score');
var computerScore = document.getElementById('player-score');
playerButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        var result = getRoundResult(choices[btn.id]);
        roundResultsMsg.innerText = result;
        playerScore.innerText = "".concat(user.score);
        computerScore.innerText = "".concat(computer.score);
    });
});
