class Rope{

    constructor(body1 , body2 , offsetX , offsetY ){
        this.offsetX=offsetX
        this.offsetY=offsetY

 
        var options={
            bodyA:body1,
            bodyB:body2,
            length:200,
            pointB:{x:this.offsetX , y:this.offsetY}
        }

        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){

        var PointA = this.rope.bodyA.position;
        var PointB = this.rope.bodyB.position;
        strokeWeight(2);

        var chain1x = PointA.x
        var chain1y = PointA.y
        var chain2x = PointB.x+this.offsetX
        var chain2y = PointB.y+this.offsetY
        line(chain1x , chain1y , chain2x , chain2y);
    }

}