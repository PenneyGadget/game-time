let Grid = function() {
  this.locationsIndex = locationsIndex;
};


Grid.prototype.findLocation = function(clickedX, clickedY) {
  // verifies that user clicked on a live tile
  if(
    (clickedX < (xStartPoints[xStartPoints.length-1]) + 40) &&
    (clickedX > (xStartPoints[0])) &&
    (clickedY < (yStartPoints[yStartPoints.length-1]) + 40) &&
    (clickedY > (yStartPoints[0]))) {
      return getLocation(clickedX, clickedY);
    }
};

let getLocation = function(clickedX, clickedY) {
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
  return tileNumber(closestXOrigin(), closestYOrigin());
};

const xStartPoints = [220, 260, 300];
const yStartPoints = [140, 180];

var tileNumber = function(x, y) {
  let tilesByCoordinate = {
    260: { 180: 1, 140: 4 },
    300: { 180: 2, 140: 5 },
  };
  return tilesByCoordinate[x][y];
};


const locationsIndex = {
    1: { 'x': 260, 'y': 180 },
    2: { 'x': 300, 'y': 180 },
    3: { 'x': 220, 'y': 140 },
    4: { 'x': 260, 'y': 140 },
    5: { 'x': 300, 'y': 140 },
};

Grid.prototype.positionLocations = function(position) {
  var locations = {
    1: { 'x': 260, 'y': 180 },
    2: { 'x': 300, 'y': 180 },
    3: { 'x': 220, 'y': 140 },
    4: { 'x': 260, 'y': 140 },
    5: { 'x': 300, 'y': 140 },
    6: { 'x': 340, 'y': 140 },
    7: { 'x': 220, 'y': 180 },
    8: { 'x': 340, 'y': 180 },
    9: { 'x': 220, 'y': 220 },
    10: { 'x': 260, 'y': 220 },
    11: { 'x': 300, 'y': 220 },
    12: { 'x': 340, 'y': 220 },
    13: { 'x': 180, 'y': 100 },
    14: { 'x': 220, 'y': 100 },
    15: { 'x': 260, 'y': 100 },
    16: { 'x': 300, 'y': 100 },
    17: { 'x': 340, 'y': 100 },
    18: { 'x': 380, 'y': 100 },
    19: { 'x': 180, 'y': 140 },
    20: { 'x': 380, 'y': 140 },
    21: { 'x': 180, 'y': 180 },
    22: { 'x': 380, 'y': 180 },
    23: { 'x': 180, 'y': 220 },
    24: { 'x': 380, 'y': 220 },
    25: { 'x': 180, 'y': 260 },
    26: { 'x': 220, 'y': 260 },
    27: { 'x': 260, 'y': 260 },
    28: { 'x': 300, 'y': 260 },
    29: { 'x': 340, 'y': 260 },
    30: { 'x': 380, 'y': 260 }
  };
  return locations
}

module.exports = Grid;