const Tiles = require('./tiles');

let Grid = function() {
  this.tiles = new Tiles();
};

Grid.prototype.findLocation = function(clickedX, clickedY) {
  // verifies that user clicked on a live tile
  let self = this;
  if(
    (clickedX < (xStartPoints[xStartPoints.length-1]) + 40) &&
    (clickedX > (xStartPoints[0])) &&
    (clickedY < (yStartPoints[yStartPoints.length-1]) + 40) &&
    (clickedY > (yStartPoints[0]))) {
      return getLocation(self, clickedX, clickedY);
    }
};

let getLocation = function(self, clickedX, clickedY) {
  // returns tile number of clicked piece
  let closestXOrigin = function() {
    let xRounded = 40 * Math.round(clickedX/40) - 20;
    let originX = xRounded > clickedX ? xRounded - 40 : xRounded;
    return originX;
  };

  let closestYOrigin = function() {
    let yRounded = 40 * Math.round(clickedY/40) - 20;
    let originY = yRounded > clickedY ? yRounded - 40 : yRounded;
    return originY;
  };
  return self.tiles.tileNumber(closestXOrigin(), closestYOrigin());
};

let xStartPoints = [60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500];
let yStartPoints = [20, 60, 100, 140, 180, 220, 260, 300, 340];

module.exports = Grid;
