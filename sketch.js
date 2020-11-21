
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj,paperObject,groundObject
var world

var paper

var ground
var dustbin
function preload()
{
	
paperObject = loadImage("paper.png")
dustbinObject = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);

	paper.addImage===paperObject

	rectMode(CENTER)


	



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.



dustbin1= new Dustbin(480,650,200,20)
dustbin2= new Dustbin(380,620,20,100)
dustbin3= new Dustbin(580,620,20,100)
ground= new Ground(width/2, height-35, width,10)
paper= new Paper(340,640,34)





Engine.run(engine);


}









function draw() {
  rectMode(CENTER);
  background(0);
  
  
paper.display()
dustbin1.display()
dustbin2.display()
dustbin3.display()
ground.display()

}

function keyPressed(){

	if(keyCode===UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x : 25 ,y:-35})
		
	}
	

}

