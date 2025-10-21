let xPos = 200;
let yPos = 200;
let a = 800;
let b = 100;
let a2 = 1;
let b2 = 300;
let a3 = 260;
let b3 = 100;
let frogSpeed = 1;
let xtPos = 770;
let ytPos = 200;
let speed = 4;
let a4 = 200;
let b4 = 200;
let a5 = 200;
let b5 = 200;
let a6 = 630;
let b6 = 340;
let a7 = 1;
let b7 = 300;
let a8 = 400
let b8 = 250
let xt1Pos = 20;
let yt1Pos = 400;

let tomatoSize = 1;
let tomatoAlpha = 255;
let TVColor = (51, 179, 70);
let hatSparkle = false;
let sparkleTimer = 1;



function setup() {
  let canvas = createCanvas (800,500)
  canvas.parent("p5-canvas-container")
  x = width / 2;
  y = height / 2;
}
function draw() {
  background(52, 78, 65);

  //background
  drawTomato(xtPos, ytPos);
  drawTomato(xtPos + 20, ytPos);

  drawBush(a4, b4);
  drawBush(a4 - 100, b4 + 100);
  drawBush(a4 - 200, b4 - 150);
  drawBush(a4 + 100, b4 + 200);
  drawBush(a4 + 200, b4 - 150);
  drawBush(a4 - 100, b4 + 200);
  drawBush(a4 + 90, b4 - 200);
  drawBush(a4 + 150, b4 + 150);
  drawBush(a4 - 200, b4 + 200);
  drawBush(a4 - 150, b4 + 15);
  drawBush(a4 - 150, b4 - 100);
  drawBush(a4 + 200, b4 + 47);
  drawBush(a4 - 350, b4 + 230);
  drawBush(a4 + 450, b4 + 305);
  drawBush(a4 + 550, b4 + 200);
  drawBush(a4 + 400, b4 + 47);
  drawBush(a4 + 350, b4 + 150);
  drawBush(a4 + 380, b4 - 120);
  drawBush(a4 + 55, b4 + 300);
  drawBush(a4 + 105, b4 + 480);
  drawBush(a4 - 95, b4 + 250);
  drawBush(a4 + 205, b4 + 250);
  drawBush(a4 + 470, b4 + 147);
      drawleaves(a8,b8)
    drawleaves(a8 + 200,b8 - 100)
    drawleaves(a8 + 70,b8 - 180)
    drawleaves(a8 + 360,b8 - 170)
    drawleaves(a8 - 100,b8 - 150)
    drawleaves(a8 - 300,b8 - 130)
    drawleaves(a8 - 300,b8 + 130)
    drawleaves(a8 + 300,b8 + 250)
    drawleaves(a8 + 30,b8 + 250)
    drawleaves(a8 + 370,b8 + 100)
    drawleaves(a8 - 330,b8 + 230)
    drawleaves(a8 - 230,b8 + 250)
  drawFlower(a5 + 40, b5 - 15);
  drawFlower(a5 - 550, b5 - 200);
  drawFlower(a5 - 550, b5 + 200);
  drawFlower(a5 + 500, b5 - 120);
  drawFlower(a5 + 300, b5 - 100);

  drawApple(xt1Pos, yt1Pos);
  drawApple(xt1Pos - 20, yt1Pos);
  
  drawMouseTomato(mouseX+20, mouseY+10)
  
    //TV
  push()
  stroke(61, 62, 79)
  strokeWeight(5)
  line(200, 15, 190, 75);
  line(170, 15, 200, 50);
  noStroke()
  fill(49, 50, 64)
  rect(150,40,70,60, 5)
  fill(TVColor)
  rect(160,50,50,40,2)
  pop()

//   remote flower
  // the hue
      fill(230, 0, 73, 30);
  circle(603, 42, 40);
  circle(593, 60, 40);
  circle(613, 60, 40);
  fill(255, 244, 0, 30);
  circle(603, 53, 44);
  //theflower
  fill(230, 0, 73);
  circle(603, 42, 20);
  circle(593, 60, 20);
  circle(613, 60, 20);
  fill(255, 221, 0);
  circle(603, 53, 14);

  //draw poster
  fill(89, 51, 11);
  quad(30, 30, 40, 40, 30, 105, 20, 105);
  fill(112, 62, 35);
  quad(30, 30, 80, 30, 90, 110, 40, 110);
  fill(232, 232, 232);
  quad(40, 40, 75, 40, 83, 100, 50, 100);
  fill(122, 0, 255);
  quad(40, 40, 75, 75, 83, 100, 50, 100);
  fill(247, 247, 247);
  ellipse(55, 60, 7, 15);
  ellipse(60, 88, 18, 23);
  fill(255);
  ellipse(60, 70, 20, 15);
  fill(255);
  ellipse(51, 60, 7, 15);
  fill(0);
  ellipse(57, 68, 5, 2);
  ellipse(69, 70, 3, 2);
  ellipse(67, 74, 5, 1);
  textSize(9);
  text("Lost hat!", 40, 50);
  text("NEWS", 52, 95);

  //tomato store
  noStroke();
  fill(112, 62, 35);
  rect(760, 153, 8, 50);
  quad(750, 190, 750, 230, 800, 250, 800, 210);
  fill(199, 0, 0);
  quad(750, 150, 800, 110, 800, 130, 767, 160);
  fill(255);
  quad(767, 160, 800, 130, 800, 150, 785, 168);
  fill(199, 0, 0);
  quad(785, 170, 800, 150, 800, 175, 784, 168);

  //apple store
  noStroke();
  fill(112, 62, 35);
  rect(40, 350, 8, 50);
  quad(55, 390, 55, 430, 0, 450, 0, 410);
  fill(199, 0, 0);
  quad(55, 360, 0, 310, 0, 330, 33, 370);
  fill(255);
  quad(33, 370, 0, 330, 0, 350, 15, 380);
  fill(199, 0, 0);
  quad(15, 370, 0, 350, 0, 390, 16, 380);
  
   //  hat Sparkle 
  if (hatSparkle) {
    fill(255, 236, 0);
    ellipse(a6 + 56 + random(-20, 15), b6 + 23 + random(-20, 10), random(2, 7));
    sparkleTimer--;
    if (sparkleTimer <= 0) hatSparkle = false;
  }
  
  drawStatue(a6, b6);
  drawMr(a, b);
  drawMr2(a2, b2);
  drawMr3(a3, b3);
  drawMr4(a7, b7);
  drawHungry(xPos, yPos);
  drawMouseTomato(mouseX+20, mouseY+10)


  //Mr.Hungry move
  xPos += (mouseX - xPos) * 0.08;
  yPos += (mouseY - yPos) * 0.08;

  // Move Mr.3
  if (keyIsDown(LEFT_ARROW)) a3 -= speed;
  if (keyIsDown(RIGHT_ARROW)) a3 += speed;
  if (keyIsDown(UP_ARROW)) b3 -= speed;
  if (keyIsDown(DOWN_ARROW)) b3 += speed;
  
tomatoSize = lerp(tomatoSize, 1, 0.1);
tomatoAlpha = lerp(tomatoAlpha, 255, 0.1);

  //move Mr.1 yellow
  a -= frogSpeed;
  if (a < -60 || a > 860) {
    frogSpeed = -frogSpeed;
  }
  //move Mr.2 red
  a2 = map(noise(frameCount * 0.01), 0, 1, 800, 50);

  b2 -= 2;
  if (b2 < -70) {
    b2 = 520;
  }
  //move Mrs.4
  b7 = map(noise(frameCount * 0.005), 0, 1, 50, 800);

  a7 += 2;
  if (a7 > 850) {
    a7 = -40;
  }
}
function drawHungry(xPos, yPos) {
  push();
  translate(xPos, yPos);
  noStroke();

  let distanceToMouse = dist(xPos, yPos, mouseX, mouseY);
  let breathing = sin(frameCount * 0.05) * 4;
  
  let direction = (mouseX < xPos) ? -1 : 1;
  scale(direction, 1); 

  //right eye
  fill(255);
  circle(+24, 0, 20);

  fill(0);
  circle(+24, 0, 14);

  fill(255);
  circle(+30, 0, 5);

  // body
  fill(134, 230, 255);
  ellipse(0, 0, 60 + breathing, 50 + breathing);

  // left eye
  fill(255);
  circle(+5, 0, 20);

  fill(0);
  circle(+5, 0, 14);

  fill(255);
  circle(+12, -1, 7);

  //eyebrows
  fill(92, 153, 168);
  ellipse(0, -15, 15, 7);

  //hat
  fill(122, 0, 255);
  triangle(
    +14 - breathing,
    -21 - breathing,
    -20 - breathing,
    -60 - breathing,
    -23 - breathing,
    -13 - breathing
  );
  fill(86, 0, 179);
  ellipse(-5 - breathing, -23 - breathing, 15, 7);

  //mouth
  stroke(0);
  line(+10, +15, +22, +14);
  fill(255, 193, 229);
  arc(+18, +15, 7, 12, 0, PI);
  pop();
}
function drawMr(a, b) {
  push();
  translate(a, b);
  noStroke();

  //right eye
  fill(255);
  circle(+22, 0, 20);
  fill(0);
  circle(+22, 0, 14);

  //body
  fill(255, 221, 0);
  ellipse(0, 0, 50, 43);

  // left eye
  fill(255);
  circle(+3, 0, 20);
  fill(0);
  circle(+3, 0, 14);

  //mouth
  stroke(0);
  line(+10, +15, +17, +14);
  pop();
} //yellow
function drawMr2(a2, b2) {
  push();
  translate(a2, b2);
  noStroke();

  //right eye
  fill(255);
  circle(+25, 0, 20);

  fill(0);
  circle(+25, 0, 14);

  //body
  fill(240, 0, 102);
  ellipse(0, 0, 60, 50);

  // left eye
  fill(255);
  circle(+8, 0, 20);

  fill(0);
  circle(+8, 0, 14);

  //mouth
  stroke(0);
  line(+12, +18, +22, +16);
  //moustache
  noStroke();
  fill(74, 40, 4);
  ellipse(+14, +13, 10, 6);
  ellipse(+29, +13, 10, 6);

  pop();
} //red
function drawMr3(a3, b3) {
  push();
  translate(a3, b3);
  noStroke();

  //left eye
  fill(255);
  circle(-25, 0, 20);

  fill(0);
  circle(-25, 0, 14);

  //body
  fill(207, 226, 243);
  ellipse(0, 0, 60, 50);

  // right eye
  fill(255);
  circle(-2, 0, 20);

  fill(0);
  circle(-2, 0, 14);

  //mouth
  stroke(0);
  arc(-18, +11, 7, 12, 0, PI);
  pop();
} //blue
function drawMr4(a7, b7) {
  push();
  translate(a7, b7);
  noStroke();

  //right eyelash
  fill(0);
  ellipse(+27, -10, 4, 10);
  circle(+25, -2, 22);

  //right eye
  fill(255);
  circle(+25, 0, 20);

  fill(0);
  circle(+25, 0, 14);

  //body
  fill(250, 145, 224);
  ellipse(0, 0, 60, 50);

  // left eyelash
  fill(0);
  ellipse(+10, -10, 4, 10);
  ellipse(+5, -10, 4, 10);
  ellipse(0, -8, 4, 10);
  circle(+6, -3, 22);

  // left eye
  fill(255);
  circle(+8, 0, 20);

  fill(0);
  circle(+8, 0, 14);

  //mouth
  stroke(0);
  arc(+20, +11, 5, 7, 0, PI);

  //cheeks
  noStroke();
  fill(255, 95, 216);
  ellipse(+2, +13, 10, 6);
  ellipse(+34, +13, 10, 6);
  pop();
} //pink
function drawTomato(xtPos, ytPos) {
  push();
  translate(xtPos, ytPos);
  fill(201, 0, 40);
  circle(0, 0, 40);
  fill(235, 0, 47);
  circle(+3, -3, 30);
  fill(255);
  ellipse(+8, -8, 10, 6);
  fill(25, 97, 24);
  rect(-3, -30, 7, 15);
  pop();
}
function drawApple(xt1Pos, yt1Pos) {
  push();
  translate(xt1Pos, yt1Pos);
  fill(51, 179, 70);
  circle(0, 0, 40);
  fill(46, 209, 71);
  circle(+3, -3, 30);
  fill(255);
  ellipse(+8, -8, 10, 6);
  fill(25, 97, 24);
  rect(-3, -30, 7, 15);
  pop();
}
function drawBush(a4, b4) {
  push();
  translate(a4, b4);
  fill(48, 98, 56);
  circle(0, 0, 50);
  fill(49, 107, 59);
  circle(+50, 0, 70);
  fill(59, 115, 69);
  circle(0, +40, 20);
  circle(-50, -10, 60);
  fill(97, 141, 79);
  triangle(5, 10, 10, 1, 10, 10);
  triangle(10, 5, 0, 1, 5, 10);
  triangle(8, 10, 10, 1, 30, 10);
  triangle(10, 10, 10, 15, 15, 20);
  triangle(1, 5, 5, 1, 10, -10);
  fill(255);
  circle(-0, 0, 10);
  circle(+5, +8, 10);
  circle(-5, +8, 10);
  fill(255, 221, 0);
  circle(0, +5, 6);
  pop();
}
function drawFlower(a5, b5) {
  push();
  translate(a5, b5);
  fill(97, 141, 79)
  triangle(5, 10, 10, 1, 10, 10);
  triangle(10, 5, 0, 1, 5, 10);
  triangle(8, 10, 10, 1, 30, 10);
  triangle(10, 10, 10, 15, 15, 20);
  triangle(1, 5, 5, 1, 10, -10);
  fill(255);
  circle(-0, 0, 10);
  circle(+5, +8, 10);
  circle(-5, +8, 10);
  fill(255, 221, 0);
  circle(0, +5, 6);
  pop();
}
function drawStatue(a6, b6) {
  push();
  translate(a6, b6);
  fill(115, 115, 115);
  quad(+44, +69, +79, +69, +59, +120, +20, +120);
  fill(130, 130, 130);
  rect(+50, +105, 20, 30);
  fill(163, 163, 163);
  ellipse(+55, +25, 14, 30);
  ellipse(+60, +88, 43, 48);
  fill(199, 199, 199);
  ellipse(+60, +50, 45, 35);
  ellipse(+44, +25, 14, 30);
  fill(0);
  ellipse(+57, +48, 10, 5);
  ellipse(+82, +51, 8, 6);
  ellipse(+72, +60, 10, 3);
  //sign
  fill(112, 62, 35);
  rect(+134, +120, 10, 30);
  rect(+110, +85, 60, 50);
  fill(255);
  rect(+115, +90, 50, 40);
  fill(0);
  textSize(9);
  text("The Great", 116, +105);
  text("Magitian", +116, +115);
  text("Rabbit", +116, +125);
  pop();
}
function drawMouseTomato(mouseX, mouseY){
push();
translate(mouseX, mouseY);
scale(tomatoSize);
fill(237, 14, 14, 60 * (tomatoAlpha / 255));
circle(0, 0, 60);
fill(201, 0, 40, tomatoAlpha);
circle(0, 0, 40);
fill(235, 0, 47, tomatoAlpha);
circle(+3, -3, 30);
fill(255, tomatoAlpha);
ellipse(+8, -8, 10, 6);
fill(25, 97, 24, tomatoAlpha);
rect(-3, -30, 7, 15);
pop();
}
function drawleaves(a8,b8){
push()
translate(a8,b8)
  fill(153, 222, 86)
  circle(+3, -18, 30);
  fill(168, 235, 105)
  circle(-7, 0, 18);
  fill(135, 212, 60)
  circle(+13, 0, 26)
  
  fill(153, 222, 86)
  circle(-55, -48, 28);
  fill(168, 235, 105)
  circle(-60, -70, 35);
  fill(135, 212, 60)
  circle(-40, -70, 26)
  
  fill(138, 196, 83)
  circle(-100, -28, 28);
  fill(114, 168, 62)
  circle(-107, -10, 35);
  fill(135, 212, 60)
  circle(-90, -10, 26)
pop()
}
function mousePressed() {
  tomatoSize = 0.3;
  tomatoAlpha = 120;

  //TV color
  if (mouseX > 570 && mouseX <630 && mouseY > 20 && mouseY < 70 ) {
    TVColor = [random(255), random(255), random(255)];
  }

  if (mouseX > a6 && mouseX < a6 + 80 && mouseY > b6 - 60 && mouseY < b6 + 100) {
    hatSparkle = true;
    sparkleTimer = 70;
  }
}

