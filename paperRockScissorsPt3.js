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
let gameMessage = document.getElementById('message');


rockButton.addEventListener('click', () =>{
    endGameModal();
    userChoice = 'rock';
    computerChoice = Math.floor(Math.random() * 3);
    playRound(computerChoice, userChoice);
    scoreBoard.textContent = `Wins: ${wins} Losses: ${loss} Ties: ${tie}`;
});

paperButton.addEventListener('click', () =>{
    endGameModal();
    userChoice = 'paper';
    computerChoice = Math.floor(Math.random() * 3);
    playRound(computerChoice, userChoice);
    scoreBoard.textContent = `Wins: ${wins} Losses: ${loss} Ties: ${tie}`;
});

scissorButton.addEventListener('click', () =>{
    endGameModal();
    userChoice = 'scissors';
    computerChoice = Math.floor(Math.random() * 3);
    playRound(computerChoice, userChoice);
    scoreBoard.textContent = `Wins: ${wins} Losses: ${loss} Ties: ${tie}`;
});

function playRound(cI, uI){
    const CHOICES = ["paper", "rock", "scissors"];
    switch(true){
        case CHOICES[cI] == "paper" && uI == "paper":
            tie += 1;
            gamePlayed += 1;
            return [tie,gamePlayed];
        case CHOICES[cI] == "paper" && uI == "rock":
            loss +=1;
            gamePlayed += 1;
            return [loss,gamePlayed];
        case CHOICES[cI] == "paper" && uI == "scissors":
            wins += 1;
            gamePlayed += 1;
            return [wins,gamePlayed];
        case CHOICES[cI] == "rock" && uI == "paper":
            wins += 1;
            gamePlayed += 1;
            return [wins,gamePlayed];
        case CHOICES[cI] == "rock" && uI == "rock":
            tie += 1;
            gamePlayed += 1;
            return [tie,gamePlayed];
        case CHOICES[cI] == "rock" && uI == "scissors":
            loss +=1;
            gamePlayed += 1;
            return [loss,gamePlayed];
        case CHOICES[cI] == "scissors" && uI == "paper":
            loss +=1;
            gamePlayed += 1;
            return [loss,gamePlayed];
        case CHOICES[cI] == "scissors" && uI == "rock":
            wins += 1;
            gamePlayed += 1;
            return [wins,gamePlayed];
        case CHOICES[cI] == "scissors" && uI == "scissors":
            tie += 1;
            gamePlayed += 1;
            return [tie,gamePlayed];
    }
}

function endGameModal(){
    if(gamePlayed >= 4){
        console.log("hello");
    }
}
