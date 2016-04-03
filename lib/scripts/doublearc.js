let doubleArc = function(tileNumber, orientation) {
  this.tileNumber = tileNumber;
  this.winningOrientation = orientation;
  this.currentOrientation = startingOrientation(orientation);
  this.shapeType = "doubleArc";
};

const cardinalDirections = ["top", "right", "bottom", "left"];

let startingOrientation = function(winningOrientation) {
  let result = cardinalDirections.sample();
  if(result !== winningOrientation) {
    return result ;
 } else {
    return startingOrientation(winningOrientation);
 }
};

module.exports = doubleArc;
