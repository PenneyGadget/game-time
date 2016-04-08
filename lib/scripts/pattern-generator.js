const Tadpole = require('./tadpole');
const CanvasParameters = require('./canvas-parameters');

let PatternGenerator = function(game) {
  this.game = game;
};

PatternGenerator.prototype.createPattern = function(game, levelNumber) {
  let canvasLayout = this.canvasMatcher(levelNumber);
  let tadpoleIndex = createTadpoles(game, canvasLayout, this);
  return createShapeDetails(tadpoleIndex);
};

let createTadpoles = function(game, canvasLayout, self) {
  self.tadpoleHolder = {};
  for(let key in canvasLayout) {
    let location = key;
    let constraints = canvasLayout[key];
    self.tadpoleHolder[location] = (new Tadpole(location, constraints, canvasLayout, self));
  }
  return self.tadpoleHolder;
};

let createShapeDetails = function(tadpoleIndex) {
  let arrayOfTileDetails = [];
  for(let key in tadpoleIndex) {
    let location = key;
    let tadpoleObject = tadpoleIndex[location];
    let tC = tadpoleObject.shapeConstraints();
    if(tC[0] === "n" && tC[1] === "n" && tC[2] === "n" && tC[3] === "n") {
    } else {
      arrayOfTileDetails.push(tadpoleObject.finalDetails());
    }
  }
  return arrayOfTileDetails;
};

PatternGenerator.prototype.canvasMatcher = function(levelNumber) {
  if(levelNumber <= 10) {
    return new CanvasParameters("small");
  } else if(levelNumber > 10 && levelNumber <= 15) {
    return new CanvasParameters("medium");
  } else {
    return new CanvasParameters("large");
  }
};

module.exports = PatternGenerator;
