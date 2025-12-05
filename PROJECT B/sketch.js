let bgBuildings = [];
let buildings = [];
let sparkles = [];
let toys = [];
let stars = [];
let bubbles = [];

let transformedCount = 0;
let balloonUnlocked = false;
let airplaneUnlocked = false;
let catUnlocked = false;
let cat = null;
let bgMusic;
let musicStarted = false;

function setup() {
  let canvas = createCanvas(1700, 500);
  canvas.parent("p5-canvas-container");
  textFont('Verdana');

  // background buildings
  for (let i = 0; i < 40; i++) {
    let x = i * 40 - random(0, 30);
    let h = random(40, 140);
    bgBuildings.push({ x: x, h: h });
  }

  // interactive buildings
  for (let i = 0; i < 27; i++) {
    let w = int(random(50, 80));
    let h = int(random(160, 400));
    let x = 40 + i * 60 + int(random(-8, 8));
    let y = height - h - 20;
    buildings.push(new Building(x, y, w, h));
  }
}
function preload() {
  bgMusic = loadSound("songb.mp3");
}

function draw() {
  drawSky();
  drawBgBuildings();

  // ground
  noStroke();
  fill(40, 30, 30, 200);
  rect(0, height - 80, width, 80);

  for (let b of buildings) {
    b.display();
    b.checkHover();
  }

  // sparkles
  for (let i = sparkles.length - 1; i >= 0; i--) {
    sparkles[i].update();
    sparkles[i].display();
    if (sparkles[i].isDone()) sparkles.splice(i, 1);
  }

  // toys 
  for (let t of toys) {
    t.update();
    t.display();
  }

  // bubbles
  for (let i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].update();
    bubbles[i].display();
    if (bubbles[i].offScreen()) bubbles.splice(i, 1);
  }

  // stars
  for (let i = stars.length - 1; i >= 0; i--) {
    stars[i].update();
    stars[i].display();
    if (stars[i].collected) stars.splice(i, 1);
  }

  // cat (if unlocked)
  if (catUnlocked && cat) {
    cat.update();
    cat.display();
  }

  // UI hints
  drawHints();
}

function mousePressed() {
  for (let b of buildings) {
    if (b.isDoorClicked(mouseX, mouseY)) {
      if (b.transformed && !catUnlocked) {
        // unlock the cat 
        catUnlocked = true;
        cat = new PixelCat(width / 2, height - 120);
      }
    }
    if (!musicStarted) {
  bgMusic.setVolume(0.5);
  bgMusic.loop(); 
  musicStarted = true;
}

    if (b.isHovered(mouseX, mouseY) && !b.transformed) {
      b.transform();
      transformedCount++;

      // unlock toys 
      if (transformedCount >= 2 && !balloonUnlocked) {
        toys.push(new Balloon(width * 0.2, height * 0.6));
        balloonUnlocked = true;
      }
      if (transformedCount >= 4 && !airplaneUnlocked) {
        toys.push(new Airplane(-60, 120));
        airplaneUnlocked = true;
      }
      // spawn bubbles
      for (let i = 0; i < 6; i++) {
        bubbles.push(new Bubble(b.x + b.w / 2 + random(-20, 20), height - 100 + random(-40, 0)));
      }

      // spawn stars 
      if (transformedCount >= 8) {
        for (let i = 0; i < 6; i++) {
          stars.push(new Star(random(width * 0.2, width * 0.8), random(60, 200)));
        }
      }
    }
  }

  for (let i = toys.length - 1; i >= 0; i--) {
    if (toys[i].isClicked(mouseX, mouseY)) {
      toys[i].onClick();
    }
  }
}


function drawSky() {
  // dark sky
  let t = constrain(map(transformedCount, 0, buildings.length, 0, 1), 0, 1);

  noFill();
  // gradient top to bottom
  for (let y = 0; y <= height; y += 2) {
    let inter = map(y, 0, height, 0, 1);
    let r1 = lerpColor(color(10, 10, 20), color(255, 200, 220), t);
    let r2 = lerpColor(color(30, 40, 60), color(190, 230, 255), t);
    let c = lerpColor(r1, r2, inter);
    stroke(c);
    line(0, y, width, y);
  }

  //  clouds 
  noStroke();
  fill(200, 200, 200, map(1 - t, 0, 1, 40, 180));
  ellipse(width * 0.2, 80, 220, 60);
  ellipse(width * 0.6, 60, 300, 80);
  ellipse(width * 0.8, 120, 160, 40);
}

