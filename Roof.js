class Roof{
    constructor(x,y,width,height){
    

        var RoofOptions = {
            isStatic : true
          }
    
        this.body = Bodies.rectangle(x,y,width,height,RoofOptions);
    
        this.width = width;
        this.height = height;
    
        World.add(world,this.body);
    }
    
    //function
    
    display(){


     push();
       fill("brown");
        var pos = this.body.position;
       rectMode(CENTER);
       rect(pos.x,pos.y,this.width,this.height);
       pop();
    }

}