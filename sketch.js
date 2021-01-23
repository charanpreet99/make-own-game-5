var bI,b,shooterI,shooter,l1,l2,l3,l4,l5,l6,astroI,astro1,astro2,c=0,i;
var bullet,bulletI,gameState = "start",Dastro,bulletG,a=4,overI,over,score=0;
var obstacleI,obstacle,obstacle1I,obstacle1;

function preload(){
  bI = loadImage("images/back.jpeg");
  shooterI = loadImage("images/shooter.png");
  astroI = loadImage("images/astro1.png");
  iI = loadImage("images/instructions.png");
  bulletI = loadImage("images/bullet.png");
  Dastro = loadImage("images/astro2.png");
  overI = loadImage("images/won.png");
  obstacleI = loadImage("images/obstacle.png");
  obstacle1I = loadImage("images/obstacle1.png");

}

function setup() {
  createCanvas(500,600);
  b = createSprite(250,300);
  
  shooter = createSprite(255,500);
  
 

  l1 = createSprite(180,105,5,100);
  l2 = createSprite(255,152,150,5);
  l3 = createSprite(330,105,5,100);

  astro1 = createSprite(255,150);
 
  


  l4 = createSprite(100,145,5,180);
  l5 = createSprite(255,232,310,5);
  l6 = createSprite(410,145,5,180);

  astro2 = createSprite(255,230);
  c = createSprite(250,300,1000,1000);
  i = createSprite(250,300);

  bulletG = createGroup();

  obstacle1 = createSprite(300,165,10,40);
  obstacle = createSprite(300,165,10,40);

  obstacle.visible=false;
  obstacle1.visible=false;
  
}


function draw() {  
 background(255);
 

  if(gameState = "start"){
    
    i.addImage(iI);

  }
  c.shapeColor = "white";
 


    b.addImage(bI);
    b.scale = 0.9;
  shooter.addImage(shooterI);
  shooter.scale = 0.5;

  if(keyDown(LEFT_ARROW)){
    shooter.x = shooter.x - 3;
  }

  if(keyDown(RIGHT_ARROW)){
    shooter.x = shooter.x + 3;
  }

  l4.shapeColor = "#F61717";
  l5.shapeColor = "#F61717";
  l6.shapeColor = "#F61717";

  l1.shapeColor = "#F7CAD5";
  l2.shapeColor = "#F7CAD5";
  l3.shapeColor = "#F7CAD5";

  astro1.addImage(astroI);
  astro1.scale = 0.3;

  astro2.addImage(astroI);
  astro2.scale = 0.3;

   astro1.velocityX = -3;

 
  
  
  if(astro1.x == 186){
    astro1.velocityY = -3;
    astro1.velocityX = 0;
    
  }

 if(a==-1){
   a=0
 }

 

  if(astro1.y == 78){
   astro1.visible = false;
   astro1.x = 330;
  }

  if(astro1.x == 330){
    astro1.visible = true;
    astro1.velocityY = 3;
    astro1.velocityX = 0;
  }

  if(astro1.y == 153){
    astro1.velocityY = 0;
    astro1.velocityX = -3;
  }

  if(astro1.x == 177 ){
    astro1.velocityY = -3;
    astro1.velocityX = 0;
  }

  edges = createEdgeSprites();

  shooter.bounceOff(edges);

  astro2.velocityX = 3;

  if(astro2.x == 405){
    astro2.velocityX = 0;
    astro2.velocityY = -3;
  }
  
  if(astro2.y == 65){
   astro2.visible = false;
  }
  
  
  if(astro2.y == 65){
    astro2.visible = false;
    astro2.x = 95;
   }
 
   if(astro2.x==95){
    astro2.visible = true;
    astro2.velocityX = 0;
    astro2.velocityY = 3;

   }

   if(astro2.y==230 && astro2.x==95){
    astro2.velocityX = 3;
    astro2.velocityY = 0;

   }

   if(astro2.x == 407){
    astro2.velocityX = 0;
    astro2.velocityY = -3;
   }

   if(bulletG.isTouching(astro1)){
    f = createSprite(astro1.x,astro1.y);
    f.addImage(Dastro);
    astro1.destroy();
    bullet.visible=false;
    f.scale = 0.3;
    score += 10;
    c+=1
   }


   if(bulletG.isTouching(astro2)){
    d = createSprite(astro2.x,astro2.y);
    d.addImage(Dastro);
    astro2.destroy();
    bullet.visible=false;
    d.scale = 0.3;
    score += 10;
    c+=1;
   }

   console.log(c);
   
  
   
if( score==20 || a==0 ){
  gameState="Gover";
}
if(gameState=="Gover"){
  over = createSprite(250,300);
  over.addImage(overI);
 over.scale = 3;
 obstacle.visible=false;
 obstacle1.visible=false;
}

if(frameCount % 20 === 0) {
  obstacle.visible=true;
  obstacle.velocityX = -8;
  obstacle.velocityY = 8;
  obstacle.addImage(obstacleI);
  obstacle.scale=0.2;
  obstacle.x = Math.round(random(0,600));
  obstacle.y = Math.round(random(0,500));

}

if(frameCount % 40 === 0) {
  obstacle1.visible=true;
  obstacle1.velocityX = 8;
  obstacle1.velocityY = 8;
  obstacle1.addImage(obstacle1I);
  obstacle1.scale=0.2;
  obstacle1.x = Math.round(random(0,600));
  obstacle1.y = Math.round(random(0,500));

}
  
 
  
   
boom();

  drawSprites();
  fill(0);
  textSize(20);
  text("LIVES: "+a,20,590);
  text("SCORE: "+score,380,590);

}

function boom(){
  if(keyCode === 13){
    i.destroy();
    c.destroy();
  }
}

function keyPressed(){
  if(keyCode === 32){
      bullet = createSprite(250,513,10,10);
      bullet.x = shooter.x;
      bullet.addImage(bulletI);
      bullet.scale = 0.05;
      bullet.velocityY = -10;
      bulletG.add(bullet);
      
      a=a-1;
    
    }
  }

  
  
  




