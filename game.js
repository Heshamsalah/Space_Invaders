var ship;

function setup() {
  createCanvas(600, 600);
  ship = new Spaceship(width/2, 570);
}

function draw() {
  background(0);
  ship.show();
}

function keyPressed() {
  switch(keyCode) {
    case LEFT_ARROW:
      ship.move('left');
      break;
    case RIGHT_ARROW:
      ship.move('right');
      break;
  }
}