var path, boy, lBoundary, rBoundary
var pathImg, boyImg;
var i;

function preload(){
  //pre-load images
  pathImg= loadImage("path.png")
  boyImg= loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path= createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY= 4;
  path.scale=1.2;

  boy= createSprite(180, 340, 30, 30);
  boy.addAnimation("jakeRunning", boyImg);
  boy.scale=0.08;

  lBoundary= createSprite(0, 0, 100, 800)
lBoundary.visible= false

rBoundary= createSprite(410, 0, 100, 800)
rBoundary.visible= false
}

function draw() {
  background(0);
path.velocityY= 4;

boy.x=World.mouseX
edges= createEdgeSprites();
boy.collide(edges[3]);
boy.collide(lBoundary);
boy.collide(rBoundary);
if(path.y > 400){
  path.y= height/2;
}
drawSprites()
}
