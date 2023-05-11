leftwristx = 0;
rightwristx = 0;

difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelloded);
    poseNet.on('pose',gotPoses);
}
function draw() {
    background('grey');
    textSize(difference);
    fill("white");
    text("Bhavyu",200,200);
}

function modelloded() {
    console.log("Model is loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;

        difference = floor(leftwristx - rightwristx);
    }
}