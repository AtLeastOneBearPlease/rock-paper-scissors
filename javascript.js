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

function humanWin(){

}

function computerWin(){

}

function tie(){
    
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toUpperCase();
    
    console.log(`The human chooses: ${humanChoice} and the computer chooses: ${computerChoice}`);

    let humanWin = "The human wins the round!";
    let computerWin = "The computer wins the round!";
    
    if(humanChoice === computerChoice) {
        console.log("This round was a tie!");
    }
    else if(humanChoice === "ROCK") {
        switch(computerChoice) {
            case "SCISSORS":
                humanWin();
                return true;
                break;
            case "PAPER":
                computerWin();
                return false;
                break;
        }
    }
    else if(humanChoice === "PAPER") {
        switch(computerChoice) {
            case "ROCK":
                humanWin();
                return true;
                break;
            case "SCISSORS":
                computerWin();
                return false;
                break;
        }
    }
    else if(humanChoice === "SCISSORS") {
        switch(computerChoice) {
            case "PAPER":
                humanWin();
                return true;
                break;
            case "ROCK":
                computerWin();
                return false;
                break;
        }
    }
}


function playGame(event)
{
    let humanScore = 0;
    let computerScore = 0;


    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection) ? humanScore++ : computerScore++;

    console.log(
        `Human score: ${humanScore}\nComputer score: ${computerScore}`
    );

    if(humanScore > computerScore) {
        console.log("The human wins the match!");
    }
    else {
        console.log("The computer wins the match");
    }
}

 let button = document.querySelector('button');
 button.addEventListener(playGame);
