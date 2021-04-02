class Dog
{
  constructor(x,y,w,h)
  {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    
    

   this.waitimage = loadImage("dogImg.png")



   this.happyimage = loadImage("dogImg1.png")

   this.sprite = createSprite(this.x,this.y,this.w,this.h)
 



    this.waitingDog()

  }

  happyDog()
  {
    console.log("Inside happyDog")
      

      this.sprite.addImage("dog", this.happyimage)

      this.sprite.scale = 0.2
  }

  waitingDog()
  {
    

    this.sprite.addImage("dog",this.waitimage)

    this.sprite.scale = 0.2
  }


}