const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1100,700);
    engine = Engine.create();
    world = engine.world;
 
    box1 = new Box(600,650,70,70);
    pig1 = new Pig(700,600);
    box2 = new Box(800,650,70,70);
    log1 = new Log(700,500,300,PI/2);

    box3 = new Box(600,450,70,70);
    pig2 = new Pig(700,400);
    box4 = new Box(800,450,70,70);
    log2 = new Log(700,300,300,PI/2);

    box5 = new Box(700,280,70,70);
    log3 = new Log(700,200,150,PI/6); 
    log4 = new Log(770,150,150,-PI/6);
    
    bird = new Bird(50,50);

    ground = new Ground(550,height,1100,20)
}

function draw(){
    background(0);
    Engine.update(engine);
  //  console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
log1.display();
box3.display();
box4.display();

pig2.display();
log2.display();
log4.display();
box5.display();
log3.display();
bird.display();
}