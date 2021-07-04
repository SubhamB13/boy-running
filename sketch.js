var boy,mountains;
var edges;
var boyImg,mountainsImg,rock1Img,boyImg2;
var rock1,rock2,rock3 ;
var rockG;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score;

function preload(){
boyImg=loadAnimation("boy 1.png","boy 2.png","boy 3.png","boy 4.png")
mountainsImg = loadImage("mountain.jpg")
rock1Img = loadImage("rock 1.png")
rock2 = loadImage("rock 2.png");
rock3 = loadImage("rock 3.png");
boyImg2 = loadImage("boy 1.png");
}

function setup() {
   createCanvas(1380,500)
   score = 0;

   mountains = createSprite(700,200);
   mountains.addImage(mountainsImg);
   mountains.scale=2.5
  
   boy = createSprite(120,430);
   boy.addAnimation("running",boyImg);
   boy.scale = 0.7

   rockG = new Group();
}

function draw() {
background("black")


edges = createEdgeSprites();

boy.collide(edges);

if (keyDown("space")){
   boy.velocityY=-13;
}
boy.velocityY = boy.velocityY+0.8;

if(boy.collide(rockG)){
   gameState = END;
   //text("GAMEOVER",500,500);
   rockG.velocityXEach(0);
   boy.addImage(boyImg2);

}

//if (gameState === END){
   
//}

drawSprites();

spawnRocks()

fill ("blue")
stroke("black")
strokeWeight(2)
textSize(40);
text("Score : "+ score, 1100,50);
}

function spawnRocks(){
   if(World.frameCount % 170 === 0){
      var rock1 = createSprite(1400,473,20,20);

      var rand = Math.round(random(1,3));
      switch(rand) {
        case 1: rock1.addImage(rock1Img);
                break;
        case 2: rock1.addImage(rock2);
                break;
        case 3: rock1.addImage(rock3);
                break;
        default: break;

      rock1.addImage(rock1Img)
      
      }
      rock1.scale = 0.25;
      rock1.velocityX = -4
      rock1.lifetime =350
      rockG.add(rock1);
   }
}