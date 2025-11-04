/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");
    noStroke();

  // ...except to adjust the dancer's name on the next line:
  dancer = new MargadDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class MargadDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    //..
    //..
    
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.angle = sin(frameCount * 0.2) * 0.3;

  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

push()
   //rotate(frameCount * 0.05)
      // BODY
      translate()
    fill(209, 9, 31);
    ellipse(0, +15, 70, 20);
    fill(255, 0, 32);
    ellipse(0, 0, 70, 50);
    fill(240, 226, 184);
    ellipse(0, +15, 50, 20);

    // EYES
    fill(0);
    circle(-17, +8, 10);
    circle(+17, +8, 10);
    fill(255);
    circle(-19, +6, 5);
    circle(+15, +6, 5);
    fill(0, 180);
    arc(-17, +2, 30, 30, 0, PI);
    arc(+17, +2, 30, 30, 0, PI);
    rect(-3, +2, 6, 5);

    // MOUTH
    fill(0);
    arc(0, +15, 10, 10, 0, PI);

    // LEGS
    fill(184, 6, 25);
    push();
    translate(-25, 30);
    rotate(this.angle);
    arc(0, 0, 30, 20, PI, 0);
    pop();

    push();
    translate(+25, 30);
    rotate(-this.angle);
    arc(0, 0, 30, 20, PI, 0);
    pop();
    pop()

    // ARMS
      fill(184, 6, 25);
    arc(-38, -22, 18, 15, 0, PI);
    arc(+38, -22, 18, 15, 0, PI);
    push();
    translate(-35, -30);
    rotate(-this.angle);
    arc(0, 0, 20, 30, PI + HALF_PI, PI - HALF_PI);
    pop();

    push(); 
    translate(-40, - 30);
    rotate(this.angle);
    arc(0, 0, 20, 30, PI - HALF_PI, PI + HALF_PI);
    pop();

    push();
    translate(+35, -30);
    rotate(this.angle);
    arc(0, 0, 20, 30, PI - HALF_PI, PI + HALF_PI);
    pop();

    push();
    translate(+40, -30);
    rotate(-this.angle);
    arc(0, 0, 20, 30, PI + HALF_PI, PI - HALF_PI);
    pop();

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/