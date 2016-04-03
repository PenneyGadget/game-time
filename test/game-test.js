let assert = require('chai').assert;
const Game = require('../lib/scripts/game');

it('Game is a function', function() {
  assert.typeOf(Game, 'function');
});
