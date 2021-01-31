const  Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var engine,world;
var ground;
var bg,BG;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11;
var a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11;
var e1,e2,e3,e4,e5;
var hero,ground,mm;

function preload() {
 bg = loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(2000, 700);

  BG = createSprite(750,350,1500,700);
  BG.addImage(bg);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,550,1600,5);
  hero = new Hero(400,300,30);
  mm = new Monster(1020,500,50);
  hrope = new Chain(hero.body,{x:400,y:100});

  //boxes1
 
  b1 = new Box(590,250);
  b2 = new Box(590,250);
  b3 = new Box(590,250);
  b4 = new Box(590,250);
  b5 = new Box(590,250);
  b6 = new Box(590,250);
 
//boxes2
  b7 = new Box(660,250);
  b8 = new Box(660,250);
  b9 = new Box(660,250);
  b10 = new Box(660,250);
  b11 = new Box(660,250);
 
  //boxes3
  a1 = new Box(730,250);
  a2 = new Box(730,250);
  a3 = new Box(730,250);
  a4 = new Box(730,250);
  a5 = new Box(730,250);
  a6 = new Box(730,250);
  //boxes4
  a7 = new Box(800,250);
  a8 = new Box(800,250);
  a9 = new Box(800,250);
  a10 = new Box(800,250);
  a11 = new Box(800,250);
  
 //boxes5
  e1 = new Box(870,250);
  e2 = new Box(870,250);
  e3 = new Box(870,250);
  e4 = new Box(870,250);
  e5 = new Box(870,250);
  e6= new Box(870,250);
  
}

function draw() {
  background("white");
  drawSprites();
  Engine.update(engine);

  ground.display();
  hero.display();
  mm.display();
  hrope.display();

  if(mm.body.position.y>750){

    textSize(100);
    fill("black");
    text("YOU WON",500,350);
  }

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
 

  a1.display();
  a2.display();
  a3.display();
  a4.display();
  a5.display();
  a6.display();
  a7.display();
  a8.display();
  a9.display();
  a10.display();
  a11.display();
  
  e1.display();
  e2.display();
  e3.display();
  e4.display();
  e5.display();
  e6.display();
  mouseDragged();
 
  

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}
