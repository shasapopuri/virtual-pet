class food{

     

    constructor(){
      this.lastFed;
      this.image=loadImage("Milk.png")
    }

    getFoodStock(){
        var foodStockRef=Database.ref('food');
        foodStockRef.on("value",function(data){
            foodStockCnt =data.val()
        } )
     }

     update(food){
        Database.ref('/').update({
            food:food
        })

    }

    deduct(){
        
    }
    

    display(){
        var x=80,y=100;
        imageMode(CENTER);
        image(this.image,720,220,70,70);
        if(foodStockCnt!=0){
          for(var i=0;i<foodStockCnt;i++){
              if(i%10==0){
                  y=y+50;
                  x=80;
              }
          

          image(this.image,x,y,50,50);
          x=x+30;
            }

        }
    }

}