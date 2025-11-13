// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 500; // Decide the initial number of particles.
let MAX_OF_PARTICLES = 600; // Decide the maximum number of particles.
//let xarr= []

let particles = [];

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
}

function draw() {
  background(0);

  // consider generating particles in draw(), using Dynamic Array

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
  }

  // limit the number of particles
  if (particles.length > MAX_OF_PARTICLES) {
    particles.splice(0, 1); // remove the first (oldest) particle
  }
}

class Particle {
  // constructor function
  constructor(startX,startY) {
    // properties (variables): particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = random(1,10);
    this.speed = random(1,3)
    this.xOffset = random(1000)
  }
  // methods (functions): particle's behaviors
  update() {
this.y += this.speed
this.x += map(noise(this.xOffset + frameCount * 0.01), 0, 1, -1, 1);
if (this.y > height){
  this.y = 1
  this.x = random(width)
}
  }
  display(x,) {
    // particle's appearance
    push();
    translate(this.x, this.y);

    circle(this.x, this.y, this.dia);

    pop();
  }
}
