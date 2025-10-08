// Listing 18.1
// var i = 0;
// while (i < 501) {
//     console.log(i + ": Hello, JavaScript!");
//     i++;
// }

// Listing 18.2
// var count = 10;
// while (count > 0) {
// alert(count);
// count--;
// }
// alert("Blast Off!");

// Listing 18.3
// var people = ["Denzil", "Carla", "Mary", "Suzen"];
// var i = 0
// while (people[i]) {
//     alert(people[i]);
//     i++;
// }

// declare globals
let money = 20;
let lunches = 0;

//display lunch budget
document.getElementById("money").innerHTML = money;

//listen for order
document.getElementById("placeOrder").addEventListener("click", buyLunches);

/* buys specified number of sandwiches per day at current prices */
/*
todo: 
* reset the form
* start a loop
* get daily sandwich order
* calculate total price
* figure out if there's enough money
* if so: subtract money, increment number of lunches, 
and start loop over
* if not: display 'out of money' message
* display total lunches after loop exits */
function buyLunches() {
  resetForm();
  var day = 0;

  while (money > 0) {
    var priceToday = getSandwichPrice();
    var numberOfSandwiches = document.getElementById("numSandwiches").value;
    var totalPrice = priceToday * numberOfSandwiches;

    if (money >= totalPrice) {
      money = money - totalPrice;
      day++;
      lunches++;
      document.getElementById("receipt").innerHTML +=
        "<p>On day " +
        day +
        ", sandwiches are: R " +
        priceToday +
        ". You have R " +
        money.toFixed(2) +
        " left.</p>";
    } else {
      document.getElementById("receipt").innerHTML +=
        "<p>Today, sandwhiches are: R " +
        priceToday +
        ". You don't have enough money. Maybe your sister will give you some of her sandwich.</p>";
      money = 0;
    };
  };

  document.getElementById("receipt").innerHTML +=
    "<p>You bought " + lunches + " lunches this week.</p>";
};

/*
gets the current price of sandwiches
*/
function getSandwichPrice() {
  let sandwichPrice = (Math.random() * (5 - 1) + 1).toFixed(2);
  return sandwichPrice;
}

/*
resets the game so that a new order can be placed
*/
function resetForm() {
  money = 20;
  lunches = 0;
  document.getElementById("receipt").innerHTML = "";
}
