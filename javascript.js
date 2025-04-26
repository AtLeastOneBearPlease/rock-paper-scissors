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

    let humanWin = "The human wins the round!";
    let computerWin = "The computer wins the round!";
    
    if(humanChoice === computerChoice) {
        console.log("This round was a tie!");
    }
    else if(humanChoice === "ROCK") {
        switch(computerChoice) {
            case "SCISSORS":
                console.log(humanWin);
                return true;
                break;
            case "PAPER":
                console.log(computerWin);
                return false;
                break;
        }
    }
    else if(humanChoice === "PAPER") {
        switch(computerChoice) {
            case "ROCK":
                console.log(humanWin);
                return true;
                break;
            case "SCISSORS":
                console.log(computerWin);
                return false;
                break;
        }
    }
    else if(humanChoice === "SCISSORS") {
        switch(computerChoice) {
            case "PAPER":
                console.log(humanWin);
                return true;
                break;
            case "ROCK":
                console.log(computerWin);
                return false;
                break;
        }
    }
}


function playGame()
{
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection) ? humanScore++ : computerScore++;

        console.log(
            `Human score: ${humanScore}\nComputer score: ${computerScore}`
        );
    }

    if(humanScore > computerScore) {
        console.log("The human wins the match!");
    }
    else {
        console.log("The computer wins the match");
    }
}

playGame();