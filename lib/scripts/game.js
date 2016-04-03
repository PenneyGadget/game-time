const $ = require('jquery');
const Renderer = require('./renderer');
const Spoke = require('./spoke');
const Arc = require('./arc');
const Grid = require('./grid');

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
  let grid = new Grid();
  this.grid = grid
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
    let location = self.grid.findLocation(clickedX, clickedY);
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
