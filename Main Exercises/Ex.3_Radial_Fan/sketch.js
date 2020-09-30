// let numOfSegments = 12;
let numOfSegments = 360;
let radius = 100;

function setup() {
    createCanvas(500, 500);
    background(0);

    // RGB to HSB:
    colorMode(HSB, 360, 100, 100); 

    // Angle Mode:
    angleMode(DEGREES);

    // No Stroke:
    noStroke();
}

function draw() {
    // background(125, 125, 200);
    fill(200, 0, 0);
    let stepAngle = 360/numOfSegments;

    beginShape(TRIANGLE_FAN);
        vertex(250, 250);
        for (let a = 0; a <= 360; a += stepAngle) {
            let vx = radius * cos(a) + 250;
            let vy = radius * sin(a) + 250;
            fill(a, 100, 100);
            vertex(vx, vy);
        }
    endShape(CLOSE);

}

// Key Bind Interactivity:
function keyPressed() {
    if (key=='s' || key=='S') {
        // saveCanvas('Carlo', 'png');
        saveCanvas(gd.timestamp(), 'png');
    }
}