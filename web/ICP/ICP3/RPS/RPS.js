var myChoice = prompt("SELECT rock, paper or scissors?");
var sysChoice = Math.random();


if (sysChoice < 0.35) {
    sysChoice = "rock"
} else if (sysChoice < 0.68) {
    sysChoice = "paper"
}
else {
    sysChoice = "scissors"
}
var result = function (comp, my) {
    if (comp == my) {
        return "its a tie!"

    } else if (comp == "rock" && my == "paper" || comp == "paper" && my == "scissor" || comp == "scissor" && my == "rock") {
        return "You win"
    }
    else {
        return "Computer Wins"
    }
}
prompt(result(sysChoice, myChoice).toString());