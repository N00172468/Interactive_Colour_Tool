function setup() {
    createCanvas(windowWidth/2, windowHeight/2);
    background(0);
};

function draw() {
    // Shadow for Purple Rect.
    noStroke();
    fill(25);
    rect(25, 25, 200, 200);

    // Purple Rect.
    noStroke();
    fill(102, 51, 153);
    rect(25/2, 25/2, 200, 200);
};
