let Solutions = function() {
  this.levelOneArrangement = levelOneArrangement;
  this.levelTwoArrangement = levelTwoArrangement;
  this.arrangements = arrangements;
};

var arrangements = function() {
  return [levelOneArrangement, levelTwoArrangement, levelThreeArrangement]
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

let levelThreeArrangement = [
  [1, "arc", "bottom"],
  [2, "arc", "top"],
  [3, "arc", "left"],
  [4, "arc", "top"],
  [5, "spoke", "right"],
  [6, "arc", "top"],
  [7, "spoke", "top"],
  [8, "spoke", "top"],
  [9, "spoke", "right"],
  [10, "spoke", "left"],
  [11, "arc", "bottom"],
  [12, "spoke", "left"]
]

module.exports = Solutions;