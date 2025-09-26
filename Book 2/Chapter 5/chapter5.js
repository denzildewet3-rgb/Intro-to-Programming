// document.getElementById("aboutMe").innerHTML = "This is <em>your</em> updated paragraph!";

var item1;
var item2;
var item3;

function newList() {
  item1 = prompt("Enter the new first thing:");
  item2 = prompt("Enter the new second thing:");
  item3 = prompt("Enter the new third thing:");
  updateList();
}

function updateList() {
  document.getElementById("firstThing").innerHTML = item1;
  document.getElementById("secondThing").innerHTML = item2;
  document.getElementById("thirdThing").innerHTML = item3;
}

document.getElementById("changeList").onclick = newList;
