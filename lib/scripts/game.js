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
  var dis = this

  $('#canvas').click(function (e) {
    let clickedX = e.pageX - this.offsetLeft;
    let clickedY = e.pageY - this.offsetTop;
    let location = findLocation(clickedX, clickedY);
    let position = findPosition[location];
    dis.renderSpoke(location, rotations[position]);
  });
};

let findPosition = {
  1: "left",
  2: "right"
}

let findLocation = function(clickedX, clickedY) {
  if(
    (clickedX < (xStartPoints[xStartPoints.length-1]) + 40) &&
    (clickedX > (xStartPoints[0])) &&
    (clickedY < (yStartPoints[yStartPoints.length-1]) + 40) &&
    (clickedY > (yStartPoints[0]))) {
      return getLocation(clickedX, clickedY);
    };
        // debugger
        // var closestOrigin = function() {
        //   var xRounded = 40 * Math.round(clickedX/40);
          // var originX = xRounded > clickedX ? xRounded - 40 : xRounded;
          // return originX;
        // };
        // var closestYOrigin = function() {
        //   var yRounded = 40 * Math.round(clickedY/40);
        //   var originY = yRounded > clickedY ? yRounded - 40 : yRounded;
        //   return originY;
        // };

        // return positionLocationsByCoordinates[closestXOrigin][closestYOrigin];
      // };
};
      // rotatePiece(location);
// };


let getLocation = function(clickedX, clickedY) {
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
}

const lineLocations = {
  "top": [[20,0], [20,10]],
  "right": [[30,20], [40,20]],
  "bottom": [[20,30], [20,40]],
  "left": [[0,20], [10,20]]
};

// console.log(positionLocations[1].x);
// center is 300, 250
// LEVEL 1 - STARTING POSITION (SCRAMBLED)
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
