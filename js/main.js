$(".introscroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#mbody").offset().top-30
    }, 1200);
});

$("a").attr("target", "_blank");


$('.xelec').click(function(){
$('.pitem').addClass("hidden");
$('.pitem').removeClass("pitema");
$('.elec').removeClass("hidden");
$('.switchrow').removeClass("row");
});
$('.xarch').click(function(){
$('.pitem').addClass("hidden");
$('.pitem').removeClass("pitema");
$('.vizu').removeClass("hidden");
$('.switchrow').removeClass("row");
});
$('.xrese').click(function(){
$('.pitem').addClass("hidden");
$('.pitem').removeClass("pitema");
$('.rese').removeClass("hidden");
$('.switchrow').removeClass("row");
});
$('.xprog').click(function(){
$('.pitem').addClass("hidden");
$('.soft').removeClass("hidden");
$('.pitem').removeClass("pitema");
$('.switchrow').removeClass("row");
});
$('.xall').click(function(){
$('.pitem').removeClass("hidden");
$('.pitem').addClass("pitema");
$('.switchrow').addClass("row");
});

function Particle() {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 4;
  this.h = 0;

  this.prevPos = this.pos.copy();

  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.follow = function(vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.show = function() {
    stroke(190,30);
    this.h = this.h + 1;
    if (this.h > 255) {
      this.h = 0;
    }
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
  }

  this.updatePrev = function() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  this.edges = function() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }

  }

}
var inc = 0.1;
var scl = 30;
var cols, rows;

var zoff = 0;

var fr;

var particles = [];

var flowfield;

function setup() {
	frameRate(60);
  var mycanvas=createCanvas($('#introbanner').width(), $('#introbanner').height());
  mycanvas.parent('introbanner');
  colorMode(HSB, 255);
  cols = floor(width / scl);
  rows = floor(height / scl);
  flowfield = new Array(cols * rows);

  for (var i = 0; i < 300; i++) {
    particles[i] = new Particle();
  }
}

function draw() {

	background(255,245,190,0.9);
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 8;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(3);
      flowfield[index] = v;
      xoff += inc;
      stroke(0, 50);

    }
    yoff += inc;

    zoff += 0.0003;
  }
  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
  console.log(frameCount)
if(frameCount>1200) noLoop();
}