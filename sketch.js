
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var bobObject1, bobObject2, bobObject3;
var bobObject4,bobObject5;
var rope1,rope2;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 roof = new Roof(400,100,700,60);

 bobObject1 = new Bob(160,500,60);
 bobObject2 = new Bob(280,500,60);
 bobObject3 = new Bob(400,500,60);
 bobObject4 = new Bob(520,500,60);
 bobObject5 = new Bob(640,500,60);


 stroke(0,0,250);
 rope1 = new Rope(bobObject1.body,roof.body,60,10);
 rope2 = new Rope(bobObject2.body,roof.body,180,10);
 rope3 = new Rope(bobObject3.body,roof.body,300,10);
 rope4 = new Rope(bobObject4.body,roof.body,420,10);
 rope5 = new Rope(bobObject5.body,roof.body,540,10);
	Engine.run(engine)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



