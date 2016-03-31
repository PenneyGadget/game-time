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
  this.renderSpoke(1, "left");
  this.renderSpoke(2, "right");
  var dis = this;

  $('#canvas').click(function (e) {
    let clickedX = e.pageX - this.offsetLeft;
    let clickedY = e.pageY - this.offsetTop;
    let location = findLocation(clickedX, clickedY);
    let oldOrientation = findOrientation[location];
    let newOrientation = rotations[oldOrientation];
    if(location != null) {
      dis.renderSpoke(location, newOrientation);
      findOrientation[location] = newOrientation;
      dis[location] = newOrientation;
    }
    if(youWon(dis)) {
      alert("You did it! Nice job!");
    }
  });
};

let youWon = function(dis) {
  var one = "right";
  var two  = "left";
  if(one == dis[1] && two == dis[2]) {
    return true;
  }
};

let findOrientation = {
  1: "left",
  2: "right"
};

let findLocation = function(clickedX, clickedY) {
  // verifies that user clicked on a live tile
  if(
    (clickedX < (xStartPoints[xStartPoints.length-1]) + 40) &&
    (clickedX > (xStartPoints[0])) &&
    (clickedY < (yStartPoints[yStartPoints.length-1]) + 40) &&
    (clickedY > (yStartPoints[0]))) {
      return getLocation(clickedX, clickedY);
    }
};



let getLocation = function(clickedX, clickedY) {
  // returns tile number of clicked piece
  var closestXOrigin = function() {
    var xRounded = 40 * Math.round(clickedX/40) - 20;
    var originX = xRounded > clickedX ? xRounded - 40 : xRounded;
    return originX;
  };

  var closestYOrigin = function() {
    var yRounded = 40 * Math.round(clickedY/40) - 20;
    var originY = yRounded > clickedY ? yRounded - 40 : yRounded;
    return originY;
  };
  return positionLocation(closestXOrigin(), closestYOrigin());
};

var positionLocation = function(x, y) {
  return positionLocationsByCoordinates[x][y];
};

const positionLocationsByCoordinates = {
  260: { 180: 1 },
  300: { 180: 2 }
};

const xStartPoints = [260, 300];
const yStartPoints = [180];

const positionLocations = {
    1: { 'x': 260, 'y': 180 },
    2: { 'x': 300, 'y': 180 }
};

const rotations = {
  "left": "top",
  "top": "right",
  "right": "bottom",
  "bottom": "left"
};

const cardinalDirections = ["left", "right", "top", "bottom"];

const lineLocations = {
  "top": [[20,0], [20,10]],
  "right": [[30,20], [40,20]],
  "bottom": [[20,30], [20,40]],
  "left": [[0,20], [10,20]]
};


Game.prototype.renderSpoke = function(location, position) {
  let startX = positionLocations[location].x;
  let startY = positionLocations[location].y;
  this.context.clearRect(startX, startY, 40, 40);
  this.context.strokeStyle = "#FFFFFF";
  this.context.beginPath();
  this.context.arc(startX+20, startY+20, 10, Math.PI * 0.0, Math.PI * 2.0, false);
  this.context.stroke();

  this.context.strokeStyle = "#FFFFFF";
  this.context.beginPath();
  this.context.moveTo(startX+lineLocations[position][0][0], startY+lineLocations[position][0][1]);
  this.context.lineTo(startX+lineLocations[position][1][0], startY+lineLocations[position][1][1]);
  this.context.stroke();
};

module.exports = Game;
