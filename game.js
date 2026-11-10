var DOT_RADIUS = 6;
var DOT_DIAMETER = DOT_RADIUS * 2;
var DOT_SPACING = 45;
var GRID_PADDING = DOT_SPACING / 2;
var MOUSE_DISTANCE = 15;

let dotArray = [];
let squaresArray = [];
let linksArray = [];
let origin = null;
let colours = { p1: null, p2: null };
let turn = 'p1';
let scores = { p1: 0, p2: 0 };

const c = document.querySelector('canvas');
var ctx = c.getContext('2d');

function Dot(x, y, radius, gx, gy) { 
  this.x = x; 
  this.y = y; 
  this.radius = radius; 
  this.gx = gx; 
  this.gy = gy; 
  this.draw = function() { 
    ctx.beginPath(); 
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); 
    ctx.fillStyle = 'white'; 
    ctx.fill(); 
  }
}


function drawDots() {
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      dotArray.push(new Dot(
		  i * DOT_SPACING + (GRID_PADDING + DOT_RADIUS), 
		  j * DOT_SPACING + (GRID_PADDING + DOT_RADIUS), 
		  DOT_RADIUS, i, j
	  )
	}
  }
}
