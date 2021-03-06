let assert = require('chai').assert;
const Spoke = require('../lib/scripts/spoke');

it('Spoke is a function', function() {
  assert.typeOf(Spoke, 'function');
});

describe('startingOrientation function chooses random starting direction', function() {
  it('it does NOT choose winningOrientation', function() {
    Array.prototype.sample = function(){
      return this[Math.floor(Math.random()*this.length)];
    };

    let spoke = new Spoke(1, "bottom");
    assert.notEqual(spoke.currentOrientation, "bottom");
  });
});
