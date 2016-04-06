let assert = require('chai').assert;
const PatternGenerator = require('../lib/scripts/pattern-generator');

it('canvasMatcher returns canvas hash', function() {
  let patternGenerator = new PatternGenerator();
  let smallCanvas = {
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
  };

  assert.equal(smallCanvas, patternGenerator.canvasMatcher(1));
});
