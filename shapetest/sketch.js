function setup() {
	createCanvas(900, 900, WEBGL);
}

function draw() {
	background(255, 255, 0)
	// rotateX(sin(frameCount * 0.01));
	rotateY(frameCount * 0.05);
	fill(255, 0, 255)
	box(200)
	translate(130, 0)
	fill(255, 127, 255)
	box(50)
}
