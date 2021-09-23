class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 225;
        World.add(world, this.body);
      }
      display(){
        push();
        var pos = this.body.position;
        var angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill('blue');
        rect(0, 0, this.width, this.height);
        
        pop();
         //  else {
          //push();
          //this.visibility =  this.visibility -5;
          //pop();
          //World.remove(world, this.body);
        
    //}
}
  };