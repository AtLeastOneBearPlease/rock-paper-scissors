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
            logMatchResult('tie');
        } 
        else if(winner === true){
            humanScore++;
            logMatchResult('human');
        } 
        else if(winner === false){
            computerScore++;
            logMatchResult('computer');
        }

        setScores();

        if(humanScore === 5){
            gameWon = true;
            logMatchWinner('human');
        } else if(computerScore === 5){
            gameWon = true;
            logMatchWinner('computer');
        }
    }
}

function logMatchResult(result){
    let li = document.createElement('li');
    let scoreString = `Human Score: ${humanScore} | Computer Score: ${computerScore}`;
    
    if(result === 'human'){
        li.innerText = "The Human wins - " + scoreString;
    }
    else if(result === 'computer'){
        li.innerText = "The Computer wins - " + scoreString;
    }
    else{
        li.innerText = "There was a tie - " + scoreString;
    }

    let ul = document.querySelector('ul');
    ul.appendChild(li);
}

function logMatchWinner(winner){
    let displayWinner = document.querySelector('#winner');
    displayWinner.style.visibility = 'visible';

    if(winner === 'human'){
        displayWinner.innerText = "The Human has Won!";
    }
    else {
        displayWinner.innerText = "The Computer has Won!";
    }
}

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
