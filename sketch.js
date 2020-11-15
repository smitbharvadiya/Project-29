const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var hexagon1,hexagonImg, pointToJoin;
//area 1 boxes
var ground1,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28;
//area 2 boxes
var ground2,bx1,bx2,bx3,bx4,bx5,bx6,bx7,bx8,bx9,bx10,bx11,bx12,bx13,bx14,bx15;

function preload() {
  hexagonImg = loadImage("hexagon.png");
}

function setup() {
  createCanvas(1530,750);

  engine = Engine.create();
  world = engine.world;

  hexagon1 = Bodies.circle(300,500,20,{density: 2});
  World.add(world,hexagon1);
  console.log(hexagon1);

  pointToJoin = new SlingShot(hexagon1,{x: 300, y:500});

  ground1 = new Ground(680,560,250,20);

  box1 = new Box(590,530,"#86CDE9");
  box2 = new Box(620,530,"#86CDE9");
  box3 = new Box(650,530,"#86CDE9");
  box4 = new Box(680,530,"#86CDE9");
  box5 = new Box(710,530,"#86CDE9");
  box6 = new Box(740,530,"#86CDE9");
  box7 = new Box(770,530,"#86CDE9");
  box8 = new Box(605,490,"#FEBFCB");
  box9 = new Box(635,490,"#FEBFCB");
  box10 = new Box(665,490,"#FEBFCB");
  box11 = new Box(695,490,"#FEBFCB");
  box12 = new Box(725,490,"#FEBFCB");
  box13 = new Box(755,490,"#FEBFCB");
  box14 = new Box(620,450,"#3EDFCF");
  box15 = new Box(650,450,"#3EDFCF");
  box16 = new Box(680,450,"#3EDFCF");
  box17 = new Box(710,450,"#3EDFCF");
  box18 = new Box(740,450,"#3EDFCF");
  box19 = new Box(635,410,"#FF9055");
  box20 = new Box(665,410,"#FF9055");
  box21 = new Box(695,410,"#FF9055");
  box22 = new Box(725,410,"#FF9055");
  box23 = new Box(650,370,"#5F93E3");
  box24 = new Box(680,370,"#5F93E3");
  box25 = new Box(710,370,"#5F93E3");
  box26 = new Box(665,330,"#EF7B76");
  box27 = new Box(695,330,"#EF7B76");
  box28 = new Box(680,290,"black");

  ground2 = new Ground(1100,400,190,20);
  bx1 = new Box(1040,370,"#86CDE9");
  bx2 = new Box(1070,370,"#86CDE9");
  bx3 = new Box(1100,370,"#86CDE9");
  bx4 = new Box(1130,370,"#86CDE9");
  bx5 = new Box(1160,370,"#86CDE9");
  bx6 = new Box(1055,330,"#FEBFCB");
  bx7 = new Box(1085,330,"#FEBFCB");
  bx8 = new Box(1115,330,"#FEBFCB");
  bx9 = new Box(1145,330,"#FEBFCB");
  bx10 = new Box(1070,290,"#3EDFCF");
  bx11 = new Box(1100,290,"#3EDFCF");
  bx12 = new Box(1130,290,"#3EDFCF");
  bx13 = new Box(1085,250,"#FF9055");
  bx14 = new Box(1115,250,"#FF9055");
  bx15 = new Box(1100,210,"#5F93E3");
}

function draw() {
  background("#372B2B");

  Engine.update(engine);

  push();
  imageMode(CENTER);
  image(hexagonImg,hexagon1.position.x,hexagon1.position.y,40,40);
  pop();

  pointToJoin.display();

  //area 1
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();

  //area 2
  ground2.display();
  bx1.display();
  bx2.display();
  bx3.display();
  bx4.display();
  bx5.display();
  bx6.display();
  bx7.display();
  bx8.display();
  bx9.display();
  bx10.display();
  bx11.display();
  bx12.display();
  bx13.display();
  bx14.display();
  bx15.display();

  textSize(50);
  text("Pull back the Hexagon and knock down the boxes!",180,50);
  textSize(35);
  text("PS: Press Space to the Hexagon back after shooting it.",310,100);
  // textSize(30);
  // text(mouseX+","+mouseY,1300,100);
}

function keyPressed() {
  if(keyCode===32) {
    Matter.Body.setPosition(hexagon1,{x: 300,y: 500});
    pointToJoin.attach(hexagon1);
  }
}

function mouseDragged() {
  Matter.Body.setPosition(hexagon1,{x: mouseX,y: mouseY});
}

function mouseReleased() {
  pointToJoin.fly();
}