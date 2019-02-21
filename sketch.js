let triangles = []; //creating an empty triangles array

function setup(){
    createCanvas(windowWidth, windowHeight); //canvas will take up entire screen
}

function draw(){
    fill(255);
    //this could definitely be more efficient by creatings a stars class, however wanted to visually and conceptually understand what is occurring for each step
    push(); //push and pop to have formatting only apply to single star at a time
    if((mouseX<220) && (mouseX>180) && (mouseY<220) && (mouseY>180)){ //approximate rollover function
        stroke(random(0, 255), random(0, 255), random(0, 255)) //star strokes flash with colors
    }
    star(200, 200, 20, 40, 5); //star function below shows parameters for defining star shape (x, y, radius, side length, number of points)
    pop();
    push();
    if((mouseX<220) && (mouseX>180) && (mouseY<520) && (mouseY>480)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
    }
    star(200, 500, 20, 40, 5);
    pop();
    push();
    if((mouseX<220) && (mouseX>180) && (mouseY<720) && (mouseY>680)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
    }
    star(200, 700, 20, 40, 5);
    pop();
    push();
    if((mouseX<420) && (mouseX>380) && (mouseY<120) && (mouseY>80)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
    }
    star(400, 100, 20, 40, 5);
    pop();
    push();
    if((mouseX<420) && (mouseX>380) && (mouseY<320) && (mouseY>280)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
    }
    star(400, 300, 20, 40, 5);
    pop();
    push();
    if((mouseX<420) && (mouseX>380) && (mouseY<570) && (mouseY>530)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
    }
    star(400, 550, 20, 40, 5);
    pop();
    push();
    if((mouseX<620) && (mouseX>580) && (mouseY<250) && (mouseY>210)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
    }
    star(600, 230, 20, 40, 5);
    pop();
    push();
    if((mouseX<620) && (mouseX>580) && (mouseY<480) && (mouseY>440)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
    }
    star(600, 460, 20, 40, 5);
    pop();
    push();
    if((mouseX<620) && (mouseX>580) && (mouseY<780) && (mouseY>740)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
    }
    star(600, 760, 20, 40, 5);
    pop();
    push();
    if((mouseX<820) && (mouseX>780) && (mouseY<190) && (mouseY>150)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
    }
    star(800, 170, 20, 40, 5);
    pop();
    push();
    if((mouseX<820) && (mouseX>780) && (mouseY<470) && (mouseY>430)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
    }
    star(800, 450, 20, 40, 5);
    pop();
    push();
    if((mouseX<820) && (mouseX>780) && (mouseY<640) && (mouseY>600)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
    }
    star(800, 620, 20, 40, 5);
    pop();
    push();
    if((mouseX<1020) && (mouseX>980) && (mouseY<70) && (mouseY>30)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
    }
    star(1000, 50, 20, 40, 5);
    pop();
    push();
    if((mouseX<1020) && (mouseX>980) && (mouseY<370) && (mouseY>330)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
    }
    star(1000, 350, 20, 40, 5);
    pop();
    push();
    if((mouseX<1020) && (mouseX>980) && (mouseY<620) && (mouseY>580)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
    }
    star(1000, 600, 20, 40, 5);
    pop();
    push();
    if((mouseX<1220) && (mouseX>1180) && (mouseY<240) && (mouseY>200)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
    }
    star(1200, 220, 20, 40, 5);
    pop();
    push();
    if((mouseX<1220) && (mouseX>1180) && (mouseY<500) && (mouseY>460)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
    }
    star(1200, 480, 20, 40, 5);
    pop();
    push();
    if((mouseX<1220) && (mouseX>1180) && (mouseY<710) && (mouseY>670)){
        stroke(random(0, 255), random(0, 255), random(0, 255))
    }
    star(1200, 690, 20, 40, 5);
    pop();

    for(let i=0; i<triangles.length; i++){
        triangles[i].display();
        //triangles[i].rollover(mouseX, mouseY);
        triangles[i].rotate(radians(frameCount/20+400));
    }
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
    t = new Kaleid(mouseX, mouseY, mouseX, mouseY, mouseX, mouseY); //first triangle starts at mouse click location
    triangles.push(t); //push a new object into array
  }

function keyPressed(){ //this allows the background to be reset any time enter key is pressed
    if (keyCode === ENTER) {
        background(255);
        }
}

class Kaleid{
    constructor(tempX1, tempY1, tempX2, tempY2, tempX3, tempY3) {
        this.x1 = tempX1;
        this.y1 = tempY1;
        this.x2 = tempX2 + random(100, 200);
        this.y2 = tempY2 + random(100, 200);
        this.x3 = tempX3 + random(0, 200);
        this.y3 = tempY3 + random(0, 200);
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
      
    display() {
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    }

    rotate(rad){ //tells triangles to rotate
        translate(600, 400); 
        this.rad = rad;
        if(this.x2>this.y2){ //allows for different direction of rotation depending on the random size assigned to one of the sides of each triangle
            rotate(-rad);
        }
        else{rotate(rad)}
    }
}