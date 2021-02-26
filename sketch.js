var wall
var car
var t="press space to test the the car"



function setup() {
  createCanvas(800,400);
 wall= createSprite(400, 200, 20, 200);
 car=createSprite(100,200,70,50)
 
}

function draw() {
textSize(25);
text(t,400,100)
fill("blue")
  background("black");  
if(keyDown("space")){
  car.velocityX=5;
}
  if(car.x-wall.x<wall.width/2+car.width/2 &&
    wall.x-car.x<car.height/2+car.height/2)
  {car.shapeColor="red";
  wall.shapeColor="red";
  car.velocityX=0;

}
else{car.shapeColor="green";
wall.shapeColor="green";

}
  drawSprites();
}