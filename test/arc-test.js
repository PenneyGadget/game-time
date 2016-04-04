let assert = require('chai').assert;
const Arc = require('../lib/scripts/arc');

it('Spoke is a function', function() {
  assert.typeOf(Arc, 'function');
});

describe('startingOrientation function chooses random starting direction', function() {
  it('it does NOT choose winningOrientation', function() {
    Array.prototype.sample = function(){
      return this[Math.floor(Math.random()*this.length)];
    };

    let arc = new Arc(1, "top");
    assert.notEqual(arc.currentOrientation, "top");
  });
});
