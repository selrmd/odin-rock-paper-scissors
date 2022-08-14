// get a random choice for computer
function getComputerChoice(){
    let choice = '';

    // get a random number from 1 to 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    // store the choice based on that random number
    switch(randomNumber){
        case 1:
            choice = 'rock';
            break;
        case 2:
            choice = 'paper';
            break;
        case 3:
            choice = 'scissors';
            break;
        default:
            console.warn('Something went wrong');
    }

    // return the choice
    return choice;
}

// play one round of the game
function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.toLowerCase();

    if(playerChoice === 'scissors' && computerSelection === 'paper')
        return 'You Win! Scissors beats Paper';
    else if(playerChoice === 'paper' && computerSelection === 'scissors')
        return 'You Lose! Scissors beats Paper';
    else if(playerChoice === 'paper' && computerSelection === 'rock')
        return 'You Win! Paper beats Rock';
    else if(playerChoice === 'rock' && computerSelection === 'paper')
        return 'You Lose! Paper beats Rock';
    else if(playerChoice === 'rock' && computerSelection === 'scissors')
        return 'You Win! Rock beats Scissors';
    else if(playerChoice === 'scissors' && computerSelection === 'rock')
        return 'You Lose! Rock beats Scissors';
    else
        return 'A Tie!';
}

// play a game of 5 rounds
function game(){
    let playerSelection = '';
    let computerSelection = '';

    for(let i = 0; i < 5; i++){
        playerSelection = prompt('Rock, Paper or Scissors??');
        computerSelection = getComputerChoice();

        alert(playRound(playerSelection, computerSelection));
    }

}

game();