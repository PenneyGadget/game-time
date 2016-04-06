let shapeTadpole = function(location, constraints, canvasLayout) {
  this.location = location;
  this.top = constraints[0];
  this.right = constraints[1];
  this.bottom = constraints[2];
  this.left = constraints[3];
  this.nextTadpole = nextTadpole(location, canvasLayout);
  this.neighborTop =
  this.neighborRight =
  this.neighborBottom =
  this.neighborLeft =
  this.constraints = [this.top, this.right, this.bottom, this.left];
  this.finalDetails = "tbd";
};

var nextTadpole = function(location, canvasLayout) {
  let allLocations = Object.keys(canvasLayout).sort();
  let currentTadpoleIndex = allLocations.indexOf(location);
  let nextTadpole = allLocations[currentTadpoleIndex + 1];
  return nextTadpole;
};

ShapeTadpole.prototype.growUp = function() {
  var constraints = this.constraints;
  var shapeAndOrientation = findShapeAndOrientation(constraints); // [shape, orientation]
  setAdultDetails(this.location, shapeAndOrientation);
  updateNeighbors(dis);
};

var setAdultDetails = function(location, shapeAndOrientation) {
  this.finalDetails = [location, shapeAndOrientation[0], shapeAndOrientation[1]];
};

var updateNeighbors = function(this) {
  // Lookup the tadpole Object with location number
  // Update constraints based on the shape chosen.

  let myShape = this.finalDetails; 
  let topNeighborImpact = lookupImpact(myShape[1], myShape[2], side);
  let rightNeighborImpact = lookupImpact(myShape[1], myShape[2], side);
  let bottomNeighborImpact = lookupImpact(myShape[1], myShape[2], side);
  let leftNeighborImpact = lookupImpact(myShape[1], myShape[2], side);

  this.neighborTop.bottom = if(topNeighborImpact === "Y") "Y" : "N";
  this.neighborRight.left =
  this.neighborBottom.top =
  this.neighborLeft.right =

};

var findShapeAndOrientation = function(constraints) {
  topConstraintMatches = tileOptions["top"][constraints[0]];
  rightConstraintMatches = tileOptions["right"][constraints[1]];
  bottomConstraintMatches = tileOptions["bottom"][constraints[2]];
  leftConstraintMatches = tileOptions["left"][constraints[3]];

  matchAllConstraints = 1; // common elements across these four arrays

  return matchAllConstraints.sample();
};


module.exports = shapeTadpole;