class paper{
    constructor(x, y, radius, height) {
         var options = { 
             'restitution':1,
          'friction':0.3, 
          'density':1.0 }
          this.body=Bodies.circle(x, y, radius, [options]) 
         this.radius = radius;
            World.add(world, this.body); } 
            display(){ 
                var pos =this.body.position; 
                var angle=this.body.angle
                push()
                translate(pos.x,pos.y)
                rotate(angle)
                rectMode(CENTER);
                 fill(255);
                  rect(0, 0, this.width, this.height);
                  pop()
                   }
                   };
