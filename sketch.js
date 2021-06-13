let mySound;
let amplitude;

function preload() {
  mySound = loadSound('music.mp3');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  console.log(displayWidth);
  console.log("setup");
  amplitude = new p5.Amplitude();
}

function draw() {
  background(2);
  fill('red')
  let level = amplitude.getLevel();
  let diam = map(level, 0, 1, 10, 400);
  //ellipseMode(CENTER);
  ellipse(displayWidth / 2, displayHeight / 2,diam, diam);
  //ellipse(150,150,diam,diam);
}

function mousePressed(event) {
  if(mySound.isPlaying()) {
    mySound.stop();
  }
  else {
    mySound.play();
  }
}
