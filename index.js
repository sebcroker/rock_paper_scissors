/**Adding a querySelector to all buttons and selecting for each button
 * And the same is being done for the span group.
 */
let humanScore = 0, computerScore = 0;
const buttons = document.querySelectorAll("button");
const scores = document.querySelectorAll("span");
startGame();

/**.forEach() is an iterative method of arrays (and nodelists)
 * It requires a callback function that executes onto each element of the array (or node list)
 * Its return value is discarded.
 */
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let computerChoice = getComputerChoice();
        if (button.id === computerChoice) {
            alert("No points for anyone.");
        } else if (button.id == "rock" && computerChoice == "scissors") {
            humanScore++;
            alert("Human won that round! One point to the humanoids.");
        } else if (button.id == "rock" && computerChoice == "paper") {
            computerScore++;
            
            alert("The bots are taking over. One point to the computer!");
        } else if (button.id == "paper" && computerChoice == "rock") {
            humanScore++;
            
            alert("Human won that round! One point to the humanoids.");
        } else if (button.id == "paper" && computerChoice == "scissors") {
            computerScore++;
            
            alert("The bots are taking over. One point to the computer!");
        } else if (button.id == "scissors" && computerChoice == "rock") {
            computerScore++;
            
            alert("The bots are taking over. One point to the computer!");
        } else if (button.id == "scissors" && computerChoice == "paper") {
            humanScore++;
            
            alert("Human won that round! One point to the humanoids.");
        }
        printScore();
        if (humanScore === 5 || computerScore === 5) {
            finishGame();
        }
    });
});

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

/**The below is for showing the results and the rounds*/
function printScore() {
    scores.forEach((score) => {
        if (score.id === "humanResults") {
            score.textContent = humanScore;
        } else {
            score.textContent = computerScore;
        }
    });
};

/**Start game function: sets text content so that it renders as 0 on the screen */
function startGame() {
    humanScore = 0, computerScore = 0;
    scores.forEach((score) => score.textContent = 0);
};

/**Finish game function: alerts who is the winner, starts another game*/
function finishGame() {
    if (humanScore > computerScore) {
        alert("Humans won the game. Start again!");
        startGame();
    } else {
        alert("Computers won the game. Start again!");
        startGame();
    }
};