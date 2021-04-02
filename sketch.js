//Create variables here

var dog1
var WAITING = 10
var HAPPY = 6
var gameState = WAITING
var food = 40
var val
var score = 0




function preload()
{
	//load images here
}

function setup() {
	createCanvas(1000,1000)
  database = firebase.database()
  dog1 = new Dog(500,600,20,20)
  var foodref = database.ref("food")
  foodref.on("value", readPosition,writeStock)
  

  
  
}


function draw() {  

  background("green")


 
 

  drawSprites();
  //add styles here
 

  fill("purple")
  textSize(27)
  text("food:" + food,450,450)

  fill("red")
  textSize(27)
  text('Note:Press the UP_ARROW key to feed Draco the milk',200,100)

  


   if(gameState == WAITING)
   {

       if(keyDown(UP_ARROW))
          {
            dog1.happyDog()
            gameState = HAPPY
            writeStock(food - 1)
           
          }

   }
   if(gameState == HAPPY)
   {
   console.log("my text has been rendered")

    textSize(20)
    text("the dog is happy",450,300)

     if(frameCount%300 == 0)
     {
       dog1.waitingDog()

       gameState = WAITING
     }


   }
  }
function readPosition(data)
{
  console.log("My new value", data.val())
  food = data.val()
}
function writeStock(milk)
{
   database.ref("/").set({
     "food":milk
   })
}

