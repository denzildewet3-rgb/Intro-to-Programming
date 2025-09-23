// Create a Function
/*var ourFirstFunction = function () {
    console.log("Hello World!");
    return 5;
};

ourFirstFunction();
// console.log(ourFirstFunction())
*/
// Passing arguments into Functions
/*
var sayHelloTo = function (name) {
    console.log("Hello " + name + "!")
};
sayHelloTo("Denzil");
sayHelloTo("Wickulene");
sayHelloTo("Wickus");

// sayHelloTo(3);
*/
// Passing out mutliple arguments to a code
// var printMultipleLines = function (howManyTimes, whatToDraw) {
//     for (var i = 0; i < howManyTimes; i++) {
//         console.log(i + " " + whatToDraw);
//     };
// };
// printMultipleLines(5, "=^.^=")
// printMultipleLines(3, 10)
// printMultipleLines(2, true)
// printMultipleLines(10, "Hi")

// Returning Values From Functions
// var double = function (number) {
//     return number * 2;
// };
// double(10);
// console.log(double(10));
// console.log(double(10) + double(30))
// console.log(double(10 * 50) + double(30))

// A Function to pick a Random Word
var pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};

// var randomWords = ["Planet", "Worm", "Computer", "Flower"];
// pickRandomWord(randomWords);
// console.log(pickRandomWord(randomWords));

// pickRandomWord(["Charlie", "Raj", "Nicole", "Kate", "Sandy"]);
// console.log(pickRandomWord(["Malcom", "Bakkies", "Rassie", "Eben", "PSDT"]));

// var randomBodyParts = ["Face", "Nose", "Hair", "Mouth", "Ears"];
// var randomAdjectives = ["Smelly", "Boring", "Stupid", "Stinky", "Dirty"];
// var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat", "Pig", "Snail"];

// var randomString =
//   "Your " +
//   pickRandomWord(randomBodyParts) +
//   " is like a " +
//   pickRandomWord(randomAdjectives) +
//   " " +
//   pickRandomWord(randomWords) +
//   "!!!";
// console.log(randomString);

// Making the Random Insult generator into a Function
// generateRandomInsult = function () {
//   var randomBodyParts = ["Face", "Nose", "Hair", "Mouth", "Ears"];
//   var randomAdjectives = ["Smelly", "Boring", "Stupid", "Stinky", "Dirty"];
//   var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat", "Pig", "Snail"];

//   var randomString =
//     "Your " +
//     pickRandomWord(randomBodyParts) +
//     " is like a " +
//     pickRandomWord(randomAdjectives) +
//     " " +
//     pickRandomWord(randomWords) +
//     "!!!";

//   return randomString;
// };
// generateRandomInsult();
// console.log(generateRandomInsult());
// console.log(generateRandomInsult());
// console.log(generateRandomInsult());

// var fifthLetter = function (name) {
//   if (name.length < 5) {
//     return "Your name is too Short!!";
//   }
//   return "The fifth letter of your name is " + name[4] + ".";
// };
// fifthLetter("Denzil")
// console.log(fifthLetter("Jacobus"));
// console.log(fifthLetter("Drew"));
// console.log(fifthLetter("Susanna"))

// Using return Multiple Times Instead of if...else Statements
// var medalForScore = function (score) {
//   if (score < 3) {
//     return "Bronze";
//   }
//   if (score < 7) {
//     return "Silver";
//   }

//   return "Gold";
// }
// console.log(medalForScore(1));
// console.log(medalForScore(5));
// console.log(medalForScore(7));
// console.log(medalForScore(2));
// // console.log(medalForScore(10));

/*
var medalForScore = function (score) {
  if (score < 3) {
    return "Bronze";
  } else if (score < 7) {
    return "Silver";
  } else {
    return "Gold";
  }
};
console.log(medalForScore(1));
console.log(medalForScore(5));
console.log(medalForScore(7));
console.log(medalForScore(2));
console.log(medalForScore(10));
*/

// Function Expression (Long)
// var double = function (number) {
//   return number * 2;
// }

// Function Declaration (short)
// function double(number) {
//   return number * 2;
// }

// Programming Challenge Page 138 Number 1
/*
function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(add(multiply(36325, 9824), 777));
*/

// Programming Challenge page 138 Number 2

function areArraysSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
 }
 for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] !== arr2[i]) {
    return false;
  }
 } 
 return true;
}
console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));
