var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

// var x = canvas.width / 2;
// var y = canvas.height / 2;
// var radius = 75;
// var startAngle = 1.1 * Math.PI;
// var endAngle = 1.9 * Math.PI;
// var counterClockwise = false;

// left upper arc
context.strokeStyle = "#BFAF80";
context.beginPath();
context.arc(150, 150, 75, (Math.PI * 1.5), (Math.PI * 1.0), true);
context.stroke();

// right upper arc
context.beginPath();
context.arc(0, 150, 75, (Math.PI * 0.0), (Math.PI * 1.5), true);
context.stroke();

// right lower arc
context.beginPath();
context.arc(0, 0, 75, (Math.PI * 0.5), (Math.PI * 0.0), true);
context.stroke();

// left lower arc
context.beginPath();
context.arc(150, 0, 75, (Math.PI * 1.0), (Math.PI * 0.5), true);
context.stroke();


// // left upper arc
// context.strokeStyle = "#3370D4";
// context.beginPath();
// context.arc(200, 200, 75, Math.PI, (Math.PI * 1.5), false);
// context.lineWidth=10;
// context.stroke();
//
// // right upper arc
// context.beginPath();
// context.arc(200, 200, 75, 0, degreesToRadians(270), true);
// // context.stroke();
//
// // right lower arc
// context.beginPath();
// context.arc(200, 200, 75, 0, degreesToRadians(90), false);
// // context.stroke();
//
// // left lower arc
// context.beginPath();
// context.arc(200, 200, 75, Math.PI, (Math.PI * .5), true);
// // context.stroke();

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

context.fillRect(298, 248, 4, 4);
