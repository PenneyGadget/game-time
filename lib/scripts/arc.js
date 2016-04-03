// ARC ORIENTATIONS:
// 12 o'clock - 3 === "top"
// 3 - 6 === "right"
// 6 - 9 === "bottom"
// 9 - 12 === "left"

let Arc = function(tileNumber, orientation) {
  this.tileNumber = tileNumber;
  this.winningOrientation = orientation;
  this.currentOrientation = startingOrientation(this.winningOrientation);
  this.shapeType = "arc";
};

const cardinalDirections = ["left", "right", "top", "bottom"];

let startingOrientation = function(winningOrientation) {
  let result = cardinalDirections.sample();
  if(result !== winningOrientation) {
    return result ;
 } else {
    return startingOrientation(winningOrientation);
 }
};

module.exports = Arc;
