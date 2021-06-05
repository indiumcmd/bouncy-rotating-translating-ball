
  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball1,ball2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,380,400,20);
    
    ball1 = new Ball(180,300,40,40);
    ball2 = new Ball(200,200,20,40);
  

    

    
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    ground.display();

    fill("red");
    ball1.display();

    fill("pink");
    ball2.display();
}

