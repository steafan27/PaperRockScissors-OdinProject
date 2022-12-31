console.log("Welcome to Paper Rock Scissors");
let userChoice;
let computerChoice;
let wins = 0;
let loss = 0;
let tie = 0;
let gamePlayed = 0;
let rockButton = document.getElementById('buttonRock');
let paperButton = document.getElementById('buttonPaper');
let scissorButton = document.getElementById('buttonScissor');
let scoreBoard = document.getElementById('scores');

rockButton.addEventListener('click', () =>{
    userChoice = 'rock';
    computerChoice = Math.floor(Math.random() * 3);
    playRound(computerChoice, userChoice);
    gamePlayed += 1;
    scoreBoard.textContent = `Wins: ${wins} Losses: ${loss} Ties: ${tie}`;
});

paperButton.addEventListener('click', () =>{
    userChoice = 'paper';
    computerChoice = Math.floor(Math.random() * 3);
    playRound(computerChoice, userChoice);
    gamePlayed += 1;
    scoreBoard.textContent = `Wins: ${wins} Losses: ${loss} Ties: ${tie}`;
});

scissorButton.addEventListener('click', () =>{
    userChoice = 'scissors';
    computerChoice = Math.floor(Math.random() * 3);
    playRound(computerChoice, userChoice);
    gamePlayed += 1;
    scoreBoard.textContent = `Wins: ${wins} Losses: ${loss} Ties: ${tie}`;
});

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