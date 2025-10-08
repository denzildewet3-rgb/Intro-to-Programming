// ===========Listing 17.3
// for (var i = 10; i > 0; i--) {
//     alert (i);
// };
// alert ("BLAST OFF!!!!");

// ============Listing 17.2
// var myFriends = ["Denzil", "Wickulene", "Duane", "Nicole", "Leon", "Marianne"];

// for (var i = 0; i < myFriends.length; i++) {
//     alert(myFriends[i] + " is my Friend!!!");
// }

// ============Listing 17.3
// alert (Math.random());
// alert (Math.random() * 11);
// alert (Math.floor(Math.random() * 11));

// ============Listing 17.4
// var myFriends = ["Denzil", "Wickulene", "Duane", "Nicole", "Leon", "Marianne"];
// var randomFriend = Math.floor(Math.random() * myFriends.length);

// alert(myFriends[randomFriend]);

// Weather App
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var weather = [
  "Sunny",
  "Partly Sunny",
  "Partly Cloudy",
  "Cloudy",
  "Raining",
  "Snowing",
  "Thunderstorm",
  "Foggy",
  ];

minTemp = 0;
maxTemp = 101;

function generateWeather() {
  for (var i = 0; i < days.length; i++) {
    var weatherToday = weather[Math.floor(Math.random() * weather.length)];
    var tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
    document.getElementById("5DayWeather").innerHTML +=
      "<div id='" + days[i] + "' class='" + weatherToday + "'><b>Forecast for " + days[i] + 
      ":</b><br><br>" + weatherToday + " and " + tempToday + " degrees F.</div>";
  }
}

generateWeather();
