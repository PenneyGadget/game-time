let Spoke = function(tileNumber, orientation) {
  this.tileNumber = tileNumber;
  this.winningOrientation = orientation;
  this.currentOrientation = startingOrientation(this.winningOrientation);
  this.shapeType = "spoke";
  // this.game = game;
  // this.context = game.context;

};

const cardinalDirections = ["left", "right", "top", "bottom"];

let startingOrientation = function(winningOrientation) {
  let result = cardinalDirections.sample();
  if(result != winningOrientation) {
    return result ;
 } else {
    return startingOrientation(winningOrientation);
 }
};


module.exports = Spoke;
