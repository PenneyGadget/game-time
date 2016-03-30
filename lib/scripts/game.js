const $ = require('jquery');

let Game = function(context, canvas) {
  this.context = context;
  this.width = canvas.width;
  this.height = canvas.height;
  this.context.lineWidth = 4;
};

Game.prototype.startGame = function() {
  var dis = this;
  $('canvas').hide();
  $('.start-game').click(function() {
    $('.start-game').toggle();
    $.fx.speeds.xslow = 3000;
    $('canvas').fadeIn('xslow');
    dis.startLevelOne();
  });
};

Game.prototype.startLevelOne = function() {
  // renders the shapes
  this.leftSpokeScramble();
  this.rightSpokeScramble();

  // listen for clicks
};

// center is 300, 250
// LEVEL 1 - STARTING POSITION (SCRAMBLED)
Game.prototype.leftSpokeScramble = function() {
  this.context.strokeStyle = "#FFFFFF";
  this.context.beginPath();
  this.context.arc(240, 250, 30, Math.PI * 0.0, Math.PI * 2.0, false);
  this.context.stroke();

  this.context.strokeStyle = "#FFFFFF";
  this.context.beginPath();
  this.context.moveTo(210, 250);
  this.context.lineTo(180, 250);
  this.context.stroke();
};

Game.prototype.rightSpokeScramble = function() {
  this.context.strokeStyle = "#FFFFFF";
  this.context.beginPath();
  this.context.arc(360, 250, 30, Math.PI * 0.0, Math.PI * 2.0, false);
  this.context.stroke();

  this.context.strokeStyle = "#FFFFFF";
  this.context.beginPath();
  this.context.moveTo(390, 250);
  this.context.lineTo(420, 250);
  this.context.stroke();
};

// LEVEL 1 - KEY (WINNING POSITION)
Game.prototype.leftSpokeSolved = function() {
  this.context.arc(240, 250, 30, Math.PI * 0.0, Math.PI * 2.0, false);
  this.context.moveTo(270, 250);
  this.context.lineTo(300, 250);
};

Game.prototype.rightSpokeSolved = function() {
  this.context.arc(360, 250, 30, Math.PI * 0.0, Math.PI * 2.0, false);
  this.context.moveTo(330, 250);
  this.context.lineTo(300, 250);
};

module.exports = Game;
