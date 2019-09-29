function Ammo(xpos) {
  this.xpos = xpos;
  this.ypos = height - 50;

  this.show = function () {
    fill(255);
    rectMode(CENTER);
    rect(this.xpos, this.ypos, 3, 10);
  }

  this.move = function () {
    this.ypos -= 5;
  }
}