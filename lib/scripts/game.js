const $ = require('jquery');
// const Spoke = require('./spoke');
const Renderer = require('./renderer');

let Game = function(context, canvas) {
  this.context = context;
  this.width = canvas.width;
  this.height = canvas.height;
  this.context.lineWidth = 4;
  this.locationsIndex = locationsIndex;
  this.spokeLineCoordinates = spokeLineCoordinates;
  let renderer = new Renderer(this);
  this.renderer = renderer;
  this.level = 0;
  // let spoke = new Spoke(this);
  // this.spoke = spoke;
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
  this.level = 1;
  this.renderer.renderTile("spoke", 1, "left");
  this.renderer.renderTile("spoke", 2, "right");
  var dis = this;

  $('#canvas').click(function (e) {
    let clickedX = e.pageX - this.offsetLeft;
    let clickedY = e.pageY - this.offsetTop;
    let location = findLocation(clickedX, clickedY);
    let oldOrientation = findOrientation[location];
    let newOrientation = rotations[oldOrientation];
    if(location != null) {
      dis.renderer.renderTile("spoke", location, newOrientation);
      findOrientation[location] = newOrientation;
      dis[location] = newOrientation;
    }
    if(youWon(dis)) {
      alert("You did it! Nice job!");
    }
  });
};

let youWon = function(dis) {
  var one = levelSolutions[dis.level][1];
  var two = levelSolutions[dis.level][2];
  if(one === dis[1] && two === dis[2]) {
    return true;
  }
};

let levelSolutions = {
  1: {
    1: "right",
    2: "left"
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

const locationsIndex = {
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

const spokeLineCoordinates = {
  "top": [[20,0], [20,10]],
  "right": [[30,20], [40,20]],
  "bottom": [[20,30], [20,40]],
  "left": [[0,20], [10,20]]
};

module.exports = Game;
