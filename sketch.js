
function setup() {
  createCanvas(1000, 1000);  
}

function draw() {
  background(255);
  translate(1000/2, height);
  angle = mouseX/100;
  
  branch(mouseY);
} 

function branch(len) {
  line(0, 0, 0, -len);
  
  translate(0, -len);
  if (len > 8){
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}