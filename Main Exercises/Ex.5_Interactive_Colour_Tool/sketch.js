numOfSegments = 360;
radius = 200;

function setup() {
    createCanvas(1200, 540);
    // background(0, 5, 15);

    colorMode(HSB, 360, 100, 100); // Max. HSB
    angleMode(DEGREES);
    noStroke();
    smooth();
}

function draw() {
    background(0, 0, mouseX);
    fill(200, 0, 0);
    let stepAngle = 360/numOfSegments;

    // Begin Triangle Fan (based on P5.js docs.):
    beginShape(TRIANGLE_FAN);
        vertex(300, 300); // Centre of diameter (Static)
        for (let a = 0; a <= 360; a += stepAngle) {
            let vx = radius * cos(a) + 300;
            let vy = radius * sin(a) + 300;
            fill(mouseX - a, mouseX, 100); // Interactive Radial Colour Hue (HSB variant)
            vertex(vx, vy);
        }
    endShape(CLOSE);

    // Brief Instruction on how to interact:
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(0, mouseX, 100 - mouseX);
    text('Slide Mouse Cursor from Left to Right', 300, 50);

    // Hue Rectangle:
    push();
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(mouseX - 360, 100, 100);
    text('Hue', 712, 50);

    fill(mouseX - 360, 100, 100);
    translate(700, 100);
    rect(0, 0, 25, 400);
    pop();
}