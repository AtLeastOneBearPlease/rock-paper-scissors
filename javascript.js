function getComputerChoice(){
    let choice = Math.floor( (Math.random() * 3) );

    if(choice === 0) {
        return "Rock";
    }
    else if(choice === 1) {
        return "Paper";
    }
    else if(choice === 2) {
        return "Scissors";
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
}

let humanScore = 0;
let computerScore = 0;

