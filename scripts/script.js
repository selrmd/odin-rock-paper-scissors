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
    let message = '', winner = '';
    let playerScore = 0, computerScore = 0;

    for(let i = 0; i < 5; i++){
        // get the random computer choice
        computerSelection = getComputerChoice();

        // get user choice
        playerSelection = prompt('Rock, Paper or Scissors??').toLowerCase();

        // user entered the right choice
        if(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors'){
            // display winner of this round
            message = playRound(playerSelection, computerSelection);
            console.log(message);

            // keep a score for each round
            winner = getWinner(message);
            if(winner === 'winner'){
                playerScore ++;
            } else if (winner === 'loser') {
                computerScore++;
            }

            // display the current score
            console.log(`Player:${playerScore} || Computer:${computerScore}`);
        } else {
            // user entered the wrong choice
            console.log('Wrong choice. Please try again!');
        }
    }

    // determine the winner of the game
    displayFinalScore(playerScore, computerScore); 
}

// look inside the string returned by playRound() 
// and see if player won or lost
function getWinner(message){
    let str = message.toLowerCase();

    if(str.includes('win'))
        return 'winner';
    else if (str.includes('lose'))
        return 'loser';
}

function displayFinalScore(playerScore, computerScore){
    // compare the score and display the winner
    if(playerScore > computerScore){
        console.log(`Player won! ${playerScore} to ${computerScore}`);
    } else if(playerScore < computerScore) {
        console.log(`Computer won! ${computerScore} to ${playerScore}`);
    } else {
        console.log(`It's a tie!! ${playerScore} to ${computerScore}`);
    }
}

// play a game of 5 rounds
game();