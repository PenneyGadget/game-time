let assert = require('chai').assert;
const Renderer = require('../lib/scripts/renderer');
const Game = require('../lib/scripts/game');

it('Spoke is a function', function() {
  assert.typeOf(Renderer, 'function');
});

it('findStartX function returns correct X coordinate for a tile', function() {
  let renderer = new Renderer(Game);
  assert.equal(260, renderer.findStartX(27));
  assert.equal(500, renderer.findStartX(108));
  assert.equal(60, renderer.findStartX(85));
});

it('findStartY function returns correct Y coordinate for a tile', function() {
  let renderer = new Renderer(Game);
  assert.equal(340, renderer.findStartY(99));
  assert.equal(180, renderer.findStartY(1));
  assert.equal(20, renderer.findStartY(68));
});
