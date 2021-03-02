status = "";
object_name = "";

function setup() {
	canvas = createCanvas(300, 200);
	canvas.center();

	video = createCapture(VIDEO);
	video.size(300, 200);
	video.hide();
}

function start() {
	objectDetector = ml5.objectDetector("cocossd", modelLoaded);

	document.getElementById("status").innerHTML = "STATUS : Detecting Object";
	object_name = document.getElementById("object_name").value;
}

function draw() {
    image(video, 0, 0, 300, 200);
}

function modelLoaded() {
	console.log("MODEL LOADED!");
	
	status = true;
}