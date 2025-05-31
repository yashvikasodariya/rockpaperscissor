// Description: A simple Rock, Paper, Scissors game using JavaScript.

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreDisplay = document.querySelector("#user-score");
const compScoreDisplay = document.querySelector("#comp-score");
// Update score displays

const genCompChoice = () => {
    //rock,paper,scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}

const drawGame = () => {
    console.log("It's a draw!");
    msg.innerText = "It's a draw! Play again.";
    msg.style.backgroundColor = "rgb(4, 4, 54)";
    // No score change
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice); 
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice);
    //Compare choices
    if (userChoice === compChoice) {
        //Draw game
        drawGame();
    } else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        userScore++;
        userScoreDisplay.innerText = userScore;
        console.log("You win! Score: User = ", userScore, ", Computer = ", compScore);
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScoreDisplay.innerText = compScore;
        console.log("You lose! Score: User = ", userScore, ", Computer = ", compScore);
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})