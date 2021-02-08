var roof;
var B1,B2,B3,B4,B5;
var C1,C2,C3,C4,C5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;
	
	roof = new Roof(415,100,600,20);
    B1 = new Bob(215,550,50);
    B2 = new Bob(315,550,50);
    B3 = new Bob(415,550,50);
    B4 = new Bob(515,550,50);
    B5 = new Bob(615,550,50);
    C1 = new Chain(B1.body,roof.body,-203.2,0);
    C2 = new Chain(B2.body,roof.body,-101.6,0);
    C3 = new Chain(B3.body,roof.body,0,0);
    C4 = new Chain(B4.body,roof.body,101.6,0);
    C5 = new Chain(B5.body,roof.body,203.2,0);

    
	Engine.run(engine);
}


function draw() {
  background("cyan");
 
  rectMode(CENTER);
  Engine.update(engine);

  if(B1.isTouching = B2){
    B5
  }

  roof.display();
  C1.display();
  C2.display();
  C3.display();
  C4.display();
  C5.display();
  
  B1.display();
  B2.display();
  B3.display();
  B4.display();
  B5.display();
 
  drawSprites();
 
  detectollision(B1,B2);
  detectollision(B2,B3);
  detectollision(B3,B4);
  detectollision(B4,B5);
 


}
function keyPressed(){
  if(keyCode === 37){
    Matter.Body.applyForce(B1.body,B1.body.position,{x:-120,y:20});

   
  }
  if(keyCode === 39){
    Matter.Body.applyForce(B5.body,B5.body.position,{x:+120,y:20});

   
  }
}



function detectollision(ball1,ball2){

 
}