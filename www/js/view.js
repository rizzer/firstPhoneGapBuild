
// view
zog("hi from view.js");

var app = function(app) {
	//
	app.makeHorizontalPages = function(layoutManager, gridManager, guideManager) {
		
		zog("pages");
		
		p = {};
		

		//page container
		p.main = new createjs.Container();		
		p.main.name = "main";	
		p.main.setBounds(0,0,stageW,stageH);
		gridManager.add(new zim.Grid(p.main, "white"));
		
		//left container
		var leftContainer = p.main.content = new createjs.Container();
		leftContainer.setBounds(0,0,200,450);
		// gridManager.add(new zim.Grid(leftContainer, "white"));
		p.main.addChild(leftContainer);

			//triangle
			var triangle = new zim.Triangle(100, 100, 100, "white");
			triangle.x = 50;
			triangle.y = 50;
			leftContainer.addChild(triangle);

			//triangle
			var trianglet = new zim.Triangle(100, 100, 100, "white");
			trianglet.x = 50;
			trianglet.y = 25;
			triangle.rotation = 180;
			leftContainer.addChild(trianglet);

			//square
			var square = new zim.Rectangle(100, 100, "white");	
			// square.setBounds(0,0,100,200);
			square.y = 100;
			leftContainer.addChild(square);

			//circle
			var circle = new zim.Circle(50,"white");
			circle.y = 250;	
			circle.x = 50;
			circle.setBounds(0,0,100,100);
			leftContainer.addChild(circle);

			//triangle
			var triangle2 = new zim.Triangle(100, 100, 100, "white");
			triangle2.x = 50;
			triangle2.y = 350;
			leftContainer.addChild(triangle2);

		//middle container
		var middleContainer = p.main.content = new createjs.Container();
		middleContainer.setBounds(0,0,600,1200);
		middleContainer.x = 0;
		// gridManager.add(new zim.Grid(middleContainer, "white"));
		p.main.addChild(middleContainer);

			var red = p.mainThing = new zim.Circle(200,"white");
			red.x = 300;
			red.y = 600;		
			middleContainer.addChild(red);

			//
			var red2 = p.mainThing = new zim.Circle(100,"lightblue");
			red2.x = 450;
			red2.y = 200;		
			middleContainer.addChild(red2);

			var red3 = p.mainThing = new zim.Circle(100,"black");
			red3.x = 410;
			red3.y = 230;		
			middleContainer.addChild(red3);
			//triangle3
			var triangle3 = new zim.Circle(20, "black");
			triangle3.x = 200;
			triangle3.y = 600;	
			middleContainer.addChild(triangle3);
			//triangle3
			var triangle6 = new zim.Circle(20, "black");
			triangle6.x = 400;
			triangle6.y = 600;	
			middleContainer.addChild(triangle6);
			//triangle3
			// var triangle7 = new zim.Circle(200, "black");
			// triangle7.x = 300;
			// triangle7.y = 400;	
			// middleContainer.addChild(triangle7);
			//triangle4p
			var triangle4 = new zim.Triangle(200, 200,200, "black");
			triangle4.x = 300;
			triangle4.y = 750;		
			middleContainer.addChild(triangle4);
			//triangle5
			var triangle5 = new zim.Triangle(100, 200,200, "white", "lightblue");
			triangle5.x = 300;
			triangle5.y = 950;
			triangle5.rotation = 180;		
			middleContainer.addChild(triangle5);
			//rectangle
			var rect1 = new zim.Rectangle(100, 15, "black");	
			rect1.x = 250;
			rect1.y = 1020;	
			middleContainer.addChild(rect1);
			//rectangle
			var rect2 = new zim.Rectangle(100, 10, "black");	
			rect2.x = 250;
			rect2.y = 1000;	
			middleContainer.addChild(rect2);
			//rectangle
			var rect3 = new zim.Rectangle(100, 5, "black");	
			rect3.x = 250;
			rect3.y = 985;		
			middleContainer.addChild(rect3);
			//rectangle
			var rect4 = new zim.Rectangle(100, 2, "black");	
			rect4.x = 250;
			rect4.y = 975;		
			middleContainer.addChild(rect4);


		//right shapeb
		var related = new zim.Rectangle(200, 600, "white");	
		related.setBounds(0,0,200,600);
		p.main.addChild(related);
	
		
		zog(layoutManager);
		
		var mainParts = [

{object:leftContainer, marginLeft:0, maxHeight:100, width:20, valign:"middle"},
{object:middleContainer, marginLeft:0, maxHeight:100, valign:"middle", align:"middle"}, 
{object:related, marginLeft:0, maxHeight:100, width:20, minWidth:20, align:"left", valign:"top"},

			];
		
		var mainLayout = new zim.Layout(p.main, mainParts, 0, "black", false, new createjs.Shape(), stage);
		
		layoutManager.add(mainLayout);	
		
		
		//second page container
		p.info = new createjs.Container();		
		p.info.name = "info";	

		//inside second page container	
		var infoBacking = new zim.Rectangle(stageW, stageH, "yellow");	
		infoBacking.setBounds(0,0,stageW,stageH);
		p.info.addChild(infoBacking);
				
		return p;
		
	}
	




	//LANDSCAPE
	app.makeVerticalPages = function(layoutManager, gridManager, guideManager) {
		
		zog("pages");
		
		p = {};
		
		p.main = new createjs.Container();		
		p.main.name = "main";	
		p.main.setBounds(0,0,stageW,stageH);
		
		var logo = new zim.Rectangle(100, 100, "orange");	
		logo.setBounds(0,0,100,100);
		p.main.addChild(logo);
		
		// var content = p.main.content = new createjs.Container();
		// content.setBounds(0,0,600,600);
		// var thing = p.mainThing = new zim.Rectangle(200,200,"red");
		// thing.x = 100;
		// thing.y = 100;		
		// content.addChild(thing);
		// p.main.addChild(content);
		
		var related = new zim.Rectangle(500, 200, "pink");	
		related.setBounds(0,0,500,200);
		p.main.addChild(related);
		
		// gridManager.add( new zim.Grid(content) );
		// guideManager.add( new zim.Guide(content) );
		// guideManager.add( new zim.Guide(content, false) );
		
		zog(layoutManager);
		
		var mainParts = [ 
	{object:logo, marginTop:10, maxWidth:80, minHeight:20, align:"left", valign:"top"}
	// {object:content, marginTop:5, maxWidth:80, backgroundColor:"beige"} 
	// {object:related, marginTop:5, maxWidth:80, height:20, backgroundColor:"red"}
	 ];
		
		var mainLayout = new zim.Layout(p.main, mainParts, 5, "black", true, new createjs.Shape(), stage);
		
		layoutManager.add(mainLayout);	
		
		//SECOND PAGE
		p.info = new createjs.Container();		
		p.info.name = "info";	

		//inside second page	
		var infoBacking = new zim.Rectangle(stageW, stageH, "yellow");	
		infoBacking.setBounds(0,0,stageW,stageH);
		p.info.addChild(infoBacking);
				
		return p;
		
	}	
	
	
	return app;
	
}(app || {});