let assert = require('chai').assert;
const Grid = require('../lib/scripts/grid');

it('Grid is a function', function() {
  assert.typeOf(Grid, 'function');
});

it('findLocation returns correct tile number of area clicked', function() {
  let clickedX = 194;
  let clickedY = 263;
  assert.equal("D7", Grid.prototype.findLocation(clickedX, clickedY));

  let clickedXTwo = 61;
  let clickedYTwo = 24;
  assert.equal("A1", Grid.prototype.findLocation(clickedXTwo, clickedYTwo));

  let clickedXThree = 341;
  let clickedYThree = 359;
  assert.equal("H9", Grid.prototype.findLocation(clickedXThree, clickedYThree));

  let clickedXFour = 261;
  let clickedYFour = 199;
  assert.equal("F5", Grid.prototype.findLocation(clickedXFour, clickedYFour));
});
