let humanScore = 0, computerScore = 0, round = 0;

// using a loop is better here.
/**for (let round = 0; round < 5; round++) {
    let humanChoice = getHumanChoice(prompt("Please choose one of: 'Rock, Paper or Scissors' as your choice"));
    let computerChoice = getComputerChoice();
    if (humanChoice == computerChoice) {
        alert("Both chose the same thing! No points for anyone.");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        alert("Human won that round! One point to the humanoids.");
        humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        alert("The bots are taking over. One point to the computer!");
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        alert("Human won that round! One point to the humanoids.");
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        alert("The bots are taking over. One point to the computer!");
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        alert("The bots are taking over. One point to the computer!");
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        alert("Human won that round! One point to the humanoids.");
        humanScore++;
    }
};*/

/**Function should play through a round. A round includes a selection from the human from getHumanChoice(choice)
 * And a selection from the computer getComputerChoice()
 */
function playRound() {

}

if (humanScore == computerScore) {
    alert("No winners. Better luck next time guys.");
} else if (humanScore > computerScore) {
    alert("Humans win this time.");
} else {
    alert("Computers win. Wow.");
}

function getComputerChoice() {
    let number = Math.random();
    if (number >= 0 && number < 0.33) {
        return "rock";
    } else if (number >= 0.33 && number < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
};

function getHumanChoice(choice) {
    if (choice.toLowerCase() === "rock") {
        return "rock";
    } else if (choice.toLowerCase() === "paper") {
        return "paper";
    } else if (choice.toLowerCase() === "scissors") {
        return "scissors";
    } else {
        return getHumanChoice(prompt("Please choose one of: 'Rock, Paper or Scissors' as your choice"));
    }
};