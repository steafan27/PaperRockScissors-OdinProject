console.log("Welcome to Paper Rock Scissors");
let userChoice;
let computerChoice;
let wins = 0;
let loss = 0;
let tie = 0;
let gamePlayed = 0;

//while(gamePlayed < 6)
userInput = window.prompt().toLowerCase(); 
computerChoice = Math.floor(Math.random() * 3); 
playRound(computerChoice, userInput);
gamePlayed += 1;
console.log("Wins", wins, "Loss", loss, "Ties", tie, "Rounds", gamePlayed);

//console.log("FINAL Wins", wins, "Loss", loss, "Ties", tie, "Rounds", gamePlayed);

function playRound(cI, uI){
    const CHOICES = ["paper", "rock", "scissors"];
    switch(true){
        case CHOICES[cI] == "paper" && uI == "paper":
            return tie += 1;
        case CHOICES[cI] == "paper" && uI == "rock":
            return loss += 1;
        case CHOICES[cI] == "paper" && uI == "scissors":
            return wins += 1;
        case CHOICES[cI] == "rock" && uI == "paper":
            return wins += 1;
        case CHOICES[cI] == "rock" && uI == "rock":
            return tie += 1;
        case CHOICES[cI] == "rock" && uI == "scissors":
            return loss += 1;
        case CHOICES[cI] == "scissors" && uI == "paper":
            return loss += 1;
        case CHOICES[cI] == "scissors" && uI == "rock":
            return wins += 1;
        case CHOICES[cI] == "scissors" && uI == "scissors":
            return tie += 1;
    }
}


