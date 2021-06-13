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

// shape attribute
function draw() {
  background(2);
  fill('red')
  // to get the volume or amplitude of the sound
  let level = amplitude.getLevel();
  let diam = map(level, 0, 1, 10, 400);
  ellipse(displayWidth / 2, displayHeight / 2,diam, diam);
  //ellipse(150,150,diam,diam);
}

// to play and stop the sound
function mousePressed(event) {
  if(mySound.isPlaying()) {
    mySound.stop();
  }
  else {
    mySound.play();
  }
}
