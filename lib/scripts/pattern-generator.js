const Solutions = require('./solutions');
const Tadpole = require('./tadpole');

let PatternGenerator = function(game) {
  this.game = game;
  this.smallCanvas = smallCanvas;
  let solutions = new Solutions();
  this.solutions = solutions;
};

PatternGenerator.prototype.createPattern = function(game, levelNumber) {
  let canvasLayout = this.canvasMatcher(levelNumber);
  let tadpoleIndex = createTadpoles(game, canvasLayout, this);
  return createShapeDetails(tadpoleIndex);
};

var createTadpoles = function(game, canvasLayout, self) {
  self.tadpoleHolder = {};
  for(let key in canvasLayout) {
    let location = key;
    let constraints = canvasLayout[key];
    self.tadpoleHolder[location] = (new Tadpole(location, constraints, canvasLayout, self));
  }
  return self.tadpoleHolder;
};


var createShapeDetails = function(tadpoleIndex) {
  let arrayOfTileDetails = [];
  for(let key in tadpoleIndex) {
    let location = key;
    let tadpoleObject = tadpoleIndex[location];
    arrayOfTileDetails.push(tadpoleObject.finalDetails());
  }

  return arrayOfTileDetails;
};

var smallCanvas = {
  "E4": ["n", "u", "u", "n"],
  "F4": ["n", "u", "u", "u"],
  "G4": ["n", "u", "u", "u"],
  "H4": ["n", "n", "u", "u"],
  "E5": ["u", "u", "u", "n"],
  "F5": ["u", "u", "u", "u"],
  "G5": ["u", "u", "u", "u"],
  "H5": ["u", "n", "u", "u"],
  "E6": ["u", "u", "n", "n"],
  "F6": ["u", "u", "n", "u"],
  "G6": ["u", "u", "n", "u"],
  "H6": ["u", "n", "n", "u"]
};

PatternGenerator.prototype.canvasMatcher = function(levelNumber) {
  if(levelNumber <= 5) {
    return this.smallCanvas;
  } else {
    return this.smallCanvas;
  }
};

module.exports = PatternGenerator;