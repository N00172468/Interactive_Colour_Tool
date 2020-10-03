numOfSegments = 360;
radius = 200;

function setup() {
    createCanvas(500, 500);
    background(0, 5, 15);

    colorMode(HSB, 360, 100, 100);
    angleMode(DEGREES);
    noStroke();
    smooth();
}

function draw() {
    background(0, 5, 15);
    fill(200, 0, 0);
    let stepAngle = 360/numOfSegments;

    // Begin Triangle Fan (based on P5.js docs.):
    beginShape(TRIANGLE_FAN);
        vertex(250, 250); // Centre of diameter (Static)
        for (let a = 0; a <= 360; a += stepAngle) {
            let vx = radius * cos(a) + 250;
            let vy = radius * sin(a) + 250;
            fill(a, 100, 100); // Created Radial Colour Hue (HSB variant)
            vertex(vx, vy);
        }
    endShape(CLOSE);
}