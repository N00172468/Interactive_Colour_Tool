let numOfSegments = 12;
let radius = 100;

function setup() {
    createCanvas(500, 500);

    // RGB to HSB:
    colorMode(HSB, width, height, 100); 

    // Angle Mode:
    angleMode(DEGREES);
}

function draw() {
    let stepAngle = 360/numOfSegments;

    beginShape(TRIANGLE_FAN);
        vertex(250, 250);
        for (let a = 0; a <= 360; a += stepAngle) {
            let vx = radius * cos(a) + 250;
            let vy = radius * sin(a) + 250;
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