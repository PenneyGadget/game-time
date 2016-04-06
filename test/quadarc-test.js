let assert = require('chai').assert;
const QuadArc = require('../lib/scripts/quadarc');

it('quadArc is a function', function() {
  assert.typeOf(QuadArc, 'function');
});
