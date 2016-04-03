const $ = require('jquery');
const Renderer = require('./renderer');
const Spoke = require('./spoke');
const Arc = require('./arc');
const Grid = require('./grid');
const Solutions = require('./solutions');

let Game = function(context, canvas) {
  this.context = context;
  this.width = canvas.width;
  this.height = canvas.height;
  this.context.lineWidth = 4;
  this.objectIndex = objectIndex;
  let renderer = new Renderer(this);
  this.renderer = renderer;
  let grid = new Grid();
  this.grid = grid;
  let solutions = new Solutions();
  this.solutions = solutions;
};

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
  let levelArrangements = this.solutions.arrangements();
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

  // $("button").click(function(){
  //     $("p").off("click");
  // });

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

const rotations = {
  "left": "top",
  "top": "right",
  "right": "bottom",
  "bottom": "left"
};

module.exports = Game;
