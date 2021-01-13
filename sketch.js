//Create variables here
var dog, happydog, database, foodS, foodStock;
var dogImage, happydogImage;

function preload()
{
  //load images here
  happydogImage = loadImage("dogImg1.png");
  dogImage = loadImage("dogImg.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);

   dog = createSprite(250,250);
   dog.addImage(dogImage);
   dog.scale = 0.5;

   foodStock = database.ref('food');
   foodStock.on("value", readStock);
  
}


function draw() {  
  background(46, 139, 87);

  if(foodStock !== undefined){
    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(happydogImage);
    }



    drawSprites();
}
  //add styles here
  textSize(20);

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<0)
    x=0;
  else
    x = x-1;

  database.ref('/').update({
    food: x
  })
}


