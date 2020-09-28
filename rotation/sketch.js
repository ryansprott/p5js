function setup() {
	createCanvas(windowWidth, windowHeight)
	this.radius = 50
	this.increment = 15
	noLoop()
}

function draw() {
	translate(width/2, height/2)
	// translate(100, 100)
	strokeWeight(1)

	stroke(255, 0, 0)
	fill(255, 0, 0)
	for (let i = 0; i < 360; i += this.increment) {
		let angle = radians(i)
		let x =  (cos(angle) * this.radius*1.5)
		let y =  (sin(angle) * this.radius*1.5)
		// rect(x, y, 10, 10)
		spinner(x, y, HALF_PI+(radians(i)))
	}

	stroke(0, 255, 255)
	fill(0, 255, 255)
	for (let i = 0; i < 360; i += this.increment * 2) {
		let angle = radians(i)
		let x =  (cos(angle) * this.radius)
		let y =  (sin(angle) * this.radius)
		//rect(x, y, 10, 10)
		spinner(x, y, HALF_PI+(radians(i)))
	}

	stroke(0, 255, 0)
	fill(0, 255, 0)
	for (let i = 0; i < 360; i += this.increment * 4) {
		let angle = radians(i)
		let x =  (cos(angle) * this.radius/2)
		let y =  (sin(angle) * this.radius/2)
		// rect(x, y, 10, 10)
		spinner(x, y, HALF_PI+(radians(i)))
	}
}

function spinner(xpos, ypos, a) {
	push()
	translate(xpos, ypos)
	rotate(a)
	rect(0, 0, 10, 10)
	pop()
}
