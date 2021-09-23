const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

function preload(){
  polygonImg = loadImage("yug.webp")
}
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,1200,20);
  polygon = Bodies.circle(200, 200, 20)
  World.add(world, polygon)
  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 40, 40)
  slingshot = new slingShot(this.polygon, {x:200, y:200});

  stand1 = new Ground(500, 300, 200, 20);
  Block1level1 = new Block(425, 250, 40, 40);
  Block12evel1 = new Block(475, 250, 40, 40);
  Block13evel1 = new Block(525, 250, 40, 40);
  Block14evel1 = new Block(575, 250, 40, 40);
  Block1level2 = new Block(450, 200, 40, 40);
  Block2level2 = new Block(500, 200, 40, 40);
  Block3level2 = new Block(550, 200, 40, 40);
  Block1level3 = new Block(475, 150, 40, 40);
  Block2level3 = new Block(525, 150, 40, 40);
  Block1level4 = new Block(500, 100, 40, 40);

  stand2 = new Ground(950, 200, 200, 20);
  Block1 = new Block(875, 175, 40, 40);
  Block2 = new Block(925, 175, 40, 40);
  Block3 = new Block(975, 175, 40, 40);
  Block4= new Block(1025, 175, 40, 40);
  Block5= new Block(900, 100, 40, 40);
  Block6= new Block(950, 100, 40, 40);
  Block7= new Block(1000, 100, 40, 40);
  Block8= new Block(925, 50, 40, 40);
  Block9= new Block(975, 50, 40, 40);
  Block10= new Block(950, 1, 40, 40);



}
function draw() {
  background('black'); 
  Engine.update(engine);
  ground.display();
  stand1.display();
  stand2.display();
  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 40, 40)

  Block1.display();
  Block2.display();
  Block3.display();
  Block4.display();
  Block5.display();
  Block6.display();
  Block7.display();
  Block8.display();
  Block9.display();
  Block10.display();


  Block1level1.display();
  Block12evel1.display();
  Block13evel1.display();
  Block14evel1.display();
  Block1level2.display();
  Block2level2.display();
  Block3level2.display();
  Block1level3.display();
  Block2level3.display();
  Block1level4.display();

  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition (polygon, {x:mouseX, y:mouseY} )

}

function mouseReleased() {
  slingshot.fly();
}
function keyPressed() {
  if (keyCode===32){
      slingshot.attach(polygon);
  }
}