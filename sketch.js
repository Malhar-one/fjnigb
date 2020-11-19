var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
gamerect1=createSprite(500,50,50,50);
gamerect2=createSprite(600,50,50,50);
gamerect3=createSprite(700,50,50,50);

}

function draw() {
  background(0,0,0);  
movingRect.y=World.mouseY
movingRect.x=World.mouseX
if(istouching(movingRect,gamerect1)){
movingRect.shapeColor=("yellow")
gamerect1.shapeColor=("cyan")
} 
else{
  movingRect.shapeColor=("green")
gamerect1.shapeColor=("grey")
}
drawSprites();
}
