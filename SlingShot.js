class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.08,
            length: 10
        }
        //this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

   
    fly(){ this.sling.bodyA = null; }
    display(){ if(this.sling.bodyA){
         var pointA = this.sling.bodyA.position;
          line(pointA.x, pointA.y, this.sling.pointB.x,this.sling.pointB.y );
         }
              }
}