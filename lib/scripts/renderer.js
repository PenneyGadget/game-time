let Renderer = function(game) {
  this.game = game;
  this.context = game.context;
};

Renderer.prototype.renderTile = function(shape, location, orientation) {
  if(shape === "spoke") {
    this.renderSpoke(location, orientation);
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
  this.context.moveTo(startX + this.game.lineLocations[orientation][0][0], startY + this.game.lineLocations[orientation][0][1]);
  this.context.lineTo(startX + this.game.lineLocations[orientation][1][0], startY + this.game.lineLocations[orientation][1][1]);
  this.context.stroke();
};

Renderer.prototype.findStartX = function(location) {
  return this.game.locationsIndex[location].x;
};

Renderer.prototype.findStartY = function(location) {
  return this.game.locationsIndex[location].y;
};

module.exports = Renderer;
