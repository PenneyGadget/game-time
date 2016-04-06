let quadArc = function(tileNumber, orientation) {
  this.tileNumber = tileNumber;
  this.winningOrientation = orientation;
  this.currentOrientation = orientation;
  this.shapeType = "quadArc";
};

module.exports = quadArc;