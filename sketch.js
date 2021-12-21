var box
function setup() {
  createCanvas(400,400);
box= createSprite(100,100,50,50)
box.shapeColor="red"
}

function draw() 
{
  background(160);
drawSprites()
if(keyIsDown(DOWN_ARROW)){
  box.position.y=box.position.y+10
}
}




