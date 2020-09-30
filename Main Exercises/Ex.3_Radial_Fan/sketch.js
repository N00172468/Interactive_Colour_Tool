numOfSegments = 12;

function setup() {
    createCanvas(500, 500);
    background(0);

    // RGB to HSB:
    colorMode(HSB, width, height, 100); 

    // Angle Mode:
    angleMode(DEGREES);
}

function draw() {
    fill(250, 500, 100);
    stroke(0);

    let stepAngle = 360/numOfSegments;

    beginShape();
        vertex(250, 250);
        for (let i = 0; i < numOfSegments; i++) {
            let vx = 250 * numOfSegments;
            let vy = 250/30 * numOfSegments;
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