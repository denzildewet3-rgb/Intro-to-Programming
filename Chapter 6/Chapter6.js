// var message = "Hello world!";
// console.log(message);

// CONDITIONALS
// IF STATEMENTS

// var firstname = " Denzil De Wet";
// console.log("Hello" + firstname);

// if (firstname.length === 7) {
//     console.log("WOW, you have a really long name" + firstname)
// }
// else {
//     console.log("Your name isnt very long")
// }

// CHANGING IF STATEMENTS
/*
var lemonChicken = false;
var beefWithBlankBean = true;
var sweetAndSourPork = true;

if (lemonChicken) {
    console.log("Great! I'm having lemon chicken!");
} else if (beefWithBlankBean) {
    console.log("I'm having the beef.");
} else if (sweetAndSourPork) {
    console.log("OK, I'll have the pork.");
} else {
    console.log("Well, I guess I'll have the rice then.");
};
*/

// WHILE LOOPS
/*
var sheepCounted = 0;
while (sheepCounted < 10) {
    console.log("I have counted " + sheepCounted + " sheep!");
    sheepCounted++;
}
console.log("Zzzzzzzzzz")
*/

// FOR LOOPS
/*
for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
    console.log("I have counted " + sheepCounted + " sheep!");
}
console.log("I am Done");

var timesToSayHello = 3;
for (var i = 0; i < timesToSayHello; i++) {
console.log(i + "Hello!");
}
*/

// Using FOR LOOPS WITH ARRAYS AND STRINGS

// var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor", ];

// for (var i = 0; i < animals.length; i++) {
//     console.log("This zoo contains a " + animals[i] + ".");
// };

// var name = "Denzil";

// for (var i = 0; i < name.length; i++) {
//     console.log("My name contains the letter " + name[i] + ".");
// }


// OTHER WAYS TO USE FOR LOOPS

// for (var x = 2; x < 10000; x = x * 2) {
//     console.log(x);
// }

// Try it out page 96.
/*
var name = "Denzil";
if (name === "Denzil") {
    console.log("Hello me!");
} else {
    console.log("Hello stranger!");
}


// var name = "Denzil";
if (name === "Denzil") {
     console.log("Hello me!")
 } else if (name === "Leon") {
     console.log("Hello Dad!")
 } else if (name === "Marianne") {
     console.log("Hello Mom!")
 } else {
     console.log("Hello stranger!")
 }
*/
// Try it out Page 102
/*
for (var x = 3; x < 10000; x = x * 3) {
     console.log(x)
 }

var x = 3;
while (x < 10000) {
    console.log(x);
    x = x * 3
}
*/
// Programming Challenge Page 103
var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

for (var i = 0; i < animals.length; i++) {
    animals[1] = "Awesome " + animals[i]
}
console.log(animals);

/*
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var randomString = "";

while (randomString.length < 6) {
    var randomIndex = Math.floor(Math.random() * alphabet.length);
    randomString += alphabet[randomIndex];
}

console.log(randomString);
*/
/*
var input = "javascript is awesome";
var output = "";

for (var i = 0; i < input.length; i++) {
    var letter = input[i];

    if (letter === "a") {
        output += "4";
    } else if (letter === "e") {
        output += "3";
    } else if (letter === "i") {
        output += "1";
    } else if (letter === "o") {
        output += "0"
    } else {
        output += letter;
    }
}
console.log(output)/
*/