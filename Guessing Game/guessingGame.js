// var secret = 7

// Make the number random
var secret =  Math.floor(Math.random() * 20) + 1;

console.log(secret)

let answer = prompt("Please guess the secret number (1-20)");
var guess = parseInt(answer);

// Please add an if statement which checks if the guess is correct, if it is, then display a message: Correct Guess!, otherwise “Sorry, incorrect Guess!

// I have added the while loop here to run the alert until the correct number is given
// while (guess !== secret) {
//   if (guess === secret) {
//   alert("Correct Guess!");
// } else {
//   alert("Sorry, incorrect Guess!");
// }
// guess = parseInt(prompt("Please guess the secret number (1-20)"));
// }


while (answer !== secret) {
  if (answer < secret) {
    alert("Incorrect, too low");
  } else {
    alert("Incorrect, too high");
  }
answer = parseInt(prompt("Please guess the secret number (1-20)"));

}

alert("Correct Guess!");

