let triangles = []; //creating an empty triangles array
let starz1 = [];
let starz2 = [];
let starz3 = [];
let starz1b = [];
let starz2b = [];
let starz3b = [];
let test;
let s1;
let s2;
let s3;
let s1b;
let s2b;
let s3b;
var mithella;
var adaml;
var adamm;

function preload() {
    mithella = loadFont('mithella.otf');
    adaml = loadFont('adaml.ttf');
    adamm = loadFont('adamm.ttf');
}
function setup(){
    createCanvas(windowWidth, windowHeight); //canvas will take up entire screen
    textFont(adamm);
    textSize(24);
    textAlign(CENTER, CENTER);
}

function draw(){
    for (let i = 0; i < 3; i++) {
        push();
        s1 = new StarzT1();
        starz1.push(s1);
        starz1[i].show();
        pop();
    }
    for (let i = 0; i < 2; i++) {
        push();
        s2 = new StarzT2();
        starz2.push(s2);
        starz2[i].show();
        pop();
    }
    for (let i = 0; i < 3; i++) {
        push();
        s3 = new StarzT3();
        starz3.push(s3);
        starz3[i].show();
        pop();
    }
    for (let i = 0; i < 3; i++) {
        push();
        s1b = new StarzT1b();
        starz1b.push(s1b);
        starz1b[i].show();
        pop();
    }
    for (let i = 0; i < 6; i++) {
        push();
        s2b = new StarzT2b();
        starz2b.push(s2b);
        starz2b[i].show();
        pop();
    }
    for (let i = 0; i < 3; i++) {
        push();
        s3b = new StarzT3b();
        starz3b.push(s3b);
        starz3b[i].show();
        pop();
    }

    for(let i=0; i<triangles.length; i++){
        push();
        triangles[i].translate();
        triangles[i].rotate(200+frameCount/40);
        triangles[i].display();
        pop();
    }

    textAlign(CENTER);
    drawWords(width * 1);
    fill(255);
}

function drawWords(x) {
    fill(255, 0, 0);
    text("  make a wish...", windowWidth/2, windowHeight/3-60);
    text("click on the stars", windowWidth/2, windowHeight/3-20);
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
    }

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

class StarzT1 {
    constructor() {
        this.x = random(40, windowWidth/3);
        this.y = random(40, windowHeight/2);
    }
      
    show() {
        fill(255);
        if((mouseX<this.x+20) && (mouseX>this.x-20) && (mouseY<this.y+20) && (mouseY>this.y-20)){
            stroke(random(0, 255), random(0, 255), random(0, 255))
            fill(255, 255, 0)
        }
        star(this.x, this.y, 40, 20, 5);
        }
    }

class StarzT2 {
    constructor() {
        this.x = random(windowWidth/3, 2*windowWidth/3);
         this.y = random(40, windowHeight/3-100);
        }
          
    show() {
        fill(255);
        if((mouseX<this.x+20) && (mouseX>this.x-20) && (mouseY<this.y+20) && (mouseY>this.y-20)){
            stroke(random(0, 255), random(0, 255), random(0, 255))
            fill(255, 255, 0)
        }
        star(this.x, this.y, 40, 20, 5);
        }
    }

class StarzT3 {
    constructor() {
        this.x = random(2*windowWidth/3, windowWidth-40);
        this.y = random(40, windowHeight/2);
    }
              
    show() {
        fill(255);
        if((mouseX<this.x+20) && (mouseX>this.x-20) && (mouseY<this.y+20) && (mouseY>this.y-20)){
            stroke(random(0, 255), random(0, 255), random(0, 255))
            fill(255, 255, 0)
        }
        star(this.x, this.y, 40, 20, 5);
        }
    }

    class StarzT1b {
        constructor() {
            this.x = random(40, windowWidth/3);
            this.y = random(windowHeight/2, windowHeight-40);
        }
          
        show() {
            fill(255);
            if((mouseX<this.x+20) && (mouseX>this.x-20) && (mouseY<this.y+20) && (mouseY>this.y-20)){
                stroke(random(0, 255), random(0, 255), random(0, 255))
                fill(255, 255, 0)
            }
            star(this.x, this.y, 40, 20, 5);
            }
        }
    
    class StarzT2b {
        constructor() {
            this.x = random(windowWidth/3, 2*windowWidth/3);
             this.y = random(windowHeight/3+80, windowHeight-40);
            }
              
        show() {
            fill(255);
            if((mouseX<this.x+20) && (mouseX>this.x-20) && (mouseY<this.y+20) && (mouseY>this.y-20)){
                stroke(random(0, 255), random(0, 255), random(0, 255))
                fill(255, 255, 0)
            }
            star(this.x, this.y, 40, 20, 5);
            }
        }
    
    class StarzT3b {
        constructor() {
            this.x = random(2*windowWidth/3, windowWidth-40);
            this.y = random(windowHeight/2, windowHeight-40);
        }
                  
        show() {
            fill(255);
            if((mouseX<this.x+20) && (mouseX>this.x-20) && (mouseY<this.y+20) && (mouseY>this.y-20)){
                stroke(random(0, 255), random(0, 255), random(0, 255))
                fill(255, 255, 0)
            }
            star(this.x, this.y, 40, 20, 5);
            }
        }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
 
