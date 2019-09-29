function Spaceship(xpos, ypos) {
  this.xpos = xpos;
  this.ypos = ypos;

  this.show = function () {
    fill(255);
    rectMode(CENTER);
    rect(this.xpos, this.ypos, 50, 50);
  }

  this.move = function (direction) {
    switch(direction) {
      case 'left':
        this.xpos -= 10;
        break;
      case 'right':
        this.xpos += 10;
        break;
    }
  }
}