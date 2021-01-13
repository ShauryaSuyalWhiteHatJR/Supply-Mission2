var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

box1Sprite=createSprite(370,650,200,20,{isStatic:true});
	box1Sprite.shapeColor=("red");

	box2Sprite=createSprite(280,600,20,100,{isStatic:true});
	box2Sprite.shapeColor=("red");


	box3Sprite=createSprite(460,600,20,100,{isStatic:true});
	box3Sprite.shapeColor=("red");
	
	
	
	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	 box1 = Bodies.rectangle(370,650,200,20,{isStatic:true} );
	 World.add(world, box1);
	 
 
	   
	 box2 = Bodies.rectangle(280,600,20,100,{isStatic:true} );
	 World.add(world, box2);
	 
	 
		 
	 box3 = Bodies.rectangle(460,600,20,100,{isStatic:true} );
	 World.add(world, box3);
	
	
	
	
	
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:false});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	
	box1 = Bodies.rectangle(370,650,200,20,{isStatic:true} );
	World.add(world, box1);
	

  	
	box2 = Bodies.rectangle(280,600,20,100,{isStatic:true} );
	World.add(world, box2);
	
	
		
	box3 = Bodies.rectangle(460,600,20,100,{isStatic:true} );
	World.add(world, box3);
	
	
	Engine.run(engine);
 
    
  }
}



