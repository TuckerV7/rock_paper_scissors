/*I need the function get ComputerChoice to print a string
there are three options, rock paper scissors
1. get random number and turn it into an integer 1-99
if number is 1-33 print rock
if number is 34-66 print paper
if number is 67-99 print scissors

2. Get players decision of rock, paper, or scissors
print out the players answer in console
*/
function getComputerChoice () {

     let number = Math.random();
     number *= 100;
if (number <= 33) {

    console.log('Rock')
} else if (number >= 67) {
    console.log('Scissors')
} else {
    console.log('Paper')
}
}

function getHumanChoice (){

    prompt ('Rock, Paper, or Scissors?')

}


getComputerChoice()
getHumanChoice()