const Solutions = require('./solutions');
const Tadpole = require('./shape-tadpole');

let PatternGenerator = function(game) {
  this.game = game;
  this.smallCanvas = smallCanvas;
  let solutions = new Solutions();
  this.solutions = solutions;
};

PatternGenerator.prototype.createPattern = function(self, levelNumber) {
  let canvasLayout = this.canvasMatcher(levelNumber);
  let tadpoleIndex = createTadpoles(self, canvasLayout);
  return createShapeDetails(tadpoleIndex);
};

var createTadpoles = function(self, canvasLayout) {
  let tadpoleHolder = {};
  for(let key in canvasLayout) {
    let location = key;
    let constraints = canvasLayout[key];
    tadpoleHolder[location] = (new Tadpole(location, constraints, canvasLayout));
  }
  return tadpoleHolder;
};

var createShapeDetails = function(tadpoleIndex) {
  let arrayOfTileDetails = [];
  for(let key in tadpoleIndex) {
    let location = key;
    let tadpoleObject = tadpoleIndex[location];
    arrayOfTileDetails.push(tadpoleObject.finalDetails);
  }

  return arrayOfTileDetails;
};

var smallCanvas = {
  "D4": ["N", "U", "U", "N"],
  "E4": ["N", "U", "U", "U"],
  "F4": ["N", "U", "U", "U"],
  "G4": ["N", "N", "U", "U"],
  "D5": ["U", "U", "U", "N"],
  "E5": ["U", "U", "U", "U"],
  "F5": ["U", "U", "U", "U"],
  "G5": ["U", "N", "U", "U"],
  "D6": ["U", "U", "N", "N"],
  "E6": ["U", "U", "N", "U"],
  "F6": ["U", "U", "N", "U"],
  "G6": ["U", "N", "N", "U"]
};

PatternGenerator.prototype.canvasMatcher = function(levelNumber) {
  if(levelNumber <= 5) {
    return this.smallCanvas;
  } else {
    return this.smallCanvas;
  }
};

module.exports = PatternGenerator;