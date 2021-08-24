const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bgim;
var iron;
var iron2;
var vill;
var g;
var l=[];
function preload(){
  bgim=loadImage("image.png");
  
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
  
  iron=new Ironman(300,330,100,100);
  iron2=new villian(400,330,100,100);
  vill=new Vil(700,300,200,200);
  g=new Ground(400,390,800,20);
  Engine.run(engine);
}

function draw() {
  background(bgim);
  iron.display();
  iron2.display();
  vill.display(); 
  g.display();
  if(frameCount%10===0){
    l.push(new laser(random(width/2-10,width/2+10,),10,10));
  }
  for(var j =0;j < l.length;j++){
    l[j].display();
  }
  //drawSprites();
}