function playGame(){
    // get player selection from buttons
    let gameBtns = Array.from(document.getElementsByTagName('button'));
    let playerBtnChoice = '', computerChoice = '';

    // For each button, listen for player choice
    gameBtns.forEach(button => 
        button.addEventListener('click', e => {
            document.getElementById('result').innerText = '';

            playerBtnChoice = e.target.innerText;
            computerChoice = getComputerChoice();

            // play one round
            playRound(playerBtnChoice, computerChoice);
    }));
}

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

    if(playerChoice === 'scissors' && computerSelection === 'paper'){
        document.getElementById('result').innerText = 'You Win! Scissors beats Paper';
    }
    else if(playerChoice === 'paper' && computerSelection === 'scissors'){
        document.getElementById('result').innerText = 'You Lose! Scissors beats Paper';
    }
    else if(playerChoice === 'paper' && computerSelection === 'rock'){
        document.getElementById('result').innerText = 'You Win! Paper beats Rock';
    }
    else if(playerChoice === 'rock' && computerSelection === 'paper'){
        document.getElementById('result').innerText = 'You Lose! Paper beats Rock';
    }
    else if(playerChoice === 'rock' && computerSelection === 'scissors'){
        document.getElementById('result').innerText = 'You Win! Rock beats Scissors';
    }
    else if(playerChoice === 'scissors' && computerSelection === 'rock'){
        document.getElementById('result').innerText = 'You Lose! Rock beats Scissors'
    }
    else{
        document.getElementById('result').innerText = 'A Tie!';
    }

    calculateScore();
}

// calculate the score, get the winner
function calculateScore(){
    let currentWinner = document.getElementById('result').innerText.toLowerCase();

    let playerScore = parseInt(document.getElementById('player').innerText);
    let computerScore = parseInt(document.getElementById('cpu').innerText);

    // increment the score based on playedRound() string
    if(currentWinner.includes('win'))
        playerScore += 1;

    else if(currentWinner.includes('lose'))
        computerScore += 1;

    // display score
    document.getElementById('player').innerText = playerScore;
    document.getElementById('cpu').innerText = computerScore;

    // when one player reaches a score of 5
    // stop the game and reset it
    if(playerScore >= 5 || computerScore >= 5)
    {
        displayScore(playerScore, computerScore);
        resetGame();
    }
}

// display the score
function displayScore(player, cpu){
    // change header title and display a picture of the game
    document.getElementsByTagName('h1')[0].innerText = 'Wanna play again??';
    document.getElementById('rps-img').style.display = 'block';

    // hide choice buttons and round result text
    // to prevent player from continuing to play
    document.getElementById('buttons-container').style.display = 'none';
    document.getElementById('result').style.display = 'none';

    // show final score
    let finalScore = '';

    if(player > cpu){
        finalScore = document.createTextNode(`Player won! ${player} to ${cpu}`);
        document.getElementById('winner').appendChild(finalScore) ;
    } else if(player < cpu){
        finalScore = document.createTextNode(`Computer won! ${cpu} to ${player}`);
        document.getElementById('winner').appendChild(finalScore) ;
    } else {
        finalScore = document.createTextNode(`It's a tie!! ${player} each!`);
        document.getElementById('winner').appendChild(finalScore) ;
    }
}

// reset game once a winner is announced
function resetGame(){
    let resetBtn = document.getElementById('reset');
    resetBtn.style.display = 'block';

    resetBtn.addEventListener('click', () => {
        // set header text back
        document.getElementsByTagName('h1')[0].innerText = 'Let\'s play Rock, Paper, Scissors';
        // remove the previous round result
        document.getElementById('result').innerText = '';
        // set both scores to 0
        document.getElementById('player').innerText = '0';
        document.getElementById('cpu').innerText = '0';
        // clear the winning message
        document.getElementById('winner').innerText = '';

        // unhide the choice buttons and round result message
        document.getElementById('buttons-container').style.display = 'flex';;
        document.getElementById('result').style.display = 'block';

        // hide game picture and reset button
        document.getElementById('rps-img').style.display = 'none';
        resetBtn.style.display = 'none';
    });
}

// start playing the game
playGame();