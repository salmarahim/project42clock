var hr,mn,sc;
var scAngle;
var hrAngle;
var mnAngle;


function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(200,200);
  //rotate(-90);
  hr=hour();
  mn=minute();
  sc=second();
  console.log(hr);
  console.log(mn);
  console.log(sc);
  
  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(2);
  line(0,0,80,0);
  pop();

  noFill();
  strokeWeight(3)
  stroke("red");
  arc(0,0,180,180,-90,scAngle-90,OPEN)

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(4);
  line(0,0,75,0);
  pop();

  noFill();
  strokeWeight(3)
  stroke("green");
  arc(0,0,200,200,-90,mnAngle-90,OPEN)

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  noFill();
  strokeWeight(3)
  stroke("blue");
  arc(0,0,220,220,-90,hrAngle-90,OPEN)

  drawSprites();
}