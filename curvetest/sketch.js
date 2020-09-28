function setup() {
	createCanvas(600, 600);
}

function draw() {
	background(255)
	beginShape()
	curveVertex(mouseX, mouseY)
	curveVertex(50, 50)
	curveVertex(500, 50)
	curveVertex(500, 500)
	curveVertex(50, 500)

	endShape(CLOSE)
}
