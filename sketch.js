var garden,rabbit;
var gardenImg,rabbitImg;
var apples, applesImg
var leaf, leafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  if(keyDown("space")&& rabbit.y>=200){
    rabbit.velocityY=-7
    }
    rabbit.velocityY=rabbit.velocityY+0.6
  
    edges= createEdgeSprites();
    rabbit.collide(edges[3]);

  edges= createEdgeSprites();
  rabbit.collide(edges);

var select_sprite = Math.round(random(1,2));
  if(frameCount%100 == 0){
    if(select_sprite == 1)
      spawnApples()
    
    else{
      spawnLeaf()
    }
  }
    
  drawSprites();
}
function spawnApples(){
  // write the code here
  
    apples=createSprite(random(50,350),40,10,10);
    apples.addImage(applesImg);
    apples.x=Math.round(random(140,160));
    apples.velocityY=2
    apples.scale=0.1
    apples.lifetime=260
  }
  
  //function to spawn leaf
  function spawnLeaf(){

      
    leaf=createSprite(random(50,350),40,10,10);
    leaf.addImage(leafImg);
    leaf.x=Math.round(random(140,160));
    leaf.velocityY=2
    leaf.scale=0.1
     leaf.lifetime=260
  }




