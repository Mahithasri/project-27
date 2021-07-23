
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;
var bd=200;

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(300,200,200,20);

	bob1 = new bob(300,380,20)
	bob2 = new bob(340,380,20)
	bob3 = new bob(260,380,20)
	bob4 = new bob(220,380,20)
	bob5 = new bob(380,380,20)
	
	
	rope1=new rope(bob1.body,roofObject.body,-bd*-0.01, 0)
	rope2=new rope(bob2.body,roofObject.body,-bd*0.20, 0)
	rope3=new rope(bob3.body,roofObject.body,-bd*-0.2, 0)
	rope4=new rope(bob4.body,roofObject.body,-bd*0.38, 0)
	rope5=new rope(bob5.body,roofObject.body,-bd*-0.40, 0)
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  roofObject.display();

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
  
  
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:70,y:70});
	}
}






