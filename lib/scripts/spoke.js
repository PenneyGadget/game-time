let Spoke = function(game) {
  this.game = game;
  this.context = game.context;
};

Spoke.prototype.renderSpoke = function(location, position) {
  let startX = this.game.positionLocations[location].x;
  let startY = this.game.positionLocations[location].y;
  this.context.clearRect(startX, startY, 40, 40);
  this.context.strokeStyle = "#FFFFFF";
  this.context.beginPath();
  this.context.arc(startX + 20, startY + 20, 10, Math.PI * 0.0, Math.PI * 2.0, false);
  this.context.stroke();

  this.context.strokeStyle = "#FFFFFF";
  this.context.beginPath();
  this.context.moveTo(startX + this.game.lineLocations[position][0][0], startY + this.game.lineLocations[position][0][1]);
  this.context.lineTo(startX + this.game.lineLocations[position][1][0], startY + this.game.lineLocations[position][1][1]);
  this.context.stroke();
};

module.exports = Spoke;
