const Tadpole = require('./tadpole');

let PatternGenerator = function(game) {
  this.game = game;
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

var mediumCanvas = {
  "D3": ["n", "u", "u", "n"],
  "D4": ["u", "u", "u", "n"],
  "D5": ["u", "u", "u", "n"],
  "D6": ["u", "u", "u", "n"],
  "D7": ["u", "u", "n", "n"],
  "E3": ["n", "u", "u", "u"],
  "E4": ["u", "u", "u", "u"],
  "E5": ["u", "u", "u", "u"],
  "E6": ["u", "u", "u", "u"],
  "E7": ["u", "u", "n", "u"],
  "F3": ["n", "u", "u", "u"],
  "F4": ["u", "u", "u", "u"],
  "F5": ["u", "u", "u", "u"],
  "F6": ["u", "u", "u", "u"],
  "F7": ["u", "u", "n", "u"],
  "G3": ["n", "u", "u", "u"],
  "G4": ["u", "u", "u", "u"],
  "G5": ["u", "u", "u", "u"],
  "G6": ["u", "u", "u", "u"],
  "G7": ["u", "u", "n", "u"],
  "H3": ["n", "u", "u", "u"],
  "H4": ["u", "u", "u", "u"],
  "H5": ["u", "u", "u", "u"],
  "H6": ["u", "u", "u", "u"],
  "H7": ["u", "u", "n", "u"],
  "I3": ["n", "n", "u", "u"],
  "I4": ["u", "n", "u", "u"],
  "I5": ["u", "n", "u", "u"],
  "I6": ["u", "n", "u", "u"],
  "I7": ["u", "n", "n", "u"]
};

var largeCanvas = {
  "C2": ["n", "u", "u", "n"],
  "C3": ["u", "u", "u", "n"],
  "C4": ["u", "u", "u", "n"],
  "C5": ["u", "u", "u", "n"],
  "C6": ["u", "u", "u", "n"],
  "C7": ["u", "u", "u", "n"],
  "C8": ["u", "u", "n", "n"],
  "D2": ["n", "u", "u", "u"],
  "D3": ["u", "u", "u", "u"],
  "D4": ["u", "u", "u", "u"],
  "D5": ["u", "u", "u", "u"],
  "D6": ["u", "u", "u", "u"],
  "D7": ["u", "u", "u", "u"],
  "D8": ["u", "u", "n", "u"],
  "E2": ["n", "u", "u", "u"],
  "E3": ["u", "u", "u", "u"],
  "E4": ["u", "u", "u", "u"],
  "E5": ["u", "u", "u", "u"],
  "E6": ["u", "u", "u", "u"],
  "E7": ["u", "u", "u", "u"],
  "E8": ["u", "u", "n", "u"],
  "F2": ["n", "u", "u", "u"],
  "F3": ["u", "u", "u", "u"],
  "F4": ["u", "u", "u", "u"],
  "F5": ["u", "u", "u", "u"],
  "F6": ["u", "u", "u", "u"],
  "F7": ["u", "u", "u", "u"],
  "F8": ["u", "u", "n", "u"],
  "G2": ["n", "u", "u", "u"],
  "G3": ["u", "u", "u", "u"],
  "G4": ["u", "u", "u", "u"],
  "G5": ["u", "u", "u", "u"],
  "G6": ["u", "u", "u", "u"],
  "G7": ["u", "u", "u", "u"],
  "G8": ["u", "u", "n", "u"],
  "H2": ["n", "u", "u", "u"],
  "H3": ["u", "u", "u", "u"],
  "H4": ["u", "u", "u", "u"],
  "H5": ["u", "u", "u", "u"],
  "H6": ["u", "u", "u", "u"],
  "H7": ["u", "u", "u", "u"],
  "H8": ["u", "u", "n", "u"],
  "I2": ["n", "u", "u", "u"],
  "I3": ["u", "u", "u", "u"],
  "I4": ["u", "u", "u", "u"],
  "I5": ["u", "u", "u", "u"],
  "I6": ["u", "u", "u", "u"],
  "I7": ["u", "u", "u", "u"],
  "I8": ["u", "u", "n", "u"],
  "J2": ["n", "n", "u", "u"],
  "J3": ["u", "n", "u", "u"],
  "J4": ["u", "n", "u", "u"],
  "J5": ["u", "n", "u", "u"],
  "J6": ["u", "n", "u", "u"],
  "J7": ["u", "n", "u", "u"],
  "J8": ["u", "n", "n", "u"],
};

PatternGenerator.prototype.canvasMatcher = function(levelNumber) {
  if(levelNumber <= 3) {
    return smallCanvas;
  } else if(levelNumber >3 && levelNumber <= 10) {
    return mediumCanvas;
  } else {
    return largeCanvas;
  }
};

module.exports = PatternGenerator;