let Tadpole = function(location, constraints, canvasLayout) {
  this.location = location;
  this.top = constraints[0];
  this.right = constraints[1];
  this.bottom = constraints[2];
  this.left = constraints[3];
  this.neighborTop = 1; // need to find location of its neighbors
  this.neighborRight = 1;
  this.neighborBottom = 1;
  this.neighborLeft = 1;
  this.constraints = [this.top, this.right, this.bottom, this.left];
  this.finalDetails = this.finalDetails();
  // this.tileOptions = tileOptions;
};

Tadpole.prototype.finalDetails = function() {
  var constraints = this.constraints;
  var shapeAndOrientation = findShapeAndOrientation(constraints); // [shape, orientation]
  updateNeighbors(this);
  return [this.location, shapeAndOrientation[0], shapeAndOrientation[1]];
};

var updateNeighbors = function(this) {
  let myShape = this.finalDetails;
  let topNeighborImpact = lookupImpact(myShape[1], myShape[2], "bottom");
  let rightNeighborImpact = lookupImpact(myShape[1], myShape[2], "left");
  let bottomNeighborImpact = lookupImpact(myShape[1], myShape[2], "top");
  let leftNeighborImpact = lookupImpact(myShape[1], myShape[2], "right");

  this.neighborTop.bottom = topNeighborImpact;
  this.neighborRight.left = rightNeighborImpact;
  this.neighborBottom.top = bottomNeighborImpact;
  this.neighborLeft.right = leftNeighborImpact;
};

let lookupImpact = function(shape, orientation, side) {
  // this will be an index, must return Y (if this shape has a line connecting to that side), N (no line connecting to that side)
}

var findShapeAndOrientation = function(constraints) {
  let topConstraintMatches = tileOptions["top"][constraints[0]];
  let rightConstraintMatches = tileOptions["right"][constraints[1];
  let bottomConstraintMatches = tileOptions["bottom"][constraints[2];
  let leftConstraintMatches = tileOptions["left"][constraints[3];

  let matchAllConstraints = 1; // common elements across these four arrays

  return matchAllConstraints.sample();
};

let tileOptions = {
  "top": {"n": [], "u": tileOptions["all"], "y": [["spoke", "top"],["arc", "right"],["arc", "bottom"],["line", "vertical"],["doubleArc", "top"],["doubleArc", "right"],["doubleArc", "left"],["quadArc", "all"]]},
  "right": [["spoke", "right"],["arc", "bottom"],["arc", "left"],["line", "horizontal"],["doubleArc", "top"],["doubleArc", "right"],["doubleArc", "bottom"],["quadArc", "all"]],
  "bottom": [["spoke", "bottom"],["arc", "top"],["arc", "left"],["line", "vertical"],["doubleArc", "right"],["doubleArc", "bottom"],["doubleArc", "left"],["quadArc", "all"]],
  "left": [["spoke", "left"],["arc", "top"],["arc", "right"],["line", "horizontal"],["doubleArc", "top"],["doubleArc", "bottom"],["doubleArc", "left"],["quadArc", "all"]],
  "all": [["spoke", "top"],["spoke", "right"],["spoke", "bottom"],["spoke", "left"],["arc", "top"],["arc", "right"],["arc", "bottom"],["arc", "left"],["line", "horizontal"],["line", "vertical"],["doubleArc", "top"],["doubleArc", "right"],["doubleArc", "bottom"],["doubleArc", "left"],["quadArc", "all"]]
};



module.exports = Tadpole;