const $ = require('jquery');
const Renderer = require('./renderer');
const Spoke = require('./spoke');
const Arc = require('./arc');

let Game = function(context, canvas) {
  this.context = context;
  this.width = canvas.width;
  this.height = canvas.height;
  this.context.lineWidth = 4;
  this.locationsIndex = locationsIndex;
  this.spokeLineCoordinates = spokeLineCoordinates;
  this.objectIndex = objectIndex;
  this.tileNumber = tileNumber;
  let renderer = new Renderer(this);
  this.renderer = renderer;
};

let levelOneArrangement = [
  [1, "spoke", "right"],
  [2, "spoke", "left"]
];

let levelTwoArrangement = [
  [1, "arc", "bottom"],
  [2, "arc", "right"],
  [4, "arc", "left"],
  [5, "arc", "top"],
];

let objectIndex = {};

Game.prototype.startGame = function() {
  let self = this;
  $('canvas').hide();
  $('.start-game').click(function() {
    $('.start-game').toggle();
    $.fx.speeds.xslow = 3000;
    $('canvas').fadeIn('xslow');
    self.playLevel(0);
  });
};


Game.prototype.setupLevel = function(levelNumber) {
  let levelArrangements = [levelOneArrangement, levelTwoArrangement]
  createTileObjects(levelArrangements[levelNumber]);
  renderAllShapes(this, objectIndex);
}

let renderAllShapes = function(self, objectIndex) {
  for(let key in objectIndex) {
    let tileNumber = objectIndex[key].tileNumber
    let currentOrientation = objectIndex[key].currentOrientation
    let shapeType = objectIndex[key].shapeType

    self.renderer.renderTile(shapeType, tileNumber, currentOrientation);
  }
};

// let createTileObjects = function(levelArrangement) {
//   for(let i=0; i<levelArrangement.length; i++) {
//     let location = levelArrangement[i][0];
//     let orientation = levelArrangement[i][2];
//
//     if(levelArrangement[i][1] === "spoke") {
//       objectIndex[location] = (new Spoke(location, orientation));
//     }
//     if(levelArrangement[i][1] === "arc") {
//       objectIndex[location] = (new Arc(location, orientation));
//     }
//   }
// };

let createTileObjects = function(levelArrangement) {
  for(let i=0; i<levelArrangement.length; i++) {
    let location = levelArrangement[i][0];
    let orientation = levelArrangement[i][2];
    let shapeType = levelArrangement[i][1];

    switch (shapeType) {
      case "spoke":
        objectIndex[location] = (new Spoke(location, orientation));
        break;
      case "arc":
        objectIndex[location] = (new Arc(location, orientation));
        break;
    }
  }
};


Game.prototype.playLevel = function(levelNumber) {
  let self = this;
  self.setupLevel(levelNumber);

  $("button").click(function(){
      $("p").off("click");
  });

  $('#canvas').click(function (e) {
    let clickedX = e.pageX - this.offsetLeft;
    let clickedY = e.pageY - this.offsetTop;
    let location = findLocation(clickedX, clickedY);
    let object = self.objectIndex[location];
    let oldOrientation = object.currentOrientation;
    let newOrientation = rotations[oldOrientation];
    let shapeType = object.shapeType;
    if(location != null) {
      object.currentOrientation = newOrientation;
      self.renderer.renderTile(shapeType, location, newOrientation);
    }
    if(youWon(objectIndex)) {
      $("#canvas").off("click");
      alert("WooOoOoOHOOOoOOOO!");
      self.playLevel(levelNumber+1);
    }
  });
};


let youWon = function(objectIndex) {
  var keys = Object.keys(objectIndex);
  var values = keys.map(function(v) {
    return objectIndex[v] ;
  });

  var confirmTrue = function(object) {
    return object.currentOrientation === object.winningOrientation;
  };

  return values.every(confirmTrue);
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
  let closestXOrigin = function() {
    let xRounded = 40 * Math.round(clickedX/40) - 20;
    let originX = xRounded > clickedX ? xRounded - 40 : xRounded;
    return originX;
  };

  let closestYOrigin = function() {
    let yRounded = 40 * Math.round(clickedY/40) - 20;
    let originY = yRounded > clickedY ? yRounded - 40 : yRounded;
    return originY;
  };
  return tileNumber(closestXOrigin(), closestYOrigin());
};

let tileNumber = function(x, y) {
  let tilesByCoordinate = {
    260: { 180: 1, 140: 4 },
    300: { 180: 2, 140: 5 },
  };
  return tilesByCoordinate[x][y];
};

const xStartPoints = [220, 260, 300];
const yStartPoints = [140, 180];

const locationsIndex = {
    1: { 'x': 260, 'y': 180 },
    2: { 'x': 300, 'y': 180 },
    3: { 'x': 220, 'y': 140 },
    4: { 'x': 260, 'y': 140 },
    5: { 'x': 300, 'y': 140 },
};

const rotations = {
  "left": "top",
  "top": "right",
  "right": "bottom",
  "bottom": "left"
};

const spokeLineCoordinates = {
  "top": [[20,0], [20,10]],
  "right": [[30,20], [40,20]],
  "bottom": [[20,30], [20,40]],
  "left": [[0,20], [10,20]]
};

module.exports = Game;
