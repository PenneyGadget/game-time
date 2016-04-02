let Renderer = function(game) {
  this.game = game;
  this.context = game.context;
};

Renderer.prototype.renderTile = function(shape, location, orientation) {
  if(shape === "spoke") {
    this.renderSpoke(location, orientation);
  }
  if(shape === "arc") {
    this.renderArc(location, orientation);
  }
};

Renderer.prototype.renderSpoke = function(location, orientation) {
  let startX = this.findStartX(location);
  let startY = this.findStartY(location);

  this.context.clearRect(startX, startY, 40, 40);
  this.context.strokeStyle = "#FFFFFF";
  this.context.beginPath();
  this.context.arc(startX + 20, startY + 20, 10, Math.PI * 0.0, Math.PI * 2.0, false);
  this.context.stroke();

  this.context.strokeStyle = "#FFFFFF";
  this.context.beginPath();
  this.context.moveTo(startX + this.game.spokeLineCoordinates[orientation][0][0], startY + this.game.spokeLineCoordinates[orientation][0][1]);
  this.context.lineTo(startX + this.game.spokeLineCoordinates[orientation][1][0], startY + this.game.spokeLineCoordinates[orientation][1][1]);
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
    "left": [40, 40],
  };

  this.context.clearRect(startX, startY, 40, 40);
  this.context.strokeStyle = "#BFAF80";
  this.context.beginPath();
  this.context.arc(startX + startPoints[orientation][0], startY + startPoints[orientation][1], 20, (Math.PI * radians[orientation][0]), (Math.PI * radians[orientation][1]), true);
  this.context.stroke();
};

Renderer.prototype.findStartX = function(location) {
  return this.game.locationsIndex[location].x;
};

Renderer.prototype.findStartY = function(location) {
  return this.game.locationsIndex[location].y;
};

module.exports = Renderer;
