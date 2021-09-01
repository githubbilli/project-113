function preload() {

}

function setup() {
    canvas = createCanvas(330,240);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    color = "";
}

function draw() {
    circle(40,40,50);
    rect(65, 12, 200, 55);
    circle(290,40,50);
    rect(268, 67, 55, 200);
    rect(12, 67, 55, 200);
    image(video,67,80,200,200);
}

function take_snapshot() {
    save('picture.png')
}