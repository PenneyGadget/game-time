const $ = require('jquery');
const Renderer = require('./renderer');
const Spoke = require('./spoke');
const Arc = require('./arc');
const Line = require('./line');
const DoubleArc = require('./doublearc');
const QuadArc = require('./quadarc');
const Grid = require('./grid');
const Solutions = require('./solutions');
const Effects = require('./effects');

let Game = function(context, canvas) {
  this.context = context;
  this.width = canvas.width;
  this.height = canvas.height;
  this.context.lineWidth = 4;
  this.objectIndex = {};
  let renderer = new Renderer(this);
  this.renderer = renderer;
  let grid = new Grid();
  this.grid = grid;
  let solutions = new Solutions();
  this.solutions = solutions;
  let effects = new Effects();
  this.effects = effects;
  this.counter = 0;
};

Game.prototype.startGame = function() {
  this.effects.introSequence(this);
};

Game.prototype.setupLevel = function(levelNumber) {
  this.renderer.clearCanvas();
  this.counter = 0;
  let levelArrangements = this.solutions.arrangements();
  this.objectIndex = {};
  createTileObjects(this, levelArrangements[levelNumber]);
  renderAllShapes(this, this.objectIndex);
};

let renderAllShapes = function(self, objectIndex) {
  for(let key in objectIndex) {
    let tileNumber = self.objectIndex[key].tileNumber;
    let currentOrientation = self.objectIndex[key].currentOrientation;
    let shapeType = self.objectIndex[key].shapeType;

    self.renderer.renderTile(shapeType, tileNumber, currentOrientation);
  }
};

let createTileObjects = function(self, levelArrangement) {
  for(let i=0; i<levelArrangement.length; i++) {
    let location = levelArrangement[i][0];
    let orientation = levelArrangement[i][2] || "all";
    let shapeType = levelArrangement[i][1];

    switch (shapeType) {
      case "spoke":
        self.objectIndex[location] = (new Spoke(location, orientation));
        break;
      case "arc":
        self.objectIndex[location] = (new Arc(location, orientation));
        break;
      case "line":
        self.objectIndex[location] = (new Line(location, orientation));
        break;
      case "doubleArc":
        self.objectIndex[location] = (new DoubleArc(location, orientation));
        break;
      case "quadArc":
        self.objectIndex[location] = (new QuadArc(location, orientation));
        break;
    }
  }
};

Game.prototype.playLevel = function(levelNumber) {
  this.effects.setColorTheme();
  let self = this;
  this.setupLevel(levelNumber);

  $('#canvas').click(function(e) {
    if(firstClick(self)) { startTimer(self); }
    self.counter++;

    let clickedX = e.pageX - this.offsetLeft;
    let clickedY = e.pageY - this.offsetTop;
    let location = self.grid.findLocation(clickedX, clickedY);

    if(userClickedLiveTile(location, self)) { rotateTile(location, self); }

    if(youWon(self.objectIndex)) {
      let gameTime = getGameLength(self);
      $('canvas').off('click');
        setTimeout(function() {
          showWinStats(self, levelNumber, gameTime);
          $('canvas').click(function() {
            startNextLevel(self, levelNumber);
          });
        }, 300);
      }
    }
  );
};

let firstClick = function(self) {
  return self.counter === 0;
};

let startTimer = function(self) {
  self.startTime = (new Date()).getTime();
};

let userClickedLiveTile = function(location, self) {
  return location != null && self.objectIndex[location] != null;
};

let rotateTile = function(location, self) {
  let object = self.objectIndex[location];
  let oldOrientation = object.currentOrientation;
  let newOrientation = rotations[oldOrientation];
  let shapeType = object.shapeType;
  object.currentOrientation = newOrientation;
  self.renderer.renderTile(shapeType, location, newOrientation);
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

let getGameLength = function(self) {
  let endTime = (new Date()).getTime();
  return Math.floor((endTime - self.startTime)/1000);
};

let showWinStats = function(self, levelNumber, gameTime) {
  self.effects.flash();
  self.effects.levelStats(levelNumber, gameTime);
};

let startNextLevel = function(self, levelNumber) {
  self.effects.levelTransition(levelNumber);
  self.effects.flash();
  self.playLevel(levelNumber + 1);
};

const rotations = {
  "left": "top",
  "top": "right",
  "right": "bottom",
  "bottom": "left",
  "vertical": "horizontal",
  "horizontal": "vertical"
};

module.exports = Game;
