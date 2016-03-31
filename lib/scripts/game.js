const $ = require('jquery');

let Game = function(context, canvas) {
  this.context = context;
  this.width = canvas.width;
  this.height = canvas.height;
  this.context.lineWidth = 4;
};

Game.prototype.startGame = function() {
  var dis = this;
  $('canvas').hide();
  $('.start-game').click(function() {
    $('.start-game').toggle();
    $.fx.speeds.xslow = 3000;
    $('canvas').fadeIn('xslow');
    dis.startLevelOne();
  });
};

Game.prototype.startLevelOne = function() {
  this.leftSpokeScramble(1);
  this.rightSpokeScramble(2);

  $('#canvas').click(function (e) {
    let clickedX = e.pageX - this.offsetLeft;
    let clickedY = e.pageY - this.offsetTop;

    checkIfClicked(clickedX, clickedY);
  });
};

let checkIfClicked = function(clickedX, clickedY) {
  if((clickedX < (xStartPoints[xStartPoints.length-1]) + 40) &&
     (clickedX > (xStartPoints[0])) &&
     (clickedY < (yStartPoints[yStartPoints.length-1]) + 40) &&
     (clickedY > (yStartPoints[0]))) {

      rotatePiece();
  }
};

let rotatePiece = function() {

};

// identify what tile is clicked
//   we do that by finding the closest, smallest x and y coordinates of tiles
// find what item is in that tile location.
//   leftSpokeScramble and rightSpokeScramble hold information
//     shape
//     position (top, bottom, left, right)
// update that tiles information, by changing the position
// rerender that tile on the canvas


const xStartPoints = [260, 300];
const yStartPoints = [180];

const positionLocations = {
    1: { 'x': 260, 'y': 180 },
    2: { 'x': 300, 'y': 180 }
};

const lineLocations = {
  "top": [[20,0], [20,10]],
  "right": [[30,20], [40,20]],
  "bottom": [[20,30], [20,40]],
  "left": [[0,20], [10,20]]
};

// console.log(positionLocations[1].x);
// center is 300, 250
// LEVEL 1 - STARTING POSITION (SCRAMBLED)
Game.prototype.leftSpokeScramble = function(location) {
  let startX = positionLocations[location].x;
  let startY = positionLocations[location].y;
  this.context.strokeStyle = "#FFFFFF";
  this.context.beginPath();
  this.context.arc(startX+20, startY+20, 10, Math.PI * 0.0, Math.PI * 2.0, false);
  this.context.stroke();

  this.context.strokeStyle = "#FFFFFF";
  this.context.beginPath();
  this.context.moveTo(startX+lineLocations.left[0][0], startY+lineLocations.left[0][1]);
  this.context.lineTo(startX+lineLocations.left[1][0], startY+lineLocations.left[1][1]);
  this.context.stroke();
};

Game.prototype.rightSpokeScramble = function(location) {
  let startX = positionLocations[location].x;
  let startY = positionLocations[location].y;
  this.context.strokeStyle = "#FFFFFF";
  this.context.beginPath();
  this.context.arc(startX+20, startY+20, 10, Math.PI * 0.0, Math.PI * 2.0, false);
  this.context.stroke();

  this.context.strokeStyle = "#FFFFFF";
  this.context.beginPath();
  this.context.moveTo(startX+lineLocations.right[0][0], startY+lineLocations.right[0][1]);
  this.context.lineTo(startX+lineLocations.right[1][0], startY+lineLocations.right[1][1]);
  this.context.stroke();
};

// LEVEL 1 - KEY (WINNING POSITION)
Game.prototype.leftSpokeSolved = function() {
  this.context.arc(240, 250, 30, Math.PI * 0.0, Math.PI * 2.0, false);
  this.context.moveTo(270, 250);
  this.context.lineTo(300, 250);
};

Game.prototype.rightSpokeSolved = function() {
  this.context.arc(360, 250, 30, Math.PI * 0.0, Math.PI * 2.0, false);
  this.context.moveTo(330, 250);
  this.context.lineTo(300, 250);
};

module.exports = Game;
