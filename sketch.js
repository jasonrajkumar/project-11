var runner,path;
var runnerImg,pathImg;


function preload(){
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  background("white");

  
  
  
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.scale =1.3;
  path.Y = path.height/2;


  runner = createSprite(177,302);
  runner.addAnimation("runnerImg",runnerImg);
  runner.velocityY = -3;
  runner.scale=0.10;


  
}

  function draw() {
    background(0);
    path.velocityY=4

  
  
    if (path.Y < 400){
    path.Y = path.height/2;
    }
  

    drawSprites();
  

    }



