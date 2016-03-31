const Game = require('./game');

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let game = new Game(context, canvas);

game.startGame();

// LEVEL 1
// game.leftSpokeScramble();
// game.rightSpokeScramble();




// function centerPoint() {
//   context.fillRect(298, 248, 4, 4);
// }
//
// centerPoint();


Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
};