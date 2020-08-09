class String{
    constructor(pointA, bodyB){
        var options = {
            pointA: pointA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 150
        }
        this.bodyB = bodyB;
        this.pointA = pointA;
        this.string = Constraint.create(options);
        World.add(world, this.string);
        }

    display(){

        if(this.string.pointA){
        var pointA = this.pointA;
        var pointB = this.string.bodyB.position;
        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }        
    }
    
    /*fly(){
        this.string.bodyA = null;
    }*/
}
