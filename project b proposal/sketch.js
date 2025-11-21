let buildings = [];

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
 
  // create building
  for (let i = 0; i < 12; i++) {
    buildings.push(
      new Building(
        65 * i + 20,         // x 
        random(150, 280),      // height
        60                    // width
      )
    );
  }
}

function draw() {
  background(0); 

  // ground
  fill(30);
  rect(0, 350, width, 150);

  // show buildings
  for (let b of buildings) {
    b.show();
  }
}

function mousePressed() {
  for (let b of buildings) {
    b.checkClick();
  }
}

class Building {
  constructor(x, h, w) {
    this.x = x;
    this.w = w;
    this.h = h;
    this.colored = false;
  }

  show() {
    if (this.colored) {
      fill(random(180,255), random(150,255), random(180,255));
    } else {
      fill(30);
    }

    // building 
    rect(this.x, 350 - this.h, this.w, this.h);

//windows
    if (this.colored) {
      fill(255);
      // windows 
      rect(this.x + 10, 350 - this.h + 20, 15, 15);
      rect(this.x + 35, 350 - this.h + 60, 15, 15);
      rect(this.x + 20, 350 - this.h + 100, 15, 15);
    }
  }

  checkClick() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY < 350 &&
      mouseY > 350 - this.h
    ) {
      this.colored = true;
    }
  }
}