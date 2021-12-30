let playerWins = 0;
let computerWin = 0;

function cpuPick() {
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];

    return choice
}

function playerPick() {
    let choice = prompt("Choose rock, paper or scissors:");
    
    if (choice === "") {
        alert("Input not valid 1");
    } else if (!isNaN(choice)) {
        alert("Input not valid 2");
    } else if (choice.toLowerCase() === "rock" || choice.toLowerCase() === "paper" | choice.toLowerCase() === "scissors") {
        return choice.toLowerCase();
    } else {
        alert("Input not valid 3");
    }

    
}

function playRound(playerChoice, computerChoice) {

    let winText = "You win";
    let loseText = "You Lose";
    
    switch(playerChoice) {
        case "rock":
            if (computerChoice === "scissors") 
            {
                playerWins++
                return winText;
            } else if (computerChoice === "paper") 
            {
                computerWin++
                return loseText;
            } else if (computerChoice === "rock") 
            {
                return `Its a Draw!`;
            } 
        
        case "paper":
            if (computerChoice === "scissors") {
                computerWin++
                return loseText;
            } else if (computerChoice === "paper") {
                return `Its a Draw!`;
            } else if (computerChoice === "rock") {
                playerWins++
                return winText;
            }
        case "scissors":
            if (computerChoice === "scissors") {
                return `Its a Draw!`;
            } else if (computerChoice === "paper") {
                playerWins++
                return winText;
            } else if (computerChoice === "rock") {
                computerWin++
                return loseText;
            } 
    } 
}

function game(rounds){
    
    for (let i = 0; i < rounds; i++){
        playerChoice = playerPick();
        computerChoice = cpuPick();
        console.log(playRound(playerChoice, computerChoice));
        
    }
    console.log(`You won ${playerWins} times`);
    console.log(`The computer beat you ${computerWin} times` );
    
}


game(5  )






