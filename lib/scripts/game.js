const Grid = require('./grid');
let grid = new Grid();
grid.positionLocations();

let Game = function(context, canvas) {
  this.context = context;
  this.width = canvas.width;
  this.height = canvas.height;
  this.context.lineWidth = 4;
  // this.locations = grid.positionsLocations();
};

Game.prototype.setUp = function() {
  function defineKeys {
    this.arrangement = {
      1: {
        "type": "spoke",
        "position": "right"
      },
      2: {
        "type": "spoke",
        "position": "left"
      };
    };
  };

  var keys = defineKeys

  var directions = ["top", "right", "bottom", "left"]

  function scrambleKeys {
    this.arrangmentScrambled = {
      1: {
        "type": "spoke",
        "position": directions.sample
      },
      2: {
        "type": "spoke",
        "position": directions.sample
      };
    };
  };

  function displayUnits {
    var spoke = function(x-start, y-start, position) {
      // circle
      this.context.strokeStyle = "#8C6954";
      this.context.beginPath();
      this.context.arc(x-start + 20, y-start + 20, 10, Math.PI * 0.0, Math.PI * 2.0, false);
      this.context.stroke();

      // line
      var lineLocations = {
        "top": [[20,0], [20,10]],
        "right": [[30,20], [40,20]],
        "bottom": [[20,30], [20,40]],
        "left": [[0,20], [10,20]]
      }

      this.context.strokeStyle = "#8C6954";
      this.context.beginPath();
      this.context.moveTo(lineLocations[position][0][0] + x-start, lineLocations[position][0][1]) + y-start;
      this.context.lineTo(lineLocations[position][1][0] + x-start, lineLocations[position][1][1] + y-start);
      this.context.stroke();
    };
  };

  this.arrangementScrambled.each do | key, value| {
    var x-start = grid.positionLocations[key]["x"]
    var y-start = grid.positionLocations[key]["y"]
    var type = value["type"]
    var position = value["position"]

    if type == "spoke" {
      spoke(x-start, y-start, position)
    } else {
    };
  };

  // LISTEN

  // We'll use the code example below to
    // grab the pageX and pageY of the events,
    // determine the closest corner ([180, 220, 260, 300, 340, 380], [100, 140, 180, 220, 260])
    // lookup the corresponding location number for those coordinates
    // lookup that location in arrangementScrambled
    // rotate that item in the arrangmentScrambled (bang! it)
    // displayUnits again
    // check if it matches the key
    // if it doesn't match, LISTEN
    // if it does match, trigger success event

  // $('#myCanvas').click(function (e) {
  //     var clickedX = e.pageX - this.offsetLeft;
  //     var clickedY = e.pageY - this.offsetTop;
  //
  //     for (var i = 0; i < circles.length; i++) {
  //         if (clickedX < circles[i].right && clickedX > circles[i].left && clickedY > circles[i].top && clickedY < circles[i].bottom) {
  //             alert ('clicked number ' + (i + 1));
  //         }
  //     }
  // });




};


// center is 300, 250
// LEVEL 1 - STARTING POSITION (SCRAMBLED)
// Game.prototype.leftSpokeScramble = function() {
//   this.context.strokeStyle = "#8C6954";
//   this.context.beginPath();
//   this.context.arc(240, 250, 30, Math.PI * 0.0, Math.PI * 2.0, false);
//   this.context.stroke();
//
//   this.context.strokeStyle = "#8C6954";
//   this.context.beginPath();
//   this.context.moveTo(210, 250);
//   this.context.lineTo(180, 250);
//   this.context.stroke();
// };
//
// Game.prototype.rightSpokeScramble = function() {
//   this.context.strokeStyle = "#8C6954";
//   this.context.beginPath();
//   this.context.arc(360, 250, 30, Math.PI * 0.0, Math.PI * 2.0, false);
//   this.context.stroke();
//
//   this.context.strokeStyle = "#8C6954";
//   this.context.beginPath();
//   this.context.moveTo(390, 250);
//   this.context.lineTo(420, 250);
//   this.context.stroke();
// };
//
// // LEVEL 1 - KEY (WINNING POSITION)
// Game.prototype.leftSpokeSolved = function() {
//   this.context.arc(240, 250, 30, Math.PI * 0.0, Math.PI * 2.0, false);
//   this.context.moveTo(270, 250);
//   this.context.lineTo(300, 250);
// };
//
// Game.prototype.rightSpokeSolved = function() {
//   this.context.arc(360, 250, 30, Math.PI * 0.0, Math.PI * 2.0, false);
//   this.context.moveTo(330, 250);
//   this.context.lineTo(300, 250);
// };

module.exports = Game;
