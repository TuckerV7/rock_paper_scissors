/* I need the function get ComputerChoice to print a string
there are three options, rock paper scissors
1. get random number and turn it into an integer 1-99
if number is 1-33 print rock
if number is 34-66 print paper
if number is 67-99 print scissors

2. Get players decision of rock, paper, or scissors
print out the players answer in console

3. Play against the computer
get the value of the players choice

4. after I play 1 round, I want to play another round with new humanchoice and computer choice
I have to get a new humanchoice and computerchoice and store them for a new round to be played
*/


let humanScore = 0;
let computerScore = 0;
let computerChoice;
function getComputerChoice () {
   
     let number = Math.random();
     number *= 100;
if (number <= 33) {
    computerChoice = 'rock';
} else if (number >= 67) {
    computerChoice = 'paper';
} else {
    computerChoice = 'scissors';
}

return computerChoice;
}



let roundCounter = 0;
function playRound (humanSelection, computerSelection){
if (humanSelection === 'rock' && computerSelection === 'scissors') {
    moreContent.textContent = 'You win! Rock beats scissors.';
    humanScore++;
    roundCounter++;
    return humanScore;
} else if (humanSelection === 'rock' && computerSelection === 'paper') {
    moreContent.textContent = 'You lose! Paper beats rock.';
    computerScore++;
    roundCounter++;
    return computerScore
} else if ( humanSelection === 'scissors' && computerSelection === 'rock') {
    moreContent.textContent = 'You lose! Rock beats scissors.';
    computerScore++;
    roundCounter++;
    return computerScore
} else if (humanSelection === 'scissors' && computerSelection === 'paper') {
    moreContent.textContent = 'You win! Scissors beat paper.';
    humanScore++;
    roundCounter++;
    return humanScore
} else if (humanSelection === 'paper' && computerSelection === 'rock') {
    moreContent.textContent = 'You win! Paper beats rock.';
    humanScore++;
    roundCounter++;
    return humanScore
} else if (humanSelection === 'paper' && computerSelection === 'scissors') {
    moreContent.textContent = 'You lose! Scissors beat paper.';
    computerScore++;
    roundCounter++;
    return computerScore
} else {
    moreContent.textContent = 'You tied!';
    return humanScore
}
}








let playerChoice;





container.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
         
            playerChoice = 'rock';
            getComputerChoice();
            playRound(playerChoice,computerChoice);
            gameUI.textContent = 'You chose Rock! ' + 'Computer chose ' + computerChoice + '.';
            playerScore.textContent = 'Your score is: ' + humanScore;
            compScore.textContent = 'Computers score is: ' + computerScore;
            if (humanScore >= 5) {
                playerScore.textContent = 'You win!';
            } else if (computerScore >= 5) {
                compScore.textContent = 'Computer wins!';
            }
            break;
        case 'paper':
            playerChoice = 'paper';
            playRound(playerChoice,getComputerChoice());
            gameUI.textContent = 'You chose Paper! ' + 'Computer chose ' + computerChoice + '.';
            playerScore.textContent = 'Your score is: ' + humanScore;
            compScore.textContent = 'Computers score is: ' + computerScore;
            if (humanScore >= 5) {
                
                playerScore.textContent = 'You win!';
        
            } else if (computerScore >= 5) {
                compScore.textContent = 'Computer wins!';
               
            }
            break;
        case 'scissors':
            playerChoice = 'scissors';
            playRound(playerChoice,getComputerChoice());
            gameUI.textContent = 'You chose Scissors! ' + 'Computer chose ' + computerChoice + '.';
            playerScore.textContent = 'Your score is: ' + humanScore;
            compScore.textContent = 'Computers score is: ' + computerScore;
            if (humanScore >= 5) {
                playerScore.textContent = 'You win!';
            } else if (computerScore >= 5) {
                compScore.textContent = 'Computer wins!';
            }
            break;
    }
});

if (humanScore === 5) {
    console.log('winner');
    playerScore.textContent = 'You win!';
} else if (computerScore === 5) {
    console.log('winner');
    compScore.textContent = 'Computer wins!';
}

const score = document.querySelector("#score");
const content = document.createElement("p");
const moreContent = document.createElement('p');
content.classList.add("content");

const playerScore = document.createElement('p');
const compScore = document.createElement('p');
const gameUI = document.querySelector("#gameUI");
const UI = document.createElement('p');
gameUI.classList.add('gameUI');
playerScore.textContent = 'Your score is: ' + humanScore;
compScore.textContent = 'Computers score is: ' + computerScore;

gameUI.appendChild(UI);
score.appendChild(content);
score.appendChild(moreContent);
score.appendChild(playerScore);
score.appendChild(compScore);




