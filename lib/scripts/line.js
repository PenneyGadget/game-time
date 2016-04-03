let Line = function(tileNumber, orientation) {
  this.tileNumber = tileNumber;
  this.winningOrientation = orientation;
  this.currentOrientation = startingOrientation(orientation);
  this.shapeType = "line";
};

const cardinalDirections = ["horizontal", "vertical"];

let startingOrientation = function(winningOrientation) {
  let result = cardinalDirections.sample();
  if(result !== winningOrientation) {
    return result ;
 } else {
    return startingOrientation(winningOrientation);
 }
};

module.exports = Line;
