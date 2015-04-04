	
	// global Box2D shortcuts to classes
	var b2Vec2 = Box2D.Common.Math.b2Vec2;	//vector points
	var b2BodyDef = Box2D.Dynamics.b2BodyDef; //bodydef
	var b2Body = Box2D.Dynamics.b2Body;	//body
	var b2FixtureDef = Box2D.Dynamics.b2FixtureDef; //fixturedef
	var b2Fixture = Box2D.Dynamics.b2Fixture;	//fixture
	var b2World = Box2D.Dynamics.b2World;	//'world'
	var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;  //a rect like createjs shape i guess
	var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;	//a circle like createjs shape i guess
	var b2MouseJointDef = Box2D.Dynamics.Joints.b2MouseJointDef;  //a joint controlled by mouse?
	var b2DistanceJointDef = Box2D.Dynamics.Joints.b2DistanceJointDef; //joint controlled by distance i guess
	var b2AABB = Box2D.Collision.b2AABB; //wtf
	var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;  //redraw the debugger canvas i guess
	var b2RevoluteJointDef = Box2D.Dynamics.Joints.b2RevoluteJointDef;
	
	window.addEventListener("load", init);
	
	function init() {

		
		var canvas = zid('debugCanvas');
		var stageW = canvas.width;
		var stageH = canvas.height;
		
		var stage = new createjs.Stage("myCanvas"); 
		stage.setBounds(0, 0, stageW, stageH);
		stage.enableMouseOver(10); // if you need mouse rollover
		createjs.Touch.enable(stage,true); // added for mobile	
		
		// Box2D works in something silly like Meters
		// so we have to scale everything down to get to pixels
		var SCALE = 30, STEP = 20, TIMESTEP = 1/STEP; //step is how many times it refreshes. scale is cuz of meters
		
		var world = new b2World(new b2Vec2(0,10), true); // gravity, allow sleep
		var debug = new phys.Debug(canvas, world, SCALE);
		
		var rect = {x:0, y:0, width:stageW, height:stageH};
		phys.borders(rect, world, SCALE); // puts borders around canvas
		
		var boxW = 200 / SCALE;
		var boxH = 200 / SCALE;
		var barW = 400 / SCALE;
		var barH = 400  / SCALE;
		var bigR = 100 / SCALE;
		var smallR = 45 / SCALE;
		var medR = 75 / SCALE;
		var extraMedR = 75 / SCALE;

		////barbody
		var barBody = phys.makeBox(barW, barH, world, SCALE, true);		
		barBody.SetPosition(new b2Vec2(stageW/2/SCALE, stageH/2/SCALE));

		//////Big WHeel
		var bigWheelBody = phys.makeCircle(bigR, world, SCALE, true);		
		bigWheelBody.SetPosition(new b2Vec2(300/SCALE, 300/SCALE));

		//////small Wheel
		var smallWheelBody = phys.makeCircle(smallR, world, SCALE, true);		
		smallWheelBody.SetPosition(new b2Vec2(700/SCALE, 700/SCALE));

		//////medium Wheel
		var mediumWheelBody = phys.makeCircle(medR, world, SCALE, true);		
		mediumWheelBody.SetPosition(new b2Vec2(700/SCALE, 300/SCALE));

		//////extraMedium Wheel
		var extraMediumWheelBody = phys.makeCircle(extraMedR, world, SCALE, true);		
		extraMediumWheelBody.SetPosition(new b2Vec2(300/SCALE, 700/SCALE));

		var drag = new phys.Drag(canvas, world, SCALE);

		//joints

		var bigWheelAxis = new b2RevoluteJointDef();
		bigWheelAxis.Initialize(bigWheelBody, barBody, bigWheelBody.GetWorldCenter());
		bigWheelAxis.enableMotor = true;
		bigWheelAxis.maxMotorTorque = 2000;
		bigWheelAxis.motorSpeed = 2000;
		world.CreateJoint(bigWheelAxis);

		var smallWheelAxis = new b2RevoluteJointDef();
		smallWheelAxis.Initialize(smallWheelBody, barBody, smallWheelBody.GetWorldCenter());
		smallWheelAxis.enableMotor = true;
		smallWheelAxis.maxMotorTorque = 2000;
		smallWheelAxis.motorSpeed = 2000;
		world.CreateJoint(smallWheelAxis);

		var mediumWheelAxis = new b2RevoluteJointDef();
		mediumWheelAxis.Initialize(mediumWheelBody, barBody, mediumWheelBody.GetWorldCenter());
		mediumWheelAxis.enableMotor = true;
		mediumWheelAxis.maxMotorTorque = 2000;
		mediumWheelAxis.motorSpeed = 2000;
		world.CreateJoint(mediumWheelAxis);

		var extraMediumWheelAxis = new b2RevoluteJointDef();
		extraMediumWheelAxis.Initialize(extraMediumWheelBody, barBody, extraMediumWheelBody.GetWorldCenter());
		extraMediumWheelAxis.enableMotor = true;
		extraMediumWheelAxis.maxMotorTorque = 2000;
		extraMediumWheelAxis.motorSpeed = 2000;
		world.CreateJoint(extraMediumWheelAxis);


		//CREATEJS
		
		var mapManager = new phys.MapManager();
		
		// overwrite vars for createjs
		boxW = boxW*SCALE;
		boxH = boxH*SCALE;
		barW = barW*SCALE;
		barH = barH*SCALE;
		bigR = bigR*SCALE;
		smallR = smallR*SCALE;
		medR = medR*SCALE;
		extraMedR = extraMedR*SCALE;

		//carbody createjs shape
		var boxBody = new createjs.Bitmap("images/body.png");
		stage.addChild(boxBody);
		mapManager.add(new phys.Map(barBody, boxBody, "boxBody", SCALE));
		boxBody.setBounds(0,0,barW,barH);
		boxBody.regX = barW/2;
		boxBody.regY = barW/2;


		//bigR createjs shape
		var bigeye = new createjs.Bitmap("images/bigeye.png");
		stage.addChild(bigeye);
		mapManager.add(new phys.Map(bigWheelBody, bigeye, "bigWheel",SCALE));
		bigeye.setBounds(0,0,bigR);
		bigeye.regX = bigR;
		bigeye.regY = bigR;

		
		//med createjs shape
		var smalleye = new createjs.Bitmap("images/smalleye.png");
		stage.addChild(smalleye);
		mapManager.add(new phys.Map(mediumWheelBody, smalleye, "medWheel",SCALE));
		smalleye.setBounds(0,0,medR);
		smalleye.regX = medR;
		smalleye.regY = medR;

		//smallR createjs shape
		var smallWheel = new createjs.Shape();
		smallWheel.graphics.f("#ef492b").dc(0, 0, smallR);
		stage.addChild(smallWheel);
		mapManager.add(new phys.Map(smallWheelBody, smallWheel, "smallWheel", SCALE));

		//extraMed createjs shape
		var extraMedWheel = new createjs.Shape();
		extraMedWheel.graphics.f("#ef492b").dc(0, 0, extraMedR);
		stage.addChild(extraMedWheel);
		mapManager.add(new phys.Map(extraMediumWheelBody, extraMedWheel, "extraMedWheel", SCALE));


		var i=1, hue=0;
		function bgHue() {
		hue += i;
		if(hue >= 360){ 
		hue=0; 
		}
		var canvas = document.getElementById("myCanvas");
		canvas.style.background =  "hsl("+hue+",50%, 50%)";
		} 

		setInterval(bgHue,1);

		// update world
		function update() {
			requestAnimationFrame(update); 			
			world.Step(TIMESTEP, 10, 10);	
			world.ClearForces();
	   		//debug.update();
			mapManager.update(); // note, the added update for the maps after stepping
			stage.update();
			drag.update();
		}
		update();
	}
