function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	img=loadImage("3XPSVF");
	marioX="";
	marioY="";

}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
	video.parent('game_console');
}
function gotPoses(results){
	if(results.length>0){
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
		console.log("noseX="+noseX+"noseY"+noseY);
	}
}
function modelLoaded(){
	console.log("Model Loaded!")
}

function draw() {
	game()
	background("#FF0101");
	image(img,marioX,marioY,40.70);
	if (noseX<300)
	{
		marioX=marioX-1;
	}
	if (noseX>300){
		marioX=marioX+1;
	}
	if (noseY<150){
		marioY=marioY-1;
	}
}






