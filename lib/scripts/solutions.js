let Solutions = function() {
  this.levelOneArrangement = levelOneArrangement;
  this.levelTwoArrangement = levelTwoArrangement;
  this.arrangements = arrangements;
};

var arrangements = function() {
  return [levelOneArrangement, levelTwoArrangement]
};

let levelOneArrangement = [
  [1, "spoke", "right"],
  [2, "spoke", "left"]
];

let levelTwoArrangement = [
  [1, "arc", "bottom"],
  [2, "arc", "right"],
  [4, "arc", "left"],
  [5, "arc", "top"],
];

module.exports = Solutions;