noseX=0;
noseY=0;
Height=0;
Width=0;
function preload(){
clown_nose=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}


function setup(){
canvas=createCanvas(250,250);
canvas.center();
video=createCapture(VIDEO);
video.size(250,250);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
image(video,0,0,300,300);
image(clown_nose, noseX, noseY, Width,Height);
}

function take_snapshot(){
    save('myfilterimage.png');
}
function modelLoaded(){
    console.log('posenet is initalized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-23;
        noseY=results[0].pose.nose.y-11;
        console.log("nose x= "+noseX);
        console.log("nose y= "+noseY);
    }
}
function two(){
    clown_nose=loadImage('https://i.postimg.cc/Kj1NkQ7g/download-removebg-preview.png');
}
function one(){
    clown_nose=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function three(){
    clown_nose=loadImage('https://i.postimg.cc/D01t42PG/istockphoto-1016776664-170667a-removebg-preview.png')
}
function change(){
    Height=document.getElementById("Height").value;
   Width=document.getElementById("Width").value;
}