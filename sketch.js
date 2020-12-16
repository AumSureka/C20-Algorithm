var movingrect;
var fixedrect;

function setup() {
  createCanvas(800,400);

  movingrect = createSprite(600,400,50,80);
  movingrect.shapeColor = "orange"

  fixedrect = createSprite(500,200,80,40);
  fixedrect.shapeColor = "red";
  
}

function draw() {
background("black");

movingrect.x = World.mouseX;
movingrect.y = World.mouseY;

if (movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 &&
  fixedrect.x - movingrect.x <  movingrect.width/2 + fixedrect.width/2 &&
  movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 &&
  fixedrect.y - movingrect.y <  movingrect.height/2 + fixedrect.height/2)
{
fixedrect.shapeColor = "red";
movingrect.shapeColor = "red"

}
   else    
{
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";
}   
 drawSprites();    
        
}   