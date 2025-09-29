// Styling using Javascript
document.getElementById("lefteye").style.backgroundColor = "purple";

document.getElementById("head").style.transform = "rotate(-15deg)";

document.getElementById("body").style.border = "2px black solid";

document.getElementById("mouth").style.borderRadius = "4px";

document.getElementById("righteye").style.border = "4px yellow dotted";

document.getElementById("leftarm").style.backgroundColor = "Green";

document.getElementById("body").style.color = "#FF0000";

document.getElementById("head").style.borderTop = "5px black solid";

document.getElementById("nose").style.borderRadius = "100px";

document.getElementById("rightarm").style.backgroundColor = "Red";

document.getElementById("mouth").style.backgroundColor = "Pink";

// Animating the Robot
var rightEye = document.getElementById("righteye");
var leftEye = document.getElementById("lefteye");
var leftArm = document.getElementById("leftarm");

rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft)

function moveUpDown(e) {
  var robotPart = e.target;
  var top = 0;

  var id = setInterval(frame, 10)

  function frame() {
    robotPart.style.top = top + '%';
    top++;
    if (top === 20) {
      clearInterval(id);
    }
  }
}

function moveRightLeft(e) {
  var robotPart = e.target;
  var left = 0;

  var id = setInterval(frame, 10)

  function frame() {
    robotPart.style.left = left + '%';
    left++;
    if (left === 70) {
      clearInterval(id);
    }
  }
}