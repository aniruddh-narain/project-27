class Bob{
    constructor(x,y){
         var options = {
             restitution:1,
             friction:0.4,
             density:1
         }
         this.body = Bodies.circle(x,y,30,options);
         //this.width = width;
         //this.height = height;
         World.add(world,this.body);
    }
 
    display(){
        push ();
        ellipseMode (RADIUS);
        ellipse (this.body.position.x,this.body.position.y,30,30);
        pop ();
    }
 }
 