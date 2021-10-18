
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy , boyimage
var tree , treeimage
var stone
var block,block2,block3,block4,block5,block6,block7
var ground
var hexagon

function preload()
{
    hexagon =loadImage("polygon.png")
}


function setup() {
	createCanvas(800, 700);
    stone=Bodies.circle(50,200,20)

	engine = Engine.create();
	world = engine.world;
    block1=new Block(240,425,30,30)
    block2=new Block(270,425,30,30)
    block3=new Block(300,425,30,30)
    block4=new Block(330,425,30,30)
    block5=new Block(360,425,30,30)
    block6=new Block(390,425,30,30)
    block7=new Block(420,425,30,30)
    hexagon=createSprite(100,100,10,19)
    World.add(world,hexagon)
	//Create the Bodies Here.
    //boy = createSprite(170,600)
    //boy.addImage(boyimage)
    //boy.scale=0.125
	//tree = createSprite(500,400)
	//tree.addImage(treeimage)
	//tree.scale=0.400
	///stone.scale = 0.200
	//stone = new Stone(170,600,30,1)
    
    ground = new Ground(320,450,250,30)
    
	Engine.run(engine);
	//ground = new Ground(10,690,300,30)
   
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //stone.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  ground.display()
  drawSprites();
 
  
}
function mouseDragged(){
    Matter.Body.setPosition(hexagon, {x: mouseX , y: mouseY});
  }
  



