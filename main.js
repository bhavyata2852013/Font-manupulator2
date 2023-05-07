function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelloded);
    poseNet.on('poses',gotPoses);
}
function draw() {
    background('grey');
}

function modelloded() {
    console.log("Model is loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}