rectLoop = 75;

function setup() {
    // createCanvas(windowWidth, windowHeight);
    createCanvas(500, 500);
    background(0);

    // RGB to HSB:
    colorMode(HSB, width, height, 100); 
}

function draw() {
    // Shadow for Purple Rect.
    // noStroke();
    // fill(25);
    // rect(25, 25, 200, 200);

    // Purple Rect.
    // noStroke();
    // fill(102, 51, 153);
    // rect(25/2, 25/2, 200, 200);

    // Looped Rect (3D Illusional Rectangle):
    // for (let i = 0; i < rectLoop; i++) {
    //     rect(i, i, 300, 300);
    // };

    //-----------------------------------------------//

    // HSB Canvas:
    // let stepX = 15;
    // let stepY = 15;

    // Interactive HSB Canvas with Mouse:
    // let stepX = mouseX + 1;
    // let stepY = mouseY + 1;

    // for (let y = 0; y < height; y = y + stepY) {
    //     for (let x = 0; x < width; x = x + stepX) {
    //         noStroke();
    //         fill(x, height - y, 100);
    //         rect(x, y, stepX, stepY);
    //     }
    // }

    fill(250, 500, 100);
    stroke(0);
    beginShape();
        vertex(50, 50);
        for (let i = 0; i < 5; i++) {
            let vx = i * 20;
            let vy = i/30 * 6;
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