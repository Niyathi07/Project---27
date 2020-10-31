
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1 ,bob2,bob3,bob4,bob5;
var ground;
var roof;
var roof2;
var roof3;
var roof4;
var roof5;
var rope1,rope2,rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	

	bob1 = new Bob (200,300,20);
	bob2 = new Bob (280,300,20);
  bob3 = new Bob (360,300,20);
	bob4 = new Bob (440,300,20);
	bob5 = new Bob (520,300,20);

	ground = new Roof(100,398,2000,10);

  roof = new Roof(500,50,250,10);
  //roof2 = new Roof(520,50,50,10);
  //roof3 = new Roof(550,50,50,10);
  //roof4 = new Roof(620,50,50,10);
  //roof5 = new Roof(450,50,50,10);

	rope1 = new Rope(bob1.body , roof.body,-80,0);
	rope2 = new Rope(bob2.body , roof.body, -40,0);
	rope3 = new Rope(bob3.body , roof.body , 0,0  );
	rope4 = new Rope(bob4.body , roof.body,40,0);
	rope5 = new Rope(bob5.body , roof.body,80,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  Engine.update(engine);

  ground.display();

  roof.display();
 // roof2.display();
 // roof3.display();
  //roof4.display();
  //roof5.display();

 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}
function keyPressed(){

  if (keyCode === UP_ARROW){
  
    Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-50,y:-50})
  }
  
  }
  
  



