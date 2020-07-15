var fixedRect,movingRect


function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(700, 200, 50, 50);
  movingRect.debug=true;
  fixedRect.debug=true;
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}

function draw() {
  background(255,255,255); 
  movingRect.x=mouseX
  movingRect.y=mouseY
  
  if(movingRect.x-fixedRect.x<=fixedRect.width/2+movingRect.width/2
    &&fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2
    &&movingRect.y-fixedRect.y<=fixedRect.height/2+movingRect.height/2
   &&fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2){
      fixedRect.shapeColor="red";
      movingRect.shapeColor="red";
    }
    else{
      fixedRect.shapeColor="green";
      movingRect.shapeColor="green";
    }
  drawSprites();
}