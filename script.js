let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

// function to hide start screen and show main game screen(endcontainer)
let startContainer = document.getElementById('startcontainer');
let btn = document.querySelector("#startbutton");

btn.addEventListener('click', function(){
    startContainer.style.opacity = 0;
    startContainer.style.transform = 'scale(0)';
    window.setTimeout(function(){
        startContainer.style.display = 'none';
    },700);
})

function hideEndContainerShowWinner() {
    let gameContainer = document.querySelector('.gamecontainer');
    let bottomContainer = document.getElementById('bottomcontainer');
    // console.log(gameContainer)
    // console.log(bottomContainer)
    gameContainer.style.opacity = 0;
    gameContainer.style.transform = 'scale(0)';
    // Add timeout with length matching animation-duration 
    gameContainer.style.display = 'none';
    bottomContainer.style.display = 'block';
}

btn.addEventListener('click', function(){
    startContainer.style.opacity = 0;
    startContainer.style.transform = 'scale(0)';
    // Add timeout with length matching animation-duration 
    window.setTimeout(function(){
        startContainer.style.display = 'none';
    },700); 
});

btn.addEventListener('click', function(){
    startContainer.style.opacity = 0;
    startContainer.style.transform = 'scale(0)';
    // Add timeout with length matching animation-duration 
    window.setTimeout(function(){
        startContainer.style.display = 'none';
    },700);
})

document.addEventListener("click", selectionListener);
function selectionListener(event) 
{
    
    let element = event.target;
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";

    // check to see if rock button was clicked => submit choice to playRound()
    if ((element.classList.contains("gameselection") && element.id === ("rockdiv")) ||
        (element.classList.contains("selection") && element.id === ("rockimg")) ||
        (element.classList.contains("gameselectiontext") && element.id === ("rockselection")))
    {
        playRound(rock);
        //console.log("rock submitted");

    } else if ( (element.classList.contains("gameselection") && element.id === ("paperdiv")) ||
                (element.classList.contains("selection") && element.id === ("paperimg")) ||
                (element.classList.contains("gameselectiontext") && element.id === ("paperselection"))) 
        {
            playRound(paper);
            //console.log("paper submitted");

        } else if ( (element.classList.contains("gameselection") && element.id === ("scissorsdiv")) ||
                    (element.classList.contains("selection") && element.id === ("scissorsimg")) ||
                    (element.classList.contains("gameselectiontext") && element.id === ("scissorsselection"))) 
                    {
                        playRound(scissors);
                        //console.log("scissors submitted");
                    }
}

function cpuPick() {
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];

    return choice
}

function playRound(playerChoice) {
    let computerChoice = cpuPick();
    // let winText = `You win! ${playerChoice} beats ${computerChoice}`;
    // let loseText = `You Lose! ${computerChoice} beats ${playerChoice}`;
    
    const rockSelected = document.querySelector("#rockdiv");
    const paperSelected = document.querySelector("#paperdiv")
    const scissorsSelected = document.querySelector("#scissorsdiv")

    const computerRockSelected = document.querySelector("#computerrockdiv");
    const computerPaperSelected = document.querySelector("#computerpaperdiv");
    const computerScissorsSelected = document.querySelector("#computerscissorsdiv");

    // change background colour of computers selected move.
    if (computerChoice === "rock") {
        computerRockSelected.style.backgroundColor = "#7987e9";
        computerPaperSelected.style.backgroundColor = "white";
        computerScissorsSelected.style.backgroundColor = "white";
    } else if(computerChoice === "paper") {
        computerPaperSelected.style.backgroundColor = "#7987e9";
        computerRockSelected.style.backgroundColor = "white";
        computerScissorsSelected.style.backgroundColor = "white";
    } else if(computerChoice === "scissors") {
        computerScissorsSelected.style.backgroundColor = "#7987e9";
        computerRockSelected.style.backgroundColor = "white";
        computerPaperSelected.style.backgroundColor = "white";
    }

    if (playerChoice === "rock") {
        rockSelected.style.backgroundColor = "#7987e9";
        paperSelected.style.backgroundColor = "white";
        scissorsSelected.style.backgroundColor = "white";
    } else if (playerChoice === "paper") {
        paperSelected.style.backgroundColor = "#7987e9";
        rockSelected.style.backgroundColor = "white";
        scissorsSelected.style.backgroundColor = "white";
    } else if (playerChoice === "scissors") {
        scissorsSelected.style.backgroundColor = "#7987e9";
        paperSelected.style.backgroundColor = "white";
        rockSelected.style.backgroundColor = "white";
    }

    
    if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {

            playerScore++;
            //console.log(winText);
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`
            scoreTracker()
        } else if (playerChoice === computerChoice) {
            //console.log("its a tie");
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`
        } else {
            computerScore++;
            //console.log(loseText);
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`
        }

    
    scoreTracker(playerScore, computerScore);
    
    //console.log("player wins:"+playerScore)
    //console.log("cpu wins:"+computerScore)
}



function scoreTracker(playerScore, computerScore) {

     // Set variable for the game update paragraph tag
     const gameUpdates = document.querySelector(".gameupdates");
     // Set variables for the user and robot win logos
     let userWinLogo = document.getElementById('userwinslogo');
     let robotWinLogo = document.getElementById('robotwinslogo');
     if (playerScore == 5 || computerScore == 5) {
         if (playerScore > computerScore) {
             let text = document.createTextNode(`YOU WIN ${playerScore} : ${computerScore} !`);
             gameUpdates.appendChild(text);
             hideEndContainerShowWinner();
             userWinLogo.style.display = 'block';
         }
         else if (computerScore > playerScore) {
             let text = document.createTextNode(`COMPUTER WINS ${computerScore} : ${playerScore} !`);
             gameUpdates.appendChild(text);
             hideEndContainerShowWinner();
             robotWinLogo.style.display = 'block';
         }
         else {
             let text = document.createTextNode(`IT WAS A DRAW!`);
             gameUpdates.appendChild(text);
             hideEndContainerShowWinner();
             userWinLogo.style.display = 'block';
             robotWinLogo.style.display = 'block';
         }   
     }
}









