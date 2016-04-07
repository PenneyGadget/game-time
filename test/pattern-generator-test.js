let assert = require('chai').assert;
const PatternGenerator = require('../lib/scripts/pattern-generator');

it('PatternGenerator is a function', function() {
  assert.typeOf(PatternGenerator, 'function');
});
