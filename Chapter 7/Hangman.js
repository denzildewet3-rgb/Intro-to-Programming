// Programming Challenge #1
/*
var words = [
    "homefront", 
    "beach", 
    "productivity", 
    "rugby", 
    "desktop", 
    "github", 
    "programming", 
    "javscript", 
    "monitor"];
var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

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
}

// Update answerArray and remainingLetters for every correct guess
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);
*/

// Programming Challenge #2

// var words = [
//     "homefront",
//     "beach",
//     "productivity",
//     "rugby",
//     "desktop",
//     "github",
//     "programming",
//     "javscript",
//     "monitor"];
// var word = words[Math.floor(Math.random() * words.length)];

// var answerArray = [];
// for (var i = 0; i < word.length; i++) {
//   answerArray[i] = "_";
// }

// var remainingLetters = word.length;

// while (remainingLetters > 0) {

//     // Show the player their progress
//   alert(answerArray.join(" "));

//   // Take input from the player
//   var guess = prompt("Guess a letter, or click Cancel to stop playing. You have " + guesses + " chances remaining");
//   if (guess === null) {
//     break;
//   } else if (guess.length !== 1) {
//     alert("Please enter a single letter.");
//   } else {
//     guess = guess.toLowerCase()
//     for (var j = 0; j < word.length; j++) {
//       if (word[j] === guess) {
//         answerArray[j] = guess;
//         remainingLetters--;
//       }
//     }
//   }
// }

// // Update answerArray and remainingLetters for every correct guess
// alert(answerArray.join(" "));
// alert("Good job! The answer was " + word);

// Programming Challenge #3 Page 121
/*
var words = [
  "homefront",
  "beach",
  "productivity",
  "rugby",
  "desktop",
  "github",
  "programming",
  "javascript",
  "monitor",
];
var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var remainingLetters = word.length;
var guesses = word.length + 5;

while (remainingLetters > 0 && guesses > 0) {
  // Show the player their progress
  alert(answerArray.join(" "));

  //   // Take input from the player
  var guess = prompt(
    "Guess a letter, or click Cancel to stop playing. You have " +
      guesses +
      " chances remaining"
  );
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    guesses--;
    guess = guess.toLowerCase();
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess && answerArray[j] === "_") {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
}

// Update answerArray and remainingLetters for every correct guess
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);
*/
// Programming Challenge 3 Page 139

var pickWord = function () {
  var words = [
    "homefront",
    "beach",
    "productivity",
    "rugby",
    "desktop",
    "github",
    "programming",
    "javascript",
    "monitor",
  ];
  return words[Math.floor(Math.random() * words.length)];
};

var setupAnswerArray = function (word) {
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  return answerArray;
};

var showPlayerProgress = function (answerArray) {
  alert(answerArray.join(" "));
};

var getGuess = function () {
  return prompt("Guess a letter or click cancel to stop playng.");
};

var updateGameState = function (guess, word, answerArray) {
  var correctGuesses = 0;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === guess && answerArray[i] === "_") {
      answerArray[i] = guess;
      correctGuesses++;
    }
  }
  return correctGuesses;
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
  alert("Good job the answer was: " + answerArray.join(""));
};

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;

while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  var guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("please enter a single letter.");
  } else {
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}

showAnswerAndCongratulatePlayer(answerArray);

