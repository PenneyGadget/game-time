const Game = require('./game');

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let game = new Game(context, canvas);

canvas.onselectstart = function () { return false; };

game.startGame();

Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
};
