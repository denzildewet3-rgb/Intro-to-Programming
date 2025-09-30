// console.log(typeof 8);
// console.log(doTheMath = 7 + 8 + 36 + 18 +12);
// console.log(typeof doTheMath);
// console.log(typeof "the cat's favorite toy");
// console.log(typeof automobile);

// ========Working with Objects===========
var dreamCar = {
  make: "Toyota Land Cruiser",
  model: "83",
  color: "green",
  year: 1983,
  bodyStyle: "Offroad 4x4",
  price: 450000,
};

// alert("The type of dreamCar is: " + typeof dreamCar);

document.getElementById("priceTag").innerHTML = dreamCar.price;
document.getElementById("modelYear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML =
  dreamCar.make + " " + dreamCar.model;
