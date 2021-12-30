let playerWins = 0;
let computerWin = 0;

function cpuPick() {
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];

    return choice
}

function playRound(playerChoice, computerChoice) {

    winText = "You Win";
    loseText = "You Lose";
    
    switch(playerChoice) {
        case "rock":
            if (computerChoice === "scissors") 
            {
                return winText;
            } else if (computerChoice === "paper") 
            {
                return loseText;
            } else if (computerChoice === "rock") 
            {
                return `Its a Draw!`;
            } 
        
        case "paper":
            if (computerChoice === "scissors") {
                return loseText;
            } else if (computerChoice === "paper") {
                return `Its a Draw!`;
            } else if (computerChoice === "rock") {
                return winText;
            }
        case "scissors":
            if (computerChoice === "scissors") {
                return `Its a Draw!`;
            } else if (computerChoice === "paper") {
                return winText;
            } else if (computerChoice === "rock") {
                return loseText;
            } 
    } 
}

function game(rounds){
    
    for (let i = 0; i < rounds; i++){
        playerChoice = cpuPick();
        computerChoice = cpuPick();
        console.log(playRound(playerChoice, computerChoice));
        if ()
    }
    
}

game(5);




