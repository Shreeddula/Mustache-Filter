function setup(){
    canvas=createCanvas(450,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(450,450);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function draw(){
    image(video,0,0,450,450);
    fill("red");
    stroke("red")
    image(mustache_img,noseX-65,noseY,140,60)
}

function preload(){
    mustache_img=loadImage("https://i.postimg.cc/fyNX6LH0/mustache-removebg-preview.png");
}
function take_snapshot(){
    save("my_picture.jpg");
}

function modelLoaded(){
    console.log("Pose Net Initialized");
}
noseX=0;
noseY=0;

function gotPose(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}