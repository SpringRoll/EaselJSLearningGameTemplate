(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var MovieClip = cjs.MovieClip;
var Tween = cjs.Tween;
var Rectangle = cjs.Rectangle;
var Container = cjs.Container;
var Shape = cjs.Shape;

// library properties:




// symbols:



(lib.Transition_1 = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#9F4503").s().p("EhP/A8AMAAAh3/MCf/AAAMAAAB3/gAhlhlQgqArAAA6QAAA7AqArQArAqA6AAQA7AAArgqQAqgrAAg7QAAg6gqgrQgrgqg7AAQg6AAgrAqg");

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(-512,-384,1024,768);


(lib.Fill = function() {
	var shape;
	this.initialize();

	// Layer 1
	shape = this.shape = new Shape();
	shape.graphics.f("#9F4503").s().p("EhP/A7/MAAAh3+MCf/AAAMAAAB3+g");
	shape.setTransform(512,384);

	this.addChild(shape);
}).prototype = p = new Container();
p.nominalBounds = new Rectangle(0,0,1024,768);


// stage content:
(lib.Transition = function(mode,startPosition,loop) {
	var instance_1;
	var instance;
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{hidden:0,onTransitionOut:1,onTransitionOut_stop:30,onTransitionIn:50,onTransitionIn_stop:70});

	// mask
	instance = this.instance = new lib.Transition_1("synched",0);
	instance.setTransform(512,384,43.834,43.834);
	instance._off = true;

	instance_1 = this.instance_1 = new lib.Fill("synched",0);
	instance_1.setTransform(450,250,1,1,0,0,0,450,250);

	this.timeline.addTween(Tween.get({}).to({state:[]}).to({state:[{t:instance}]},2).to({state:[{t:instance}]},27).to({state:[{t:instance_1}]},1).to({state:[{t:instance}]},21).to({state:[{t:instance}]},27).to({state:[]},1).wait(6));
	this.timeline.addTween(Tween.get(instance).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1},27).to({_off:true},1).wait(21).to({_off:false},0).to({scaleX:43.83,scaleY:43.83},27).to({_off:true},1).wait(6));

}).prototype = p = new MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;