let buildings = [];
let sparkles = [];
let toys = [];
let transformedCount = 0;
let balloonUnlocked = false;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

    //buildings
  for (let i = 0; i < 9; i++) {
    let w = 80;
    let h = random(200, 350);
    let x = 50 + i * 110;
    let y = height - h;
    buildings.push(new Building(x, y, w, h));
  }
}

function draw() {
  background(30);

  // Draw buildings
  for (let b of buildings) {
    b.display();
    b.checkHover();
  }

  // Draw sparkles
  for (let i = sparkles.length - 1; i >= 0; i--) {
    sparkles[i].update();
    sparkles[i].display();
    if (sparkles[i].isDone()) sparkles.splice(i, 1);
  }

  // Draw toys
  for (let t of toys) {
    t.update();
    t.display();
  }
}

function mousePressed() {
  for (let b of buildings) {
    if (b.isHovered(mouseX, mouseY) && !b.transformed) {
      b.transform();
      transformedCount++;

      // unlock balloon after 3 buildings 
      if (transformedCount >= 3 && !balloonUnlocked) {
        toys.push(new Balloon(width/2, height/2));
        balloonUnlocked = true;
      }
    }
  }
}

class Building {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.grey = color(120);
    this.colorful = color(random(100,255), random(100,255), random(100,255));
    this.currentColor = this.grey;

    this.transformed = false;
    this.hoverActive = false;
  }

  display() {
    fill(this.currentColor);
    rect(this.x, this.y, this.w, this.h);

    // windows 
    if (this.transformed) {
      fill(255, 255, 180);
      for (let i = 0; i < 5; i++) {
        rect(this.x + 15, this.y + 20 + i*40, 20, 20);
        rect(this.x + 45, this.y + 20 + i*40, 20, 20);
      }
    }
  }

  checkHover() {
    if (this.isHovered(mouseX, mouseY)) {
      // show sparkles 
      if (frameCount % 5 === 0) {
        sparkles.push(new Sparkle(mouseX, mouseY));
      }
    }
  }

  transform() {
    this.transformed = true;
    this.currentColor = this.colorful;
  }

  isHovered(mx, my) {
    return mx > this.x && mx < this.x + this.w &&
           my > this.y && my < this.y + this.h;
  }
}

class Sparkle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.alpha = 255;
  }

  update() {
    this.y -= 1;
    this.alpha -= 4;
  }

  display() {
    noStroke();
    fill(255, 200, 0, this.alpha);
    circle(this.x, this.y, 7);
  }

  isDone() {
    return this.alpha <= 0;
  }
}

class Balloon {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 1;
  }

  update() {
    this.y -= this.speed;
    if (this.y < -50) this.y = height + 50; // loop
  }

  display() {
    noStroke();
    fill(255, 120, 150);
    ellipse(this.x, this.y, 60, 80);

    stroke(255);
    line(this.x, this.y + 40, this.x, this.y + 110);
  }
}