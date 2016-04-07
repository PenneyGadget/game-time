const PatternGenerator = require('./pattern-generator');

let Tadpole = function(location, constraints, canvasLayout, patternGenerator) {
  this.patternGenerator = patternGenerator;
  this.location = location;
  this.top = constraints[0];
  this.right = constraints[1];
  this.bottom = constraints[2];
  this.left = constraints[3];
  this.canvasLayout = canvasLayout;
  this.neighborTop = findNeighbor(location, "top", canvasLayout);
  this.neighborRight = findNeighbor(location, "right", canvasLayout);
  this.neighborBottom = findNeighbor(location, "bottom", canvasLayout);
  this.neighborLeft = findNeighbor(location, "left", canvasLayout);
};

Tadpole.prototype.finalDetails = function() {
  var constraints = [this.top, this.right, this.bottom, this.left]; // WORKS
  this.setShapeAndOrientation(constraints); // WORKS
  updateNeighbors(this);
  let location = this.location;
  let shape = this.shape;
  let orientation = this.orientation;
  return [location, shape, orientation];
};

var findNeighbor = function(location, neighborRelativeLocation, canvasLayout) {
  let currentCanvas = Object.keys(canvasLayout);
  let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
  let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let myLetter = location.charAt(0);
  let myNumber = location.charAt(1);
  let neighbors = {
    "top": (myLetter + numbers[numbers.indexOf(myNumber) - 1]),
    "right": (letters[letters.indexOf(myLetter) + 1] + myNumber),
    "bottom": (myLetter + numbers[numbers.indexOf(myNumber) + 1]),
    "left": (letters[letters.indexOf(myLetter) - 1] + myNumber)
  };
  if(currentCanvas.indexOf(neighbors[neighborRelativeLocation])>-1) {
    return neighbors[neighborRelativeLocation];
  }
};

var updateNeighbors = function(self) {
  let topNeighborImpact = lookupImpact(self, self.shape, self.orientation, "top");
  let rightNeighborImpact = lookupImpact(self, self.shape, self.orientation, "right");
  let bottomNeighborImpact = lookupImpact(self, self.shape, self.orientation, "bottom");
  let leftNeighborImpact = lookupImpact(self, self.shape, self.orientation, "left");
  if(self.neighborTop) {
    self.patternGenerator.tadpoleHolder[self.neighborTop].bottom = topNeighborImpact;
  }
  if(self.neighborRight) {
    self.patternGenerator.tadpoleHolder[self.neighborRight].left = rightNeighborImpact;  // SMELLS
  }
  if(self.neighborBottom) {
    self.patternGenerator.tadpoleHolder[self.neighborBottom].top = bottomNeighborImpact;
  }
  if(self.neighborLeft) {
    self.patternGenerator.tadpoleHolder[self.neighborLeft].right = leftNeighborImpact;
  }
};

let lookupImpact = function(self, shape, orientation, side) {
  let impacts = {
    "spoke": {
      "top": {"top": "y"},
      "right": {"right":"y"},
      "bottom":{"bottom":"y"},
      "left":{"left":"y"}
    },
    "arc": {
      "top": {"bottom": "y", "left": "y"},
      "right": {"top": "y", "left": "y"},
      "bottom": {"top": "y", "right": "y"},
      "left": {"right": "y", "bottom": "y"}
      },
    "line": {
      "horizontal": {"right": "y", "left": "y"},
      "vertical": {"top": "y", "bottom": "y"}
      },
    "doubleArc": {
      "top": { "top": "y", "right": "y", "left": "y"},
      "right": { "top":"y", "right": "y", "bottom": "y"},
      "bottom": { "right": "y", "bottom": "y", "left": "y" },
      "left": { "top":"y", "bottom": "y", "left": "y"}
    },
    "quadArc": {
      "all": { "top": "y", "right": "y", "bottom": "y", "left": "y" }
    }
  };
  if(impacts[shape][orientation][side]) {
    return impacts[shape][orientation][side];
  } else {
    return "n";
  }
};

