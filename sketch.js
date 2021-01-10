//Create variables here
var dog, happyDog, Database, foodS, foodStock,dogImg;
var FeedThePet,addFood;
var fedTime, lastFed;
var foodObj;
var foodStockCnt = 0;


function preload()
{
  //load images here
  happyDog=loadImage("dogImg1.png");
  dogImg=loadImage("dogImg.png");
  

}

function setup() {
  createCanvas(1000, 1000);
  dog=createSprite(4500,1000,10,10);
  Database = firebase.database();
  fedTime=Database.ref('fedtime')
  fedTime.on("value",function(data){
    lastFed.data.val();
  })
  
  FeedThePet=createButton("Feed the dog");
  FeedThePet.position(700,95)
  FeedThePet.mousePressed(feedDog)

  addFood=createButton("Add Food")
  addFood.position(800,95)
  addFood.mousePressed(AddFood)

  foodObj=new food();
  foodObj.getFoodStock();

}


function draw() {  
 background(rgb(46, 139, 87));

 scale(0.2);
 dog.addImage(dogImg);

fill(255,255,254);
textSize(15)
if(lastFed>=12){
text("lastFeed:"+lastFed%12 + "PM",350,30)
}else if(lastFed==0){
text("LastFeed : 12AM",350,30)
}else{
  text('last Feed : ' + lastFed + 'AM')
}

 foodObj.display();
 

  drawSprites();

 
}


function feedDog(){
  dog.addImage(happyDog);

  foodObj.update(foodObj.getFoodStock()-1);
  Database.ref('/').update({
    food:foodObj.getFoodStock(),
    fedTime:hour()
  })
}

function AddFood(){
  foodS++;

  Database.ref('/').update({
    food:foodS
  })
}