function drawBgBuildings() {
  push();
  translate(0, 0);
  for (let i = 0; i < bgBuildings.length; i++) {
    let b = bgBuildings[i];
    let x = b.x;
    let h = b.h;
    fill(50, 50, 60, 200);
    rect(x, height - 80 - h, 40, h);
  }
  pop();
}

function drawHints() {
  push();
  fill(255);
  textSize(13);
  textAlign(LEFT);
  if (!catUnlocked) {
    text("Find a door!", 10, 40);
  } else {
    text("Meow meoww!", 10, 40);
  }
  text(`Transformed: ${transformedCount}`, 10, 60);
  pop();
}

class Building {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y; // top-left y
    this.w = w;
    this.h = h;
    this.transformed = false;
    this.baseColor = color(random(40, 80));
    this.colorful = color(random(140, 255), random(120, 255), random(150, 255));
    this.currentColor = this.baseColor;
    this.door = {
      x: this.x + this.w / 2 - 10,
      y: this.y + this.h - 40,
      w: 20,
      h: 30
    };
  }

  display() {
    push();
    noStroke();
    fill(this.currentColor);
    rect(this.x, this.y, this.w, this.h, 4);

    // roof 
    fill(red(this.currentColor) * 0.9, green(this.currentColor) * 0.9, blue(this.currentColor) * 0.9);
    rect(this.x - 4, this.y - 10, this.w + 8, 10, 3);

    // door
    if (this.transformed) {
      fill(80, 40, 110);
      rect(this.door.x, this.door.y, this.door.w, this.door.h, 3);
      // door knob
      fill(255, 200, 0);
      ellipse(this.door.x + this.door.w - 5, this.door.y + this.door.h / 2, 5);
    } else {
      fill(30);
      rect(this.door.x, this.door.y, this.door.w, this.door.h, 3);
    }

    // windows if transformed
    if (this.transformed) {
      fill(255, 250, 200, 200);
      for (let i = 0; i < 4; i++) {
        rect(this.x + 8, this.y + 20 + i * 45, 16, 20, 2);
        rect(this.x + this.w - 26, this.y + 20 + i * 45, 16, 20, 2);
      }
    } else {
      // windows
      fill(20);
      for (let i = 0; i < 3; i++) {
        rect(this.x + 10, this.y + 30 + i * 60, 10, 12);
      }
    }
    pop();
  }

  checkHover() {
    if (this.isHovered(mouseX, mouseY)) {
      // sparkles
      if (frameCount % 6 === 0) {
        sparkles.push(new Sparkle(mouseX + random(-6, 6), mouseY + random(-6, 6)));
      }
    }
  }

  isHovered(mx, my) {
    return mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h;
  }

  isDoorClicked(mx, my) {
    return mx > this.door.x && mx < this.door.x + this.door.w &&
           my > this.door.y && my < this.door.y + this.door.h;
  }

  transform() {
    this.transformed = true;
    this.currentColor = this.colorful;
    if (random(1) < 0.5) {
      toys.push(new Balloon(this.x + this.w / 2 + random(-30, 30), this.y + random(20, 60)));
    }
  }
}

class Sparkle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.alpha = 220;
    this.size = random(3, 8);
    this.vx = random(-0.5, 0.5);
    this.vy = random(-1.2, -0.3);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 3;
  }

  display() {
    noStroke();
    fill(255, 220, 120, this.alpha);
    ellipse(this.x, this.y, this.size);
  }

  isDone() {
    return this.alpha <= 0;
  }
}

// Balloon toy
class Balloon {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(22, 36);
    this.vy = random(-0.2, -0.7);
    this.floatOffset = random(0, 1000);
    this.popped = false;
  }

  update() {
    if (!this.popped) {
      this.y += this.vy + sin((frameCount + this.floatOffset) * 0.02) * 0.3;
      if (this.y < 30) this.y = height - random(60, 120);
    }
  }

  display() {
    push();
    noStroke();
    if (!this.popped) {
      fill(255, 120, 170, 220);
      ellipse(this.x, this.y, this.r, this.r * 1.2);
      // string
      stroke(255, 220);
      line(this.x, this.y + this.r * 0.6, this.x, this.y + this.r * 1.8);
    } else {
      // popped little fragments
      fill(255, 200, 200, 160);
      for (let i = 0; i < 6; i++) {
        rect(this.x + random(-8, 8), this.y + random(-8, 8), 3, 6);
      }
    }
    pop();
  }

  isClicked(mx, my) {
    let d = dist(mx, my, this.x, this.y);
    return d < this.r;
  }

  onClick() {
    this.popped = true;
    for (let i = 0; i < 8; i++) {
      sparkles.push(new Sparkle(this.x + random(-10, 10), this.y + random(-10, 10)));
    }
    let self = this;
    setTimeout(() => {
      let idx = toys.indexOf(self);
      if (idx >= 0) toys.splice(idx, 1);
    }, 400);
  }
}

