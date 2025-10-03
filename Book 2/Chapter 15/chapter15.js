// ==============Switch Statement===============
// var myNumber = prompt("Enter your favourite day of the week!");
// var theResponse;

// switch (myNumber) {
//     case "Monday":
//         theResponse = "Here we go Again!!";
//         break;
//     case "Tuesday":
//         theResponse = "Taco Tuesday";
//         break;
//     case "Wednesday":
//         theResponse = "Klein Saterdag";
//         break;
//     case "Thursday":
//         theResponse = "Weekend is near!!!";
//         break;
//     case "Friday":
//         theResponse = "Whoop Whoop - TGIF";
//         break;
//     case "Saturday":
//         theResponse = "Braai Day";
//         break;
//     case "Sunday":
//         theResponse = "Sunday Funday!!"
//         break;
//     default:
//         theResponse = "I have not heard of that one!"
//         break;
// }
// alert (theResponse);

// ===================My Date====================
// var myDate = new Date ();
// console.log(myDate);
// console.log(myDate.getDay());
// console.log(myDate.getDate());
// console.log(myDate.getMonth());
// console.log(myDate.getFullYear());

// ===================My New Date================
// var myNewDate = new Date();
// console.log(myNewDate.setMonth(7));
// console.log(myNewDate);
// console.log(myNewDate.setSeconds(50));
// console.log(myNewDate);

var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// create a new Date object
var d = new Date();

// call the displayDate() function
displayDate();
function displayDate() {
    todayDate.innerHTML = d;
    todayDate.innerHTML = d.toDateString();

    // todo: display the current date in the todaysdate
// div
}
function displayActivity() {
    var DayOfWeek = d.getDay();

    var youShould;

    switch(DayOfWeek) {
        case 0:
            youShould = "Take it it Easy, Sunday Funday";
            break;
        case 1:
            youShould = "Get yourseld to work, it is Monday Blues";
            break;
        case 2:
            youShould = "It is Taco Tuesday";
            break;
        case 3:
            youShould = "Wacky Wednesday at Steers";
            break;
        case 4:
            youShould = "It is Thursday, almost weekeend!";
            break;
        case 5:
            youShould = "It's the weekend Baby!!!";
            break;
        case 6:
            youShould = "Braai and watch some Rugby";
            break;
        default:
            youShould = "Oh no, Something went wrong";
    };

    document.getElementById("thingToDo").innerHTML = youShould
}