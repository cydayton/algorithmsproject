let triangles = []; //creating an empty triangles array

function setup(){
    createCanvas(windowWidth, windowHeight); //canvas will take up entire screen
    textFont();
    textSize(24);
    textAlign(CENTER, CENTER);

}

function draw(){
    textAlign(CENTER);
    drawWords(width * 1);
    fill(255);

    for(let i=0; i<triangles.length; i++){
        push();
        triangles[i].translate();
        triangles[i].rotate(200+frameCount/40);
        triangles[i].display();
        //triangles[i].rollover(mouseX, mouseY);
        pop();
    }
    //this could definitely be more efficient by creatings a stars class, however wanted to visually and conceptually understand what is occurring for each step
    push(); //push and pop to have formatting only apply to single star at a time
    if((mouseX<60) && (mouseX>20) && (mouseY<220) && (mouseY>180)){ //approximate rollover function
        stroke(random(0, 255), random(0, 255), random(0, 255)) //star strokes flash with colors
        fill(255, 255, 0)
    }
    star(40, 200, 20, 40, 5); //star function below shows parameters for defining star shape (x, y, radius, side length, number of points)
    pop();
    push();
    if((mouseX<60) && (mouseX>20) && (mouseY<520) && (mouseY>480)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
        fill(255, 255, 0)
    }
    star(40, 500, 20, 40, 5);
    pop();
    push();
    if((mouseX<60) && (mouseX>20) && (mouseY<720) && (mouseY>680)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
        fill(255, 255, 0)
    }
    star(40, 700, 20, 40, 5);
    pop();
    push();
    if((mouseX<windowWidth/5 + 20) && (mouseX>windowWidth/5 - 20) && (mouseY<120) && (mouseY>80)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
        fill(255, 255, 0)
    }
    star(windowWidth/5, 100, 20, 40, 5);
    pop();
    push();
    if((mouseX<windowWidth/5+20) && (mouseX>windowWidth/5-20) && (mouseY<320) && (mouseY>280)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
        fill(255, 255, 0)
    }
    star(windowWidth/5, 300, 20, 40, 5);
    pop();
    push();
    if((mouseX<windowWidth/5+20) && (mouseX>windowWidth/5-20) && (mouseY<570) && (mouseY>530)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
        fill(255, 255, 0)
    }
    star(windowWidth/5, 550, 20, 40, 5);
    pop();
    push();
    if((mouseX<2*windowWidth/5+20) && (mouseX>2*windowWidth/5-20) && (mouseY<250) && (mouseY>210)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
        fill(255, 255, 0)
    }
    star(2*windowWidth/5, 230, 20, 40, 5);
    pop();
    push();
    if((mouseX<2*windowWidth/5+20) && (mouseX>2*windowWidth/5-20) && (mouseY<480) && (mouseY>440)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
        fill(255, 255, 0)
    }
    star(2*windowWidth/5, 460, 20, 40, 5);
    pop();
    push();
    if((mouseX<2*windowWidth/5+20) && (mouseX>2*windowWidth/5-20) && (mouseY<780) && (mouseY>740)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
        fill(255, 255, 0)
    }
    star(2*windowWidth/5, 760, 20, 40, 5);
    pop();
    push();
    if((mouseX<3*windowWidth/5+20) && (mouseX>3*windowWidth/5-20) && (mouseY<90) && (mouseY>50)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
        fill(255, 255, 0)
    }
    star(3*windowWidth/5, 70, 20, 40, 5);
    pop();
    push();
    if((mouseX<3*windowWidth/5+20) && (mouseX>3*windowWidth/5-20) && (mouseY<470) && (mouseY>430)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
        fill(255, 255, 0)
    }
    star(3*windowWidth/5, 450, 20, 40, 5);
    pop();
    push();
    if((mouseX<3*windowWidth/5+20) && (mouseX>3*windowWidth/5-20) && (mouseY<640) && (mouseY>600)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
        fill(255, 255, 0)
    }
    star(3*windowWidth/5, 620, 20, 40, 5);
    pop();
    push();
    if((mouseX<4*windowWidth/5+20) && (mouseX>4*windowWidth/5-20) && (mouseY<70) && (mouseY>30)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
        fill(255, 255, 0)
    }
    star(4*windowWidth/5, 50, 20, 40, 5);
    pop();
    push();
    if((mouseX<4*windowWidth/5+20) && (mouseX>4*windowWidth/5-20) && (mouseY<370) && (mouseY>330)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
        fill(255, 255, 0)
    }
    star(4*windowWidth/5, 350, 20, 40, 5);
    pop();
    push();
    if((mouseX<4*windowWidth/5+20) && (mouseX>4*windowWidth/5-20) && (mouseY<620) && (mouseY>580)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
        fill(255, 255, 0)
    }
    star(4*windowWidth/5, 600, 20, 40, 5);
    pop();
    push();
    if((mouseX<windowWidth-40+20) && (mouseX>windowWidth-40-20) && (mouseY<240) && (mouseY>200)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
        fill(255, 255, 0)
    }
    star(windowWidth-40, 220, 20, 40, 5);
    pop();
    push();
    if((mouseX<windowWidth-40+20) && (mouseX>windowWidth-40-20) && (mouseY<500) && (mouseY>460)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
        fill(255, 255, 0)
    }
    star(windowWidth-40, 480, 20, 40, 5);
    pop();
    push();
    if((mouseX<windowWidth-40+20) && (mouseX>windowWidth-40-20) && (mouseY<710) && (mouseY>670)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
        fill(255, 255, 0)
    }
    star(windowWidth-40, 690, 20, 40, 5);
    pop();


}

function drawWords(x) {
    // The text() function needs three parameters:
    // the text to draw, the horizontal position,
    // and the vertical position
    fill(255);
    stroke(0)
    text("make a wish...", windowWidth/2, windowHeight/3-100);
    text("click on the stars", windowWidth/2, windowHeight/3-60);
  }

function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) { //a grows by an increment of angle as long as it is less than 2 pi
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

  function mousePressed(){
    t = new Kaleid(mouseX, mouseY); //first triangle starts at mouse click location
    triangles.push(t); //push a new object into array
  }

function keyPressed(){ //this allows the background to be reset any time enter key is pressed
    if (keyCode === ENTER) {
        background(255);
        }
}

class Kaleid{
    constructor(mouseposx, mouseposy) {
        this.x1 = mouseposx - frameCount;
        this.y1 = mouseposy - frameCount;
        this.x1p = mouseposx + frameCount;
        this.y1p = mouseposy + frameCount;
        this.x2 = random(-200, 200);
        this.y2 = random(-200, 200);
        this.x3 = random(-200, 200);
        this.y3 = random(-200, 200);
        this.color = random(0,255);

        //this.over = false;
    }
//following code is something that I may incorporate in the future, but I decided to leave it out for now
    //rollover(mx, my){
        //let d = dist(mx, my, 0, 0);
        //if(d<windowWidth/2){
           // this.over=true;
        //}else{
           //this.over=false;
        //}
        //}
    translate() {
        if(this.x2>this.y2){
            translate(this.x1p - frameCount, this.y1p - frameCount);
        }
        else{translate(this.x1 + frameCount, this.y1 + frameCount);}
    }

    rotate(rad){ //tells triangles to rotate
            this.rad = rad;
            if(this.x2>this.y2){ //allows for different direction of rotation depending on the random size assigned to one of the sides of each triangle
                rotate(-rad);
            }
            else{rotate(rad)}
    }

    display() {
        stroke(this.color);
        triangle(0, 0, this.x2, this.y2, this.x3, this.y3);
    }


}