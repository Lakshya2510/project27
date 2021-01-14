
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 

var roof,bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(430,400,40)
	bob2 = new Bob(510,400,40)
	bob3 = new Bob(590,400,40)
	bob4 = new Bob(670,400,40)
	bob5 = new Bob(750,400,40)
	roof = new Roof(600,100,500,30)
	rope1 = new Rope(bob1.body,roof.body,-160,0)
	rope2 = new Rope(bob2.body,roof.body,-80,0)
	rope3 = new Rope(bob3.body,roof.body,0,0)
	rope4 = new Rope(bob4.body,roof.body,80,0)
	rope5 = new Rope(bob5.body,roof.body,160,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

    roof.display();
    rope1.display()
    rope2.display()
    rope3.display()
    rope4.display()
    rope5.display()
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
	   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-10030, y:-10000});
	 }
   }
 