const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world,dustbin,paper;
function setup() {
  createCanvas(1600, 725);
  rectMode(CENTER);


  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(720, 700, 100, 10);
  paper = new Paper(100, 600, 10);
  ground = Bodies.rectangle(width / 2, 700, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}

function draw() {
     background("black");
       rectMode(CENTER);
    background(0);


    
    dustbin.display();
    paper.display();

 
    
  }



function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 12,
      y: -13
    });
  }
}
