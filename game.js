var ship;
var shot;

var music;
var fireSound;
var impactSound;
var gameOverSound;
var gameOn;
var impact;
var pointY;
var gameOver;

var invaders = [];

function preload() {
  // soundFormats('mp3', 'wav');
  
  // music = loadSound('assets/Sounds/444765__richheard__pulse-build.wav');
  // fireSound = loadSound('assets/Sounds/151022__bubaproducer__laser-shot-silenced.wav');
  // impactSound = loadSound('assets/Sounds/388528__eflexmusic__artillery-explosion-close-mixed.wav');
  // gameOverSound = loadSound('assets/Sounds/173859__jivatma07__j1game-over-mono.wav');
  
  gameOn = true;
  impact = false;
  pointY = height/4;
  gameOver = false;
}


function setup() {
  createCanvas(600, 600);
  
  // if (gameOn == true) {
    //   music.play(); 
    // }
    
  invaderImg = loadImage("assets/Images/invader.png");
  invader2Img = loadImage("assets/Images/invader2.png");
  spaceshipImg = loadImage("assets/Images/spaceship.png");
    
  ship = new Spaceship(width/2, 570);

  for (i = 0; i < 5; i++) {
    if (!invaders[i]) {
      invaders[i] = [];
    }
    for (j = 0; j < 10; j++) {
      invaders[i][j] = new Invader(j * (width / 13) + 10, i * 35);
    }
  }
}

function draw() {
  background(0);
  ship.show();
  if (shot) {
    shot.show();
    shot.move();
  }

  // for( var i = 0; i < shots.length; i++){
  //   shots[i].show();
  //   shots[i].move();
  // }

  let hitEdge = false;
  for (i = 0; i < invaders.length; i++) {
    for (j = 0; j < 10; j++) {
      invaders[i][j].show();
      invaders[i][j].move();
      if (invaders[i][j].x >= width || invaders[i][j].x === 0) {
        hitEdge = true;
      }
    }
  }
  if (hitEdge) {
    for (i = 0; i < invaders.length; i++) {
      for (j = 0; j < 10; j++) {
        invaders[i][j].moveDown();
      }
    }
  }
}

function keyPressed() {
  switch(keyCode) {
    case LEFT_ARROW:
      ship.move('left');
      break;
    case RIGHT_ARROW:
      ship.move('right');
      break;
    case 32:
      shot = ship.fire();
      // fireSound.play();
      break;
  }
}