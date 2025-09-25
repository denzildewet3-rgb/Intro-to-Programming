// C===============reating a varaible 
// var book; 

// var MyFirstName;
// var favoriteFood;
// var birthday;
// var timeOfDay;

// var _yourPetName;
// var $schoolSubject;

// var friends_Age;
// var street$Adress;

// ===============Results in Error (reserved keywords)
// var break = "Tommorow";
// var const = "Today";

// ===============Storing data in varaibles
// var book = "Javascript For Kids For Dummies";
// console.log(book);

// book = "The Call of The Wild";
// console.log(book)

// ===============Understanding Data Types
// ===============String Data Type
// var book 
// book = "Javascript For Kids For Dummies";
// console.log(book.length);
// console.log("Javascript For Kids For Dummies".length)

// var string = "I am a string".indexOf("am");
// console.log(string);
// var string = "I am a string".indexOf("I");
// console.log(string);

// // ===========Number Data Type
// var numberTest = "10" + 10;
// console.log(numberTest);

// var numberTest1 = "10" / 10;
// console.log(numberTest1);

// ==============Boolean Data Type
// console.log(1 < 10);
// console.log(2 === 2);
// console.log(1 >= 5);

// console.log(Boolean(0));
// console.log(Boolean(""));

// ===============Promting and Storing the user input
// var myName = prompt("What is your name?");
// console.log(myName);

// alert("Good job!");
// alert("Thank you");
// alert(37*37);
// alert(true);

// var myName = "Denzil De wet";
// var myAge = 35;
// alert("Hi, " + myName + " your current age is " + myAge);

// var truck = {
//     "color" : "Yellow",
//     price : 150000,
//     "drive" : function() {
//         console.log("I am driving a big truck")
//     }
// };

// console.log(truck.color);
// console.log(truck["color"]);
// truck.drive();
// console.log(truck.price)

// =====================Using document.write()
// document.write("<h1>Hi, Mom!</h1>");
// document.write("<p>333 + 100</p>");
// document.write("I'm Great, Thanks!");
// document.write("Thats Awesome!!!");
// document.writeln("M");

// ======================Combining Input and Output

var toName = prompt("Please enter recipients Name");
var fromName = prompt("Please enter senders name");
var letterBody = prompt("Compose Letter.");

document.write("Dear, " + toName + " ,<br></br>");
document.write(letterBody + "<br></br>");
document.write("Sincerely, <br>");
document.write(fromName);