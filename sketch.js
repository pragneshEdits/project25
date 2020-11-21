
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin, paperObject,groundObject;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1250, 650);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,450,70);
	groundObject=new Ground(width/2,630,width,20);
	dustbin=new Dustbin(1125,470,0,300);
	//dustbin2=new Dustbin(1000,510,20,200);
	//dustbin3=new Dustbin(1100,600,200,20);
	//Create a Ground

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
  dustbin.display();
 //dustbin2.display();
 //dustbin3.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
if(paperObject.body.position.x<210){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

}
	  

  
	}
}


