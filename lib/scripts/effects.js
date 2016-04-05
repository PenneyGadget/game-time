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
  $('canvas').fadeIn(3000);
  $('canvas').off('click');
};

Effects.prototype.introSequence = function(self) {
  $('canvas').hide();
  $('.level-announcements').hide();
  $('.game-div').click(function() {
    $('.start').fadeOut(2000);
    $('.level-announcements').empty().append("#1");
    $('.level-announcements').delay(2000).fadeIn(2000);
    $('.level-announcements').fadeOut(2000);
    $('canvas').delay(6000).fadeIn(2000);
    $('.game-div').off('click');
    self.playLevel(0);
  });
};

Effects.prototype.levelTransition = function(levelNumber) {
  $('.game-div').append("<div class='level-announcements'></div>");
  $('.level-announcements').hide();
  $('.level-announcements').empty().append('#' + (levelNumber + 2));
  $('.game-canvas').fadeOut(2000);
  $('.level-announcements').fadeIn(2000);
  $('.level-announcements').fadeOut(2000);
  $('.game-canvas').fadeIn(2000);
};

module.exports = Effects;