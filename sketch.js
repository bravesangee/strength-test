var car,car2,car3,wall,wall2,wall3;
var carImg;
var column1,column2,column3,column4,column5;
var weight,speed,speed2,speed3;
var deformation
function preload(){


}
function setup(){
createCanvas(1600,900) 
column3=createSprite(500,20,1600,20) 
column3.shapeColor=("green")
column4=createSprite(500,560,1600,20)
column4.shapeColor=("green") 
car=createSprite(200,300,20,20)
car.shapeColor=("green")
width=random(16,42)
car.velocityX=50;
wall=createSprite(1200,300,width,300)
column5=createSprite(1300,200,50,900)
column5.shapeColor=("green")
column4.velocityX=0;
}

function draw(){
  background("black"); 
  if(car.x-wall.x<car.width/2+wall.width/2&&
    wall.x-car.x<car.width/2+wall.width/2&&car.y-wall.y<car.height/2+wall.height/2&&
    wall.y-car.y<car.height/2+wall.height/2&& (wall.width<=30)
     ){
       wall.shapeColor=("red");

       car.velocityX=0;
     
   } 
   if(car.x-wall.x<car.width/2+wall.width/2&&
    wall.x-car.x<car.width/2+wall.width/2&&car.y-wall.y<car.height/2+wall.height/2&&
    wall.y-car.y<car.height/2+wall.height/2&& (wall.width>=30)
     ){
       wall.shapeColor=("green");

       car.velocityX=0;
     
   } 
   
  
  drawSprites();
}