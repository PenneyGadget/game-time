let Spoke = function(tileNumber, orientation) {
  this.tileNumber = tileNumber;
  this.winningOrientation = orientation;
  this.currentOrientation = cardinalDirections.sample;
  this.shapeType = "spoke";
  // this.game = game;
  // this.context = game.context;

};


const cardinalDirections = ["left", "right", "top", "bottom"];


module.exports = Spoke;
