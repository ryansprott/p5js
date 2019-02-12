let tx = 0.01
let ty = 10000

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	let nx = noise(tx)
	let ny = noise(ty)
	let x = map(nx, 0, 1, 0, width)
	let y = map(ny, 0, 1, 0, height)

	background(255)
	stroke(255, 0, 0)
	fill(0, 0, 255)
	ellipse(x, y, 16, 16)

	tx += 0.001
	ty += 0.001
}
