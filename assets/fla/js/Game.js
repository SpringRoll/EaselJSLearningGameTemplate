(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var MovieClip = cjs.MovieClip;
var Bitmap = cjs.Bitmap;
var Tween = cjs.Tween;
var Rectangle = cjs.Rectangle;
var Container = cjs.Container;
var Shape = cjs.Shape;

// library properties:




// symbols:



(lib.GameBackground = function() {
	this.initialize(img.GameBackground);
}).prototype = p = new Bitmap();
p.nominalBounds = new Rectangle(0,0,1024,768);


(lib.Symbol1 = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#FF0066").s().p("AlnFoQiWiVAAjTQAAjSCWiVQCViWDSAAQDTAACVCWQCWCVAADSQAADTiWCVQiVCWjTAAQjSAAiViWg");

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-51,-51,102.1,102.1);


// stage content:
(lib.Game = function(mode,startPosition,loop) {
	var instance_1;
	var instance;
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	instance = this.instance = new lib.Symbol1("synched",0);
	instance.setTransform(205.1,285);

	this.timeline.addTween(Tween.get(instance).wait(1).to({y:286},0).wait(1).to({y:289},0).wait(1).to({y:294},0).wait(1).to({y:300.9},0).wait(1).to({y:309.8},0).wait(1).to({y:320.6},0).wait(1).to({y:333.3},0).wait(1).to({y:347.8},0).wait(1).to({y:364.3},0).wait(1).to({y:382.7},0).wait(1).to({y:403},0).wait(1).to({y:425.1},0).wait(1).to({y:449.2},0).wait(1).to({y:475.3},0).wait(1).to({y:503.3},0).wait(1).to({y:533.3},0).wait(1).to({y:565.4},0).wait(1).to({y:599.6},0).wait(1).to({y:636.2},0).wait(1).to({y:675.2},0).wait(1).to({y:717},0).wait(1).to({scaleX:1.24,scaleY:0.81,y:726.6},0).wait(1).to({scaleX:1.39,scaleY:0.69,y:733},0).wait(1).to({scaleX:1.09,scaleY:0.93,y:720.5},0).wait(1).to({scaleX:1,scaleY:1,y:717},0).wait(1).to({y:675.5},0).wait(1).to({y:634.1},0).wait(1).to({y:593.8},0).wait(1).to({y:555.3},0).wait(1).to({y:519.3},0).wait(1).to({y:486.1},0).wait(1).to({y:455.8},0).wait(1).to({y:428.4},0).wait(1).to({y:404},0).wait(1).to({y:382.3},0).wait(1).to({y:363.3},0).wait(1).to({y:346.8},0).wait(1).to({y:332.5},0).wait(1).to({y:320.5},0).wait(1).to({y:310.4},0).wait(1).to({y:302.2},0).wait(1).to({y:295.7},0).wait(1).to({y:290.9},0).wait(1).to({y:287.6},0).wait(1).to({y:285.6},0).wait(1).to({y:285},0).wait(1));

	// Layer 1
	instance_1 = this.instance_1 = new lib.GameBackground();

	this.timeline.addTween(Tween.get(instance_1).wait(47));

}).prototype = p = new MovieClip();
p.nominalBounds = new Rectangle(512,384,1024,768);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;