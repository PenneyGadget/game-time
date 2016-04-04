let assert = require('chai').assert;
const Line = require('../lib/scripts/line');

it('Spoke is a function', function() {
  assert.typeOf(Line, 'function');
});

describe('startingOrientation function chooses random starting direction', function() {
  it('it does NOT choose winningOrientation', function() {
    Array.prototype.sample = function(){
      return this[Math.floor(Math.random()*this.length)];
    };

    let line = new Line(1, "horizontal");
    assert.notEqual(line.currentOrientation, "horizontal");
  });
});
