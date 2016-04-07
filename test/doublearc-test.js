let assert = require('chai').assert;
const DoubleArc = require('../lib/scripts/doublearc');

it('doubleArc is a function', function() {
  assert.typeOf(DoubleArc, 'function');
});

describe('startingOrientation function chooses random starting direction', function() {
  it('it does NOT choose winningOrientation', function() {
    Array.prototype.sample = function(){
      return this[Math.floor(Math.random()*this.length)];
    };

    let doubleArc = new DoubleArc(1, "top");
    assert.notEqual(doubleArc.currentOrientation, "top");
  });
});
