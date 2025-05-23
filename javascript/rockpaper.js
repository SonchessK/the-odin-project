let HumanChoice = "";
let ComputerChoice = "";

const elements = ["rock", "paper", "scissors"];
function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    ComputerChoice = elements[getRandom(3)] ;
    console.log(ComputerChoice);
    return ComputerChoice;
}

function getHumanChoice() {
    HumanChoice = prompt("Choose your element: ");
    console.log(HumanChoice);
    return HumanChoice;
}




let HumanScore = 0;
let ComputerScore = 0;

function playAround(HumanChoice, ComputerChoice) {
    if ( (HumanChoice === "rock" || HumanChoice === "ROCK" || HumanChoice === "RocK") && ComputerChoice === "paper" ) {
        ComputerScore++;
        console.log("Dein Score: " + HumanScore + " Computer Score: " + ComputerScore );
    } else if ( HumanChoice === "paper"  && ComputerChoice === "rock" ) {
        HumanScore++;
        console.log("Dein Score: " + HumanScore + " Computer Score: " + ComputerScore );
    } else if ( (HumanChoice === "paper" || HumanChoice === "PAPER" || HumanChoice === "Paper") && ComputerChoice === "scissors" ) {
        ComputerScore++;
        console.log("Dein Score: " + HumanScore + " Computer Score: " + ComputerScore );
    } else if ((HumanChoice === "scissors" || HumanChoice === "SCISSORS" || HumanChoice === "Scissors") && ComputerChoice === "paper" ) {
        HumanScore++;
        console.log("Dein Score: " + HumanScore + " Computer Score: " + ComputerScore );
    } else if ((HumanChoice === "rock" || HumanChoice === "ROCK" || HumanChoice === "Rock") && ComputerChoice === "scissors" ) {
        HumanScore++;
        console.log("Dein Score: " + HumanScore + " Computer Score: " + ComputerScore );
    } else if ((HumanChoice === "scissors" || HumanChoice === "SCISSORS" || HumanChoice === "Scissors") && ComputerChoice === "rock" ) {
        ComputerScore++;
        console.log("Dein Score: " + HumanScore + " Computer Score: " + ComputerScore );
    } else if ((HumanChoice === "rock" || HumanChoice === "ROCK" || HumanChoice === "Rock") && ComputerChoice === "rock" ) {
        console.log("Dein Score: " + HumanScore + " Computer Score: " + ComputerScore );
    } else if ((HumanChoice === "scissors" || HumanChoice === "SCISSORS" || HumanChoice === "Scissors") && ComputerChoice === "scissors" ) {
        console.log("Dein Score: " + HumanScore + " Computer Score: " + ComputerScore );
    } else if ((HumanChoice === "paper" || HumanChoice === "PAPER" || HumanChoice === "Paper") && ComputerChoice === "paper" ) {
        console.log("Dein Score: " + HumanScore + " Computer Score: " + ComputerScore );
    }
}
function playGame() {
   
    for (let i =1; i<=5; i++) {
        getHumanChoice();
        getComputerChoice();
        setTimeout (2); 
        playAround(HumanChoice, ComputerChoice);
    }
    if ( HumanScore>ComputerScore) {
        console.log("Glückwunsch! Du hast gewonnen!");
    } else if (HumanScore<ComputerScore) {
        console.log("Der Computer hat gewonnen :(");
    } else { (HumanScore === ComputerScore) 
        console.log("Draw...");
    }
}
 playGame();