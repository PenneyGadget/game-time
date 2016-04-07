const PatternGenerator = require('./pattern-generator');

let Solutions = function(game) {
  this.game = game;
  let patternGenerator = new PatternGenerator();
  this.patternGenerator = patternGenerator;
};

Solutions.prototype.setArrangement = function(levelNumber) {
  if (levelNumber === 0 ) { return levelOneArrangement; }
  if (levelNumber === 1 ) { return levelTwoArrangement; }
  if (levelNumber === 2 ) { return levelThreeArrangement; }
  if (levelNumber === 3 ) { return levelFourArrangement; }
  if (levelNumber === 4 ) { return levelFiveArrangement; }
  if (levelNumber === 5 ) { return levelSixArrangement; }
  if (levelNumber === 6 ) { return levelSevenArrangement; }
  if (levelNumber > 1 ) { return this.patternGenerator.createPattern(this.game, levelNumber); }
};

let levelOneArrangement = [
  ["F5", "spoke", "right"],
  ["G5", "spoke", "left"]
];

let levelTwoArrangement = [
  ["F5", "arc", "bottom"],
  ["G5", "arc", "right"],
  ["F4", "arc", "left"],
  ["G4", "arc", "top"],
];

let levelThreeArrangement = [
  ["F5", "arc", "bottom"],
  ["G5", "arc", "top"],
  ["E4", "arc", "left"],
  ["F4", "arc", "top"],
  ["G4", "spoke", "right"],
  ["H4", "arc", "top"],
  ["E5", "spoke", "top"],
  ["H5", "spoke", "top"],
  ["E6", "spoke", "right"],
  ["F6", "spoke", "left"],
  ["G6", "arc", "bottom"],
  ["H6", "spoke", "left"]
];

let levelFourArrangement = [
  ["F5", "line", "horizontal"],
  ["G5", "arc", "top"],
  ["E4", "arc", "left"],
  ["F4", "arc", "right"],
  ["G4", "arc", "bottom"],
  ["H4", "line", "horizontal"],
  ["E5", "arc", "bottom"],
  ["H5", "arc", "left"],
  ["E6", "line", "horizontal"],
  ["F6", "arc", "top"],
  ["G6", "line", "vertical"],
  ["H6", "arc", "bottom"],
  ["D3", "arc", "left"],
  ["E3", "spoke", "left"],
  ["F3", "arc", "left"],
  ["G3", "arc", "top"],
  ["H3", "spoke", "right"],
  ["I3", "spoke", "left"],
  ["D4", "line", "vertical"],
  ["I4", "arc", "top"],
  ["D5", "line", "vertical"],
  ["I5", "arc", "right"],
  ["D6", "arc", "bottom"],
  ["I6", "arc", "top"],
  ["D7", "spoke", "right"],
  ["E7", "line", "horizontal"],
  ["F7", "arc", "right"],
  ["G7", "arc", "bottom"],
  ["H7", "line", "horizontal"],
  ["I7", "arc", "right"]
];

let levelFiveArrangement = [
  ["F5", "doubleArc", "left"],
  ["G5", "doubleArc", "right"],
  ["E4", "spoke", "bottom"],
  ["F4", "doubleArc", "right"],
  ["G4", "doubleArc", "left"],
  ["H4", "spoke", "bottom"],
  ["E5", "arc", "bottom"],
  ["H5", "arc", "right"],
  ["E6", "arc", "left"],
  ["F6", "doubleArc", "top"],
  ["G6", "doubleArc", "top"],
  ["H6", "arc", "top"],
  ["F3", "arc", "left"],
  ["G3", "arc", "top"],
  ["E7", "arc", "bottom"],
  ["F7", "line", "horizontal"],
  ["G7", "line", "horizontal"],
  ["H7", "arc", "right"]
];

let levelSixArrangement = [
  ["F5", "quadArc", ""],
  ["G5", "quadArc", ""],
  ["E4", "arc", "bottom"],
  ["F4", "quadArc", ""],
  ["G4", "quadArc", ""],
  ["H4", "quadArc", ""],
  ["E5", "spoke", "right"],
  ["H5", "quadArc", ""],
  ["E6", "arc", "left"],
  ["F6", "quadArc", ""],
  ["G6", "quadArc", ""],
  ["H6", "quadArc", ""],
  ["E3", "arc", "left"],
  ["F3", "doubleArc", "bottom"],
  ["G3", "doubleArc", "bottom"],
  ["H3", "doubleArc", "bottom"],
  ["I3", "arc", "top"],
  ["I4", "arc", "right"],
  ["I5", "spoke", "left"],
  ["I6", "arc", "top"],
  ["E7", "arc", "bottom"],
  ["F7", "doubleArc", "top"],
  ["G7", "doubleArc", "top"],
  ["H7", "doubleArc", "top"],
  ["I7", "arc", "right"]
];

let levelSevenArrangement = [
  ["F5", "spoke", "top"],
  ["G5", "spoke", "top"],
  ["F4", "doubleArc", "right"],
  ["G4", "doubleArc", "left"],
  ["E6", "spoke", "right"],
  ["F6", "arc", "top"],
  ["G6", "arc", "left"],
  ["H6", "spoke", "left"],
  ["E3", "spoke", "top"],
  ["F3", "line", "vertical"],
  ["G3", "line", "vertical"],
  ["H3", "spoke", "top"],
  ["F7", "spoke", "top"],
  ["G7", "spoke", "top"],
  ["E2", "arc", "left"],
  ["F2", "arc", "top"],
  ["G2", "arc", "left"],
  ["H2", "arc", "top"],
  ["E8", "spoke", "bottom"],
  ["F8", "arc", "left"],
  ["G8", "arc", "top"],
  ["H8", "spoke", "bottom"],
  ["E9", "arc", "bottom"],
  ["F9", "doubleArc", "top"],
  ["G9", "doubleArc", "top"],
  ["H9", "arc", "right"],
];

module.exports = Solutions;
