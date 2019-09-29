function Spaceship(xpos, ypos) {
  this.xpos = xpos;
  this.ypos = ypos;

  this.vec = createVector(this.xpos, this.ypos - 10);
  this.image = spaceshipImg;


  this.show = function () {
    push();
    image(this.image, this.vec.x, this.vec.y, 50, 50);
    pop();
  }

  this.move = function (direction) {
    switch(direction) {
      case 'left':
        this.vec.x -= 10;
        break;
      case 'right':
        this.vec.x += 10;
        break;
    }
  }

  this.fire = function () {
    return new Ammo(this.vec.x);
  }
}