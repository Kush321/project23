var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(400, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(400 , 200 , 5 , {restitution:0.4});
	packageBody.isStatic=true;
	World.add(world, packageBody);
	//console.log(packageBody.position.x);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);



 	boxleftSprite=createSprite(300, 610, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(320, 610, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(400, 650, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(400, 630, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxrightSprite=createSprite(500, 610, 20,100);
 	boxrightSprite.shapeColor=color(255,0,0);

    Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);

packageSprite.x= packageBody.position.x 
packageSprite.y= packageBody.position.y 

if(keyDown("LEFT_ARROW")){
	helicopterSprite.x=helicopterSprite.x-3;

}
if(keyDown("RIGHT_ARROW")){
	helicopterSprite.x=helicopterSprite.x+3;

}
if(keyDown("DOWN_ARROW")){
	packageBody.isStatic=false;

}
  drawSprites();

  
 
}
