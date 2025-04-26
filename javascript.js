function getComputerChoice(){
    let choice = (Math.random() * 3).floor();

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

for(let i=10; i > 0; i--){
    console.log(getComputerChoice());
}