class Chain{
   constructor(BodyA,BodyB,offsetX,offsetY){

   this.offsetX = offsetX
   this.offsetY = offsetY
   
   var options = {
       bodyA : BodyA,
       bodyB : BodyB,
       pointB:{x:this.offsetX,y:this.offsetY}
      /* length : 25,
       stiffness : 0.008*/
   }

    this.chain = Constraint.create(options);
    World.add(world,this.chain);

}

   display(){
       
       push();
       var pointA = this.chain.bodyA.position;
       var pointB = this.chain.bodyB.position;

       var Anchor1X = pointA.x;
       var Anchor1Y = pointA.y;

       var Anchor2X = pointB.x+this.offsetX;
       var Anchor2Y = pointB.y+this.offsetY;
       
       strokeWeight(10);
       stroke("black");

       line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
       pop();
   }

}