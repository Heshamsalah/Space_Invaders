function Invader(x, y) {
  this.x = x;
  this.y = y;
  this.vec = createVector(this.x, this.y)
  this.image = random([invaderImg, invader2Img]);
  this.xdir = 1;
  this.ydir = 0;

  this.move = function() {
    this.x += this.xdir;
    this.y += this.ydir;
    this.vec.x += this.xdir;
    this.y += this.ydir;
  }

  this.moveDown = function() {
    this.xdir *= -1;
    this.vec.y += 10;

  }

  this.show = function() {
    push();
    image(this.image, this.vec.x, this.vec.y, 20, 20);
    pop();
  }
}