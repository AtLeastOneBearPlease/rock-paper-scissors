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
    console.log("Human win");
}

function computerWin(){
    console.log("Computer win");
}

function tie(){
    console.log("Tie");
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toUpperCase();
    
    console.log(`The human chooses: ${humanChoice} and the computer chooses: ${computerChoice}`);
    
    if(humanChoice === computerChoice) {
        return undefined;
    }
    else if(humanChoice === "ROCK") {
        switch(computerChoice) {
            case "SCISSORS":
                return true;
                break;
            case "PAPER":
                return false;
                break;
        }
    }
    else if(humanChoice === "PAPER") {
        switch(computerChoice) {
            case "ROCK":       
                return true;
                break;
            case "SCISSORS": 
                return false;
                break;
        }
    }
    else if(humanChoice === "SCISSORS") {
        switch(computerChoice) {
            case "PAPER":
                return true;
                break;
            case "ROCK":
                return false;
                break;
        }
    }
}

let humanScore = 0;
let computerScore = 0;
let gameWon = false;

function playGame(event)
{
    if(!gameWon){
        const humanSelection = event.target.innerText;
        const computerSelection = getComputerChoice();

        let winner = playRound(humanSelection, computerSelection);

        if(winner === undefined){
            console.log("Tie");
        } 
        else if(winner === true){
            console.log("The human wins the match!");
            humanScore++;
        } 
        else if(winner === false){
            console.log("The computer wins the match");
            computerScore++;
        }

        setScores();

        if(humanScore === 5){
            gameWon = true;
            //display human win
        } else if(computerScore === 5){
            gameWon = true;
            //display computer win
        }
    }
}

function setScores(){
    let humanScoreElement = document.querySelector('#human-score');
    let computerScoreElement = document.querySelector('#computer-score');

    humanScoreElement.innerText = humanScore;
    computerScoreElement.innerText = computerScore;
}

//Add play game function to all buttons
 let buttons = document.querySelectorAll('button');
 for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', playGame);
 }
