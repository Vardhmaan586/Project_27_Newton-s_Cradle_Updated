class Bob{
    constructor(x,y,radius){

        var options = {
            isStatic:false,
           restitution:1.1,
            friction:0.5,
           density:0.2,
        }
    
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    
    display(){
    
       push();
       var pos = this.body.position;
       var radius = this.radius;
       ellipseMode(RADIUS);
       circle(pos.x,pos.y,radius);
    
       pop();
    
    }

}