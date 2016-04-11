const Grid = require('./grid');

let Renderer = function(game) {
  this.game = game;
  this.context = game.context;
  this.spokeLineCoordinates = spokeLineCoordinates;
  this.lineCoordinates = lineCoordinates;
  this.doubleArcCoordinates = doubleArcCoordinates;
  this.grid = new Grid();
};

Renderer.prototype.renderTile = function(shape, location, orientation) {
  switch (shape) {
    case "spoke":
      this.renderSpoke(location, orientation);
      break;
    case "arc":
      this.renderArc(location, orientation);
      break;
    case "line":
      this.renderLine(location, orientation);
      break;
    case "doubleArc":
      this.renderDoubleArc(location, orientation);
      break;
    case "quadArc":
      this.renderQuadArc(location);
      break;
  }
};

Renderer.prototype.clearCanvas = function() {
  this.context.clearRect(0, 0, 600, 400);
};

Renderer.prototype.renderSpoke = function(location, orientation) {
  let startX = this.findStartX(location);
  let startY = this.findStartY(location);

  this.context.clearRect(startX, startY, 40, 40);
  this.context.strokeStyle = "#BFAF80";
  this.context.beginPath();
  this.context.arc(startX + 20, startY + 20, 10, 0, (Math.PI * 2.0), false);
  this.context.stroke();

  this.context.strokeStyle = "#BFAF80";
  this.context.beginPath();
  this.context.moveTo(startX + this.spokeLineCoordinates[orientation][0][0], startY + this.spokeLineCoordinates[orientation][0][1]);
  this.context.lineTo(startX + this.spokeLineCoordinates[orientation][1][0], startY + this.spokeLineCoordinates[orientation][1][1]);
  this.context.stroke();
};

Renderer.prototype.renderArc = function(location, orientation) {
  let startX = this.findStartX(location);
  let startY = this.findStartY(location);

  let radians = {
    "top": [0.0, 1.5],
    "right": [0.5, 0.0],
    "bottom": [1.0, 0.5],
    "left": [1.5, 1.0]
  };

  let startPoints = {
    "top": [0, 40],
    "right": [0, 0],
    "bottom": [40, 0],
    "left": [40, 40]
  };

  this.context.clearRect(startX, startY, 40, 40);
  this.context.strokeStyle = "#BFAF80";
  this.context.beginPath();
  this.context.arc(startX + startPoints[orientation][0], startY + startPoints[orientation][1], 20, (Math.PI * radians[orientation][0]), (Math.PI * radians[orientation][1]), true);
  this.context.stroke();
};

Renderer.prototype.renderLine = function(location, orientation) {
  let startX = this.findStartX(location);
  let startY = this.findStartY(location);

  this.context.clearRect(startX, startY, 40, 40);
  this.context.strokeStyle = "#BFAF80";
  this.context.beginPath();
  this.context.moveTo(startX + this.lineCoordinates[orientation][0][0], startY + this.lineCoordinates[orientation][0][1]);
  this.context.lineTo(startX + this.lineCoordinates[orientation][1][0], startY + this.lineCoordinates[orientation][1][1]);
  this.context.stroke();
};

Renderer.prototype.renderDoubleArc = function(location, orientation) {
  let startX = this.findStartX(location);
  let startY = this.findStartY(location);

  this.context.clearRect(startX, startY, 40, 40);
  this.context.strokeStyle = "#BFAF80";
  this.context.beginPath();
  this.context.arc(startX + this.doubleArcCoordinates[orientation][0][0], startY + this.doubleArcCoordinates[orientation][0][1], 20, (Math.PI * this.doubleArcCoordinates[orientation][0][2]), (Math.PI * this.doubleArcCoordinates[orientation][0][3]), false);
  this.context.stroke();

  this.context.beginPath();
  this.context.arc(startX + this.doubleArcCoordinates[orientation][1][0], startY + this.doubleArcCoordinates[orientation][1][1], 20, (Math.PI * this.doubleArcCoordinates[orientation][1][2]), (Math.PI * this.doubleArcCoordinates[orientation][1][3]), false);
  this.context.stroke();
};

Renderer.prototype.renderQuadArc = function(location) {
  let startX = this.findStartX(location);
  let startY = this.findStartY(location);

  this.context.clearRect(startX, startY, 40, 40);
  this.context.strokeStyle = "#BFAF80";
  this.context.beginPath();
  this.context.arc(startX, startY, 20, 0, (Math.PI * 0.5), false);
  this.context.stroke();
  this.context.beginPath();
  this.context.arc(startX + 40, startY, 20, (Math.PI * 0.5), Math.PI, false);
  this.context.stroke();
  this.context.beginPath();
  this.context.arc(startX + 40, startY + 40, 20, Math.PI, (Math.PI * 1.5), false);
  this.context.stroke();
  this.context.beginPath();
  this.context.arc(startX, startY + 40, 20, (Math.PI * 1.5), 0, false);
  this.context.stroke();
};

let doubleArcCoordinates = {
  "top": [[40, 0, 0.5, 1.0], [0, 0, 0, 0.5]],
  "right": [[40, 40, 1.0, 1.5], [40, 0, 0.5, 1.0]],
  "bottom": [[0, 40, 1.5, 0], [40, 40, 1.0, 1.5]],
  "left": [[0, 0, 0, 0.5], [0, 40, 1.5, 0]]
};

let spokeLineCoordinates = {
  "top": [[20,0], [20,10]],
  "right": [[30,20], [40,20]],
  "bottom": [[20,30], [20,40]],
  "left": [[0,20], [10,20]]
};

let lineCoordinates = {
  "vertical": [[20,0], [20,40]],
  "horizontal": [[0,20], [40,20]]
};

Renderer.prototype.findStartX = function(location) {
  return this.grid.tiles.tileIndex([location]).x;
};

Renderer.prototype.findStartY = function(location) {
  return this.grid.tiles.tileIndex([location]).y;
};

module.exports = Renderer;
