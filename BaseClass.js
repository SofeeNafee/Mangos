class BaseClass{
    constructor(x, y, r,prop) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:prop
        }
        this.body = Bodies.circle(x, y, r, options);
        this.width = r;
        this.height = r;
        this.image = loadImage("sprites/stone.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}