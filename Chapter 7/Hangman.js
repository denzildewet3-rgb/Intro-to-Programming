var words = ["homefront", "beach", "productivity", "rugby"];
var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
};

var remainingLetters = word.length;

while (remainingLetters > 0) {
    // Show the player their progress
    alert(answerArray.join(" "));
    // Take input from the player
var guess = prompt("Guess a letter, or click Cancel to stop playing.");
if (guess === null) {
    break;
} else if (guess.length !== 1) {
    alert("Please enter a single letter.");
} else {
    for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
        }
    }
}
};

// Update answerArray and remainingLetters for every correct guess
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);
