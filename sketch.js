const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	
	roof1 = new Roof (300,100,500,50);
	bob1 = new Bob (300,200);
	bob2 = new Bob(200,200);
	bob3 = new Bob(400,200);
	string1 = new String({x:300,y:100},bob1.body);
	string2 = new String({x:200,y:100},bob2.body);
	string3 = new String({x:400,y:100},bob3.body);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  string1.display();
  string2.display();
  string3.display();
  
}



