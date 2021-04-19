// setting vars
var brushColor = document.querySelector("input");
var whiteCanva = document.querySelector("canvas");
var brush = whiteCanva.getContext("2d");
var eraser = document.querySelector("button");

// create white canvas
function makeCanva() {
  brush.fillStyle = "white";
  brush.fillRect(0, 0, 600, 300);
}
makeCanva();

// drawing function
var draw = false;

function drawCircle(event) {
  if (draw) {
    var x = event.pageX - whiteCanva.offsetLeft;
    var y = event.pageY - whiteCanva.offsetTop;
    brush.fillStyle = brushColor.value;
    brush.beginPath();
    brush.arc(x, y, 10, 0, 2 * 3.14);
    brush.fill();
  }
}

whiteCanva.onmousemove = drawCircle;

// pressing mouse button
whiteCanva.onmousedown = function () {
  draw = true;
};

// without pressing mouse button
whiteCanva.onmouseup = function () {
  draw = false;
};

eraser.addEventListener("click", makeCanva);