Tadpole.prototype.setShapeAndOrientation = function(constraints) {
  let topMatches = tileOptions["top"][constraints[0]];  // WORKS 80%
  let rightMatches = tileOptions["right"][constraints[1]]; // WORKS 80%
  let bottomMatches = tileOptions["bottom"][constraints[2]]; // WORKS 80%
  let leftMatches = tileOptions["left"][constraints[3]]; // WORKS 80%
  let allOptionsWithDuplicates = topMatches.concat(rightMatches).concat(bottomMatches).concat(leftMatches); // WORKS 80%

  let objectsMeetingConditions = meetsAllConditions(allOptionsWithDuplicates); // WORKS 80%
  let shapeAndOrientation = objectsMeetingConditions.sample(); // WORKS

  if(shapeAndOrientation) {
    this.shape = shapeAndOrientation.split(",")[0]; // WORKS
    this.orientation = shapeAndOrientation.split(",")[1]; // WORKS
  }
};

let meetsAllConditions = function(allOptionsWithDuplicates) {
  let occurrences = {};
  let matches = [];
  for(let i=0; i<allOptionsWithDuplicates.length; i++) {
    if(occurrences[allOptionsWithDuplicates[i]] != null) {
      occurrences[allOptionsWithDuplicates[i]] = occurrences[allOptionsWithDuplicates[i]] + 1;
    } else {
      occurrences[allOptionsWithDuplicates[i]] = "1";
    }
  }

  for(let key in occurrences) {
    if(occurrences[key] === "1111") {
      matches.push(key);
    }
  }

  return matches;
};


let allOptions = [
  ["spoke", "top"],["spoke", "right"],["spoke", "bottom"],["spoke", "left"],["arc", "top"],["arc", "right"],["arc", "bottom"],["arc", "left"],["line", "horizontal"],["line", "vertical"],["doubleArc", "top"],["doubleArc", "right"],["doubleArc", "bottom"],["doubleArc", "left"],["quadArc", "all"]
];

let tileOptions = {
  "top": { "y": [["spoke", "top"],["arc", "right"],["arc", "bottom"],["line", "vertical"],["doubleArc", "top"],["doubleArc", "right"],["doubleArc", "left"],["quadArc", "all"]], "n": [["spoke", "right"],["spoke", "bottom"],["spoke", "left"],["arc", "top"],["arc", "left"],["line", "horizontal"],["doubleArc", "bottom"]], "u": allOptions },
  "right": { "y": [["spoke", "right"],["arc", "bottom"],["arc", "left"],["line", "horizontal"],["doubleArc", "top"],["doubleArc", "right"],["doubleArc", "bottom"],["quadArc", "all"]], "n": [["spoke", "top"],["spoke", "bottom"],["spoke", "left"],["arc", "top"],["arc", "right"],["line", "vertical"],["doubleArc", "left"]], "u": allOptions },
  "bottom": { "y": [["spoke", "bottom"],["arc", "top"],["arc", "left"],["line", "vertical"],["doubleArc", "right"],["doubleArc", "bottom"],["doubleArc", "left"],["quadArc", "all"]], "n": [["spoke", "top"],["spoke", "right"],["spoke", "left"],["arc", "right"],["arc", "bottom"],["line", "horizontal"],["doubleArc", "top"]], "u": allOptions },
  "left": { "y": [["spoke", "left"],["arc", "top"],["arc", "right"],["line", "horizontal"],["doubleArc", "top"],["doubleArc", "bottom"],["doubleArc", "left"],["quadArc", "all"]], "n": [["spoke", "top"],["spoke", "right"],["spoke", "bottom"],["arc", "bottom"],["arc", "left"],["line", "vertical"],["doubleArc", "right"]], "u": allOptions }
};

module.exports = Tadpole;