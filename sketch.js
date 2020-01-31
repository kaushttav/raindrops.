const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var rain;
function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  ball = Bodies.rectangle(200,0,5,10);
  
  World.add(world,ball);
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  rect(ball.position.x,ball.position.y,10,20);
}