class Airplane {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(1.8, 3.2);
    this.amp = random(8, 22);
    this.phase = random(0, 1000);
  }

  update() {
    this.x += this.vx;
    this.y += sin((frameCount + this.phase) * 0.04) * 0.6;
    if (this.x > width + 60) {
      this.x = -60;
      this.y = random(80, 260);
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(240);
    beginShape();
    vertex(-20, 0);
    vertex(20, 0);
    vertex(0, 6);
    endShape(CLOSE);
    pop();
  }

  isClicked(mx, my) {
    let d = dist(mx, my, this.x, this.y);
    return d < 20;
  }

  onClick() {
    this.vx += 1.2;
  }
}

class Bubble {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = random(8, 18);
    this.vy = random(-0.6, -1.4);
    this.alpha = 200;
  }

  update() {
    this.y += this.vy;
    this.alpha -= 0.6;
  }

  display() {
    noFill();
    stroke(220, 220, 255, this.alpha);
    ellipse(this.x, this.y, this.r * 2);
  }

  offScreen() {
    return this.y < -30 || this.alpha <= 0;
  }
}

// Star collectible
class Star {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.collected = false;
    this.size = random(8, 16);
    this.vy = 0.2;
  }

  update() {
    this.y += this.vy;
    if (catUnlocked && cat) {
      let d = dist(this.x, this.y, cat.x, cat.y);
      if (d < 28) {
        this.collected = true;

        for (let i = 0; i < 6; i++) {
          sparkles.push(new Sparkle(this.x + random(-8, 8), this.y + random(-8, 8)));
        }
      }
    }
  }

  display() {
    push();
    noStroke();
    fill(255, 240, 120);
    translate(this.x, this.y);

    rectMode(CENTER);
    rect(0, 0, this.size, this.size / 3);
    rect(0, 0, this.size / 3, this.size);
    pop();
  }
}

class PixelCat {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 28;
    this.h = 24;
    this.vx = 0;
    this.vy = 0;
    this.onGround = true;
    this.facing = 1; 
    this.speed = 5;
    this.jumpPower = -6;
  }

  update() {

    if (keyIsDown(LEFT_ARROW)) {
      this.vx = -this.speed;
      this.facing = -1;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.vx = this.speed;
      this.facing = 1;
    } else {
      this.vx = 0;
    }


    if (keyIsDown(UP_ARROW) && this.onGround) {
      this.vy = this.jumpPower;
      this.onGround = false;
    }

    this.vy += 0.3; 
    this.x += this.vx;
    this.y += this.vy;

    let groundY = height - 80; 
    if (this.y + this.h / 2 >= groundY) {
      this.y = groundY - this.h / 2;
      this.vy = 0;
      this.onGround = true;
    }

    this.x = constrain(this.x, 10, width - 10);

    for (let i = toys.length - 1; i >= 0; i--) {
      let t = toys[i];
      if (t instanceof Balloon) {
        let d = dist(this.x, this.y, t.x, t.y);
        if (d < 30) {
          t.onClick();
        }
      }
      if (t instanceof Airplane) {
        let d2 = dist(this.x, this.y, t.x, t.y);
        if (d2 < 28) {
          t.vx += 0.8; 
        }
      }
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    scale(this.facing, 1);
//cat
    noStroke();
    // body
    fill(201, 195, 162);
    rectMode(CENTER);
    ellipse(-10,+5,35,25)
    // head
    fill(235, 228, 191)
    ellipse(0,-10,30,20)
    // ears
    fill(87, 69, 18);
    triangle(-18, -22, -14, -30, -8, -20);
    triangle(-2, -22, 2, -30, 8, -20);
    // eyes
    fill(232, 196, 15)
     circle(+9,-10,11)
    circle(-9,-10,11)
    fill(255);
    circle(+9,-10,10)
    circle(-9,-10,10)
    fill(10);
    circle(+9,-10,7)
    circle(-9,-10,7)
    //nose
    fill(87, 69, 18)
    ellipse(0,-8,3.5,2.5)
    // tail
    fill(87, 69, 18);
    rect(-30, -12, 7, 18, 3);
    pop();
  }
}
