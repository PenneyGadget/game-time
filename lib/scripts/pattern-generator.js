const Solutions = require('./solutions');
const Tadpole = require('./tadpole');

let PatternGenerator = function(game) {
  this.game = game;
  this.smallCanvas = smallCanvas;
  let solutions = new Solutions();
  this.solutions = solutions;
};

PatternGenerator.prototype.createPattern = function(game, levelNumber) {
  let canvasLayout = this.canvasMatcher(levelNumber); // WORKS
  let tadpoleIndex = createTadpoles(game, canvasLayout, this);  // WORKS
  return createShapeDetails(tadpoleIndex); // SMELLS
};

// THIS WORKS
var createTadpoles = function(game, canvasLayout, self) {
  self.tadpoleHolder = {};  // WORKS
  for(let key in canvasLayout) {  // WORKS
    let location = key;
    let constraints = canvasLayout[key];
    self.tadpoleHolder[location] = (new Tadpole(location, constraints, canvasLayout, self));
  }
  return self.tadpoleHolder; // WORKS
};


var createShapeDetails = function(tadpoleIndex) {
  let arrayOfTileDetails = []; // WORKS
  for(let key in tadpoleIndex) {
    let location = key; // WORKS
    let tadpoleObject = tadpoleIndex[location]; // WORKS
    arrayOfTileDetails.push(tadpoleObject.finalDetails()); //SMELLS
  }

  return arrayOfTileDetails; // WORKS
};

var smallCanvas = { // WORKS
  "D4": ["n", "u", "u", "n"],
  "E4": ["n", "u", "u", "u"],
  "F4": ["n", "u", "u", "u"],
  "G4": ["n", "n", "u", "u"],
  "D5": ["u", "u", "u", "n"],
  "E5": ["u", "u", "u", "u"],
  "F5": ["u", "u", "u", "u"],
  "G5": ["u", "n", "u", "u"],
  "D6": ["u", "u", "n", "n"],
  "E6": ["u", "u", "n", "u"],
  "F6": ["u", "u", "n", "u"],
  "G6": ["u", "n", "n", "u"]
};

PatternGenerator.prototype.canvasMatcher = function(levelNumber) { // WORKS
  if(levelNumber <= 5) {
    return this.smallCanvas;
  } else {
    return this.smallCanvas;
  }
};

module.exports = PatternGenerator;