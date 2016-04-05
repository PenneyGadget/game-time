const $ = require('jquery');
let Effects = function() {};

let canvasColors = ['#59323C', '#320132', '#8E3F25', '#443B22', '#1E280B', '#4D3933'];

let colorPairs = { '#59323C': '#8C6954',
                   '#320132': '#E9E9FB',
                   '#8E3F25': '#FFCE99',
                   '#443B22': '#DEE7CB',
                   '#1E280B': '#A6B597',
                   '#4D3933': '#997266' };

Effects.prototype.setColorTheme = function() {
  let randomColor = canvasColors[Math.floor(Math.random() * canvasColors.length)];
  $('canvas').css('background-color', randomColor);
  $('body').css('background-color', colorPairs[randomColor]);
};

Effects.prototype.flash = function() {
  $('canvas').toggle();
  $.fx.speeds.xslow = 3000;
  $('canvas').fadeIn('xslow');
  $('canvas').off('click');
};

module.exports = Effects;
