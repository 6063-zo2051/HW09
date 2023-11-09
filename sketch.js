let ball;
let floors;
let smiley;
let silly;


function preload() {
  smiley = loadImage('smiley.png');
  silly = loadImage('silly.png');
}

function setup() {
	createCanvas(1175, 1050); 
	world.gravity.y = 200;

	ball = createSprite(50, 10); // create ball object
  //ball.addAni('smiley', 'smiley.png', 3);
  //ball.addAni('silly', 'silly.png', 7);
	ball.diameter = 30;
	ball.y = 10;
  ball.bounciness = 0;
  ball.friction = 0;
  ball.damping = 0.2;

floors = new Group();

createFloor(20, 50, 300, 10, 25);
createFloor(200, 170, 50, 10, -10);
createFloor(250, 300, 70, 10, 20);
createFloor(300, 400, 50, 10, 0);
createFloor(300, 400, 100, 10, 0);
createFloor(140, 220, 100, 10, 30);
createFloor(300, 550, 400, 10, -30);
createFloor(500, 550, 40, 10, 20);
createFloor(550, 650, 200, 10, -40);
createFloor(700, 750, 150, 10, 40);
createFloor(820, 650, 300, 10, 0);
createFloor(900, 850, 100, 10, -10);
createFloor(980, 880, 50, 10, 15);
createFloor(600, 970, 900, 10, -5);

}

function createFloor(x, y, w, h, rotation) {
  let floor = new Sprite();
  floor.collider = 'static';
  floor.w = w;
  floor.h = h;
  floor.x = x;
  floor. y = y;
  floor.rotation = rotation;

}

function draw() {
  background(10);

  circle(width - 100, height - 100, 100);
  noStroke();
  fill(0);

  text('GOAL', width - 140, height - 90);
  textSize(30);
  fill(255, 0, 0);
  

  if (keyIsDown(LEFT_ARROW)) { //when left arrow key is pressed move at speed of -3
    ball.vel.x = (-3);
  } else if (keyIsDown(RIGHT_ARROW)) { // when right arrow key is pressed move at speed of 3
    ball.vel.x = (3);
  } else { // otherwise don't move
    ball.vel.x = (0);
  }

  ball.position.x = constrain(ball.position.x, 0, width); // keep ball within window

if (ball.x >= width - 100 && ball.y >= height - 100) {
  window.location.reload();
}

}