function playGame(){
    // get player selection from buttons
    let gameBtns = Array.from(document.getElementsByTagName("button"));
    let playerBtnChoice = '', computerChoice = '';

    // For each button, listen for player choice and play a round
    gameBtns.forEach(element => 
        element.addEventListener('click', e => {
            document.getElementById('result').innerText = '';

            playerBtnChoice = e.target.innerText;
            computerChoice = getComputerChoice();

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
    let textResult;

    if(playerChoice === 'scissors' && computerSelection === 'paper'){
        textResult = document.createTextNode('You Win! Scissors beats Paper');
        document.getElementById('result').appendChild(textResult);
    }
    else if(playerChoice === 'paper' && computerSelection === 'scissors'){
        textResult = document.createTextNode('You Lose! Scissors beats Paper');
        document.getElementById('result').appendChild(textResult);
    }
    else if(playerChoice === 'paper' && computerSelection === 'rock'){
        textResult = document.createTextNode('You Win! Paper beats Rock');
        document.getElementById('result').appendChild(textResult);
    }
    else if(playerChoice === 'rock' && computerSelection === 'paper'){
        textResult = document.createTextNode('You Lose! Paper beats Rock');
        document.getElementById('result').appendChild(textResult);
    }
    else if(playerChoice === 'rock' && computerSelection === 'scissors'){
        textResult = document.createTextNode('You Win! Rock beats Scissors');
        document.getElementById('result').appendChild(textResult);
    }
    else if(playerChoice === 'scissors' && computerSelection === 'rock'){
        textResult = document.createTextNode('You Lose! Rock beats Scissors');
        document.getElementById('result').appendChild(textResult);
    }
    else{
        textResult = document.createTextNode('A Tie!');
        document.getElementById('result').appendChild(textResult);
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
        document.getElementsByTagName('h1')[0].innerText = 'Wanna play again??';
        document.getElementById('rps-img').style.display = 'block';
        resetGame();
    }
}

// display the score
function displayScore(player, cpu){
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
    document.getElementById("buttons-container").style.display = 'none';
    document.getElementById('result').style.display = 'none';

    let resetBtn = document.getElementById('reset');
    resetBtn.style.display = 'initial';

    resetBtn.addEventListener('click', () => {
        document.getElementsByTagName('h1')[0].innerText = 'Let\'s play a round of Rock, Paper, Scissors';
        document.getElementById('result').innerText = '';
        document.getElementById('player').innerText = '0';
        document.getElementById('cpu').innerText = '0';
        document.getElementById('winner').innerText = '';

        document.getElementById("buttons-container").style.display = 'flex';;
        document.getElementById('result').style.display = 'block';
        document.getElementById('rps-img').style.display = 'none';
        resetBtn.style.display = 'none';
    });
}

// start playing the game
playGame();