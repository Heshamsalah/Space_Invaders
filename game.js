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
var starPositionsX;
var StarPositionsY;

var numStars;

var emit;

var spread;

// function preload() {
//   // soundFormats('mp3', 'wav');
  
//   // music = loadSound('assets/Sounds/444765__richheard__pulse-build.wav');
//   // fireSound = loadSound('assets/Sounds/151022__bubaproducer__laser-shot-silenced.wav');
//   // impactSound = loadSound('assets/Sounds/388528__eflexmusic__artillery-explosion-close-mixed.wav');
//   // gameOverSound = loadSound('assets/Sounds/173859__jivatma07__j1game-over-mono.wav');
  
//   // gameOn = true;
//   // impact = false;
//   // pointY = height/4;
//   // gameOver = false;
// }



function drawStars() {
  for(var i = 0; i < numStars; i++) {
      fill(255, 155, 205, 100);
      ellipse(starPositionsX[i], StarPositionsY[i], 5, 5);
    }
}

function setup() {
  createCanvas(800, 600);
  
  // if (gameOn == true) {
    //   music.play(); 
    // }
    
  invaderImg = loadImage("assets/Images/Invader1.png");
  invader2Img = loadImage("assets/Images/Invader2.png");
  spaceshipImg = loadImage("assets/Images/spaceship.png");

  starPositionsX = [];
  StarPositionsY = [];
  numStars = 500;
  
  for(var i = 0; i < numStars; i++)
      {
          starPositionsX.push(random(0, width));
          StarPositionsY.push(random(0, height));
      }
  
  spread = random( -1.7, 1);
  
  emit = new Emitter(width/2, height/2, 0, spread + 0.1, 100, color(200, 0, 100, 20));
  
  // Populate array of particles, takes # of particles and lifetime as arguments
  
  emit.startEmitter(20, 5000);
  
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
  background(10);
  emit.updateParticles();
  drawStars();
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