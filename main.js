noseX = 0;
noseY = 0;
difference= 0;
rightWristX = 0;
leftWristX = 0;

function setup(){

    video = createCapture(VIDEO);
     video.size(550,500);

    canvas = createCanvas(500,500);
    canvas.position(560,150);

poseNet =ml5.poseNet(video, modalLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
    background('#03fcf0');
    fill('#f27c05');
    stroke('#2216f7');
    square(noseX,noseY, difference);
    document.getElementById(square_sides)
}
function modalLoaded(){
    console.log('poseNet is initialied');

}

function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log(" noseX = " + noseX + " noseY = " + noseY)

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor( rightWristX - leftWristX); 
        
        console.log(" rightWristX = " + rightWristX + " leftWristX = " + leftWristX + " difference = " + difference );

    }
}