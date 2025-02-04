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

function getComputerChoice () {
    let computerChoice = 'rock';
     let number = Math.random();
     number *= 100;
if (number <= 33) {
    computerChoice = 'rock';
} else if (number >= 67) {
    computerChoice = 'paper';
} else {
    computerChoice = 'scissors';
}
console.log('Computer chose ' + computerChoice);
return computerChoice;
}

  
function getHumanChoice (){
    let humanChoice = prompt ('Rock, Paper, or Scissors?');
    if (humanChoice.toLowerCase() === 'rock') {
        humanChoice = 'rock';
    } else if (humanChoice.toLowerCase() === 'paper') {
        humanChoice = 'paper';
    } else if (humanChoice.toLowerCase() === 'scissors') {
        humanChoice = 'scissors';
    } else {
        humanChoice = 'Illegal entry! Please enter Rock, Paper, or Scissors.';
    }
console.log('You chose ' + humanChoice)
return humanChoice;
}

let roundCounter = 0;
function playRound (humanSelection, computerSelection){
if (humanSelection === 'rock' && computerSelection === 'scissors') {
    console.log('You win! Rock beats scissors.')
    humanScore++;
    roundCounter++;
    console.log('Your score is' + ': ' + humanScore)
    console.log('The computers score is' + ': ' + computerScore)
    console.log('----------------------------')
    return humanScore;
} else if (humanSelection === 'rock' && computerSelection === 'paper') {
    console.log('You lose! Paper beats rock.')
    computerScore++;
    roundCounter++;
    console.log('Your score is' + ': ' + humanScore)
    console.log('The computers score is' + ': ' + computerScore)
    console.log('----------------------------')
    return computerScore
} else if ( humanSelection === 'scissors' && computerSelection === 'rock') {
    console.log('You lose! Rock beats scissors.')
    computerScore++;
    roundCounter++;
    console.log('Your score is' + ': ' + humanScore)
    console.log('The computers score is' + ': ' + computerScore)
    console.log('----------------------------')
    return computerScore
} else if (humanSelection === 'scissors' && computerSelection === 'paper') {
    console.log('You win! Scissors beat paper.')
    humanScore++;
    roundCounter++;
    console.log('Your score is' + ': ' + humanScore)
    console.log('The computers score is' + ': ' + computerScore)
    console.log('----------------------------')
    return humanScore
} else if (humanSelection === 'paper' && computerSelection === 'rock') {
    console.log('You win! Paper beats rock.')
    humanScore++;
    roundCounter++;
    console.log('Your score is' + ': ' + humanScore)
    console.log('The computers score is' + ': ' + computerScore)
    console.log('----------------------------')
    return humanScore
} else if (humanSelection === 'paper' && computerSelection === 'scissors') {
    console.log('You lose! Scissors beat paper.')
    computerScore++;
    roundCounter++;
    console.log('Your score is' + ': ' + humanScore)
    console.log('The computers score is' + ': ' + computerScore)
    console.log('----------------------------')
    return computerScore
} else {
    console.log('You tied!')
    console.log('Your score is' + ': ' + humanScore)
    console.log('The computers score is' + ': ' + computerScore)
    roundCounter++;
    console.log('----------------------------')
    return humanScore
}
}







 
let humChoice = getHumanChoice();
let compChoice = getComputerChoice();

function playGame(){
    playRound(humChoice,compChoice);
    humChoice = getHumanChoice();
    compChoice = getComputerChoice();
    playRound(humChoice,compChoice);
    humChoice = getHumanChoice();
    compChoice = getComputerChoice();
    playRound(humChoice,compChoice);
    humChoice = getHumanChoice();
    compChoice = getComputerChoice();
    playRound(humChoice,compChoice);
    humChoice = getHumanChoice();
    compChoice = getComputerChoice();
    playRound(humChoice,compChoice);

    if (humanScore > computerScore) {
        console.log('You won!')
        console.log('Final scores- ' + 'You: ' + humanScore + ' Computer: ' + computerScore)
    } else if (humanScore < computerScore) {
        console.log('You lost!')
        console.log('Final scores- ' + 'You: ' + humanScore + ' Computer: ' + computerScore)
    } else {
        console.log('You tied!')
        console.log('Final scores- ' + 'You: ' + humanScore + ' Computer: ' + computerScore)

    }

}

playGame();

