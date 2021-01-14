class Bob {
    constructor(x, y, r) {
        var options = {
            isStatic:false,
            restitution:1.3,
            friction:0.5,
            density:50
        }

        this.x=x;
        this.y=y;
        this.r=r

        this.body = Bodies.circle( this.x, this.y, this.r, options);
        World.add(world,this.body);

      }
      display(){
        var pos =this.body.position;
        
        fill(255,0,254)
        ellipse( pos.x,pos.y,this.r*2,this.r*2);
      }
      
    };
