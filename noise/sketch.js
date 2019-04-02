let tx = 0.01
let ty = 10000

function setup() {
	createCanvas(900, 900)
}

function draw() {
	let nx = noise(tx)
	let ny = noise(ty)
	let x = map(nx, 0, 1, 0, width)
	let y = map(ny, 0, 1, 0, height)

	background(255)
	strokeWeight(2)
	stroke(255, 0, 0)
	line(x, 0, y, height)
	stroke(0, 0, 255)
	line(0, y, height, x)

	tx += 0.001
	ty += 0.001
}
