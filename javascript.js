function getComputerChoice(){
    let choice = Math.floor( (Math.random() * 3) );

    if(choice === 0) {
        return "ROCK";
    }
    else if(choice === 1) {
        return "PAPER";
    }
    else if(choice === 2) {
        return "SCISSORS";
    }
    else {
        return "ERROR";
    }
}

function getHumanChoice(){
    return prompt("Please enter rock, paper, or scissors");
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toUpperCase();
    
    console.log(`The human chooses: ${humanChoice} and the computer chooses: ${computerChoice}`);

    let humanWin = "The human wins!";
    let computerWin = "The computer wins!";
    
    if(humanChoice === computerChoice) {
        console.log("This round was a tie!");
    }
    else if(humanChoice === "ROCK") {
        switch(computerChoice) {
            case "SCISSORS":
                console.log(humanWin);
                break;
            case "PAPER":
                console.log(computerWin);
                break;
        }
    }
    else if(humanChoice === "PAPER") {
        switch(computerChoice) {
            case "ROCK":
                console.log(humanWin);
                break;
            case "SCISSORS":
                console.log(computerWin);
                break;
        }
    }
    else if(humanChoice === "SCISSORS") {
        switch(computerChoice) {
            case "PAPER":
                console.log(humanWin);
                break;
            case "ROCK":
                console.log(computerWin);
                break;
        }
    }

}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);