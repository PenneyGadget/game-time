let Solutions = function() {
  this.arrangements = arrangements;
};

var arrangements = function() {
  return [
    levelOneArrangement,
    levelTwoArrangement,
    levelThreeArrangement,
    levelFourArrangement,
    levelFiveArrangement,
    levelSixArrangement,
    levelSevenArrangement
  ];
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
];

let levelFourArrangement = [
  [1, "line", "horizontal"],
  [2, "arc", "top"],
  [3, "arc", "left"],
  [4, "arc", "right"],
  [5, "arc", "bottom"],
  [6, "line", "horizontal"],
  [7, "arc", "bottom"],
  [8, "arc", "left"],
  [9, "line", "horizontal"],
  [10, "arc", "top"],
  [11, "line", "vertical"],
  [12, "arc", "bottom"],
  [13, "arc", "left"],
  [14, "spoke", "left"],
  [15, "arc", "left"],
  [16, "arc", "top"],
  [17, "spoke", "right"],
  [18, "spoke", "left"],
  [19, "line", "vertical"],
  [20, "arc", "top"],
  [21, "line", "vertical"],
  [22, "arc", "right"],
  [23, "arc", "bottom"],
  [24, "arc", "top"],
  [25, "spoke", "right"],
  [26, "line", "horizontal"],
  [27, "arc", "right"],
  [28, "arc", "bottom"],
  [29, "line", "horizontal"],
  [30, "arc", "right"]
];

let levelFiveArrangement = [
  [ 1, "doubleArc", "left"],
  [ 2, "doubleArc", "right"],
  [ 3, "spoke", "bottom"],
  [ 4, "doubleArc", "right"],
  [ 5, "doubleArc", "left"],
  [ 6, "spoke", "bottom"],
  [ 7, "arc", "bottom"],
  [ 8, "arc", "right"],
  [ 9, "arc", "left"],
  [ 10, "doubleArc", "top"],
  [ 11, "doubleArc", "top"],
  [ 12, "arc", "top"],
  [ 15, "arc", "left"],
  [ 16, "arc", "top"],
  [ 26, "arc", "bottom"],
  [ 27, "line", "horizontal"],
  [ 28, "line", "horizontal"],
  [ 29, "arc", "right"]
];

let levelSixArrangement = [
  [ 1, "quadArc", ""],
  [ 2, "quadArc", ""],
  [ 3, "arc", "bottom"],
  [ 4, "quadArc", ""],
  [ 5, "quadArc", ""],
  [ 6, "quadArc", ""],
  [ 7, "spoke", "right"],
  [ 8, "quadArc", ""],
  [ 9, "arc", "left"],
  [ 10, "quadArc", ""],
  [ 11, "quadArc", ""],
  [ 12, "quadArc", ""],
  [ 14, "arc", "left"],
  [ 15, "doubleArc", "bottom"],
  [ 16, "doubleArc", "bottom"],
  [ 17, "doubleArc", "bottom"],
  [ 18, "arc", "top"],
  [ 20, "arc", "right"],
  [ 22, "spoke", "left"],
  [ 24, "arc", "top"],
  [ 26, "arc", "bottom"],
  [ 27, "doubleArc", "top"],
  [ 28, "doubleArc", "top"],
  [ 29, "doubleArc", "top"],
  [ 30, "arc", "right"]
];

let levelSevenArrangement = [
  [ 1, "spoke", "top"],
  [ 2, "spoke", "top"],
  [ 4, "doubleArc", "right"],
  [ 5, "doubleArc", "left"],
  [ 9, "spoke", "right"],
  [ 10, "arc", "top"],
  [ 11, "arc", "left"],
  [ 12, "spoke", "left"],
  [ 14, "spoke", "top"],
  [ 15, "line", "vertical"],
  [ 16, "line", "vertical"],
  [ 17, "spoke", "top"],
  [ 27, "spoke", "top"],
  [ 28, "spoke", "top"],
  [ 33, "arc", "left"],
  [ 34, "arc", "top"],
  [ 35, "arc", "left"],
  [ 36, "arc", "top"],
  [ 51, "spoke", "bottom"],
  [ 52, "arc", "left"],
  [ 53, "arc", "top"],
  [ 54, "spoke", "bottom"],
  [ 101, "arc", "bottom"],
  [ 102, "doubleArc", "top"],
  [ 103, "doubleArc", "top"],
  [ 104, "arc", "right"],
];

module.exports = Solutions;
