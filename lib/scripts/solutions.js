let Solutions = function() {
  this.arrangements = arrangements;
};

var arrangements = function() {
  return [
    levelOneArrangement,
    levelTwoArrangement,
    levelThreeArrangement,
    levelFourArrangement
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

module.exports = Solutions;
