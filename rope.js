class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){

        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y:this.offsetY},
            length:400
        }
        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope);
        console.log(offsetX)
        console.log(offsetY)

    }

    display(){

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        push();
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x+this.offsetX, pointB.y+this.offsetY);
        pop();
    }
    
}
