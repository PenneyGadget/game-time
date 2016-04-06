const Solutions = require('./solutions');
const ShapeTadpole = require('./shape-tadpole');

let patternGenerator = function(game) {
  this.game = game;
  this.smallCanvas = smallCanvas;
  this.tadpoleHolder = tadpoleHolder;
  let solutions = new Solutions();
  this.solutions = solutions;
};

var createPattern = function(levelNumber) {
  let canvasLayout = canvasMatcher(levelNumber);
  createTadpoles(this, canvasLayout);
  turnTadpolesToShapes(this);
};

var createTadpoles = function(this, canvasLayout) {
  for(let key in canvasLayout) {
    let location = key;
    let constraints = canvasLayout[key];
    self.tadpoleHolder[location] = (new ShapeTadpole(location, constraints, canvasLayout));
  }
};

var turnTadpolesToShapes = function(this) {
  var tadpoles = this.tadpoleHolder;
  var topLeftTile = Object.keys(tadpoles).sort()[0];

  //ITERATE THROUGH THIS OF ALL TADPOLES, for each
  // SET FINAL DETAILS
  // PUSH FINAL DETAILS INTO THE SOLUTIONS.ARRANGEMENT HASH
  tadpoles[topLeftTadpole].growUp();
};

var tadpoleHolder = {};

var smallCanvas = [
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
];

var canvasMatcher = function(levelNumber) {
  if(levelNumber <= 5) {
    return this.smallCanvas;
  } else {
    return this.smallCanvas;
  }
};





module.exports = patternGenerator;