let angle = 0
let notdone = true

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(255)
	rectMode(CENTER)
	notdone = recur(1, 200, 200)
	if (!notdone) {
		console.log('done')
		noLoop()
	} else {
		console.log('recurring')
	}
}

function recur(n, x, y) {
	if (n < 0) {
		return false
	} else {
		let alf = map(n, 1, 0, 0, 255)
		let nn = map(n, 0, 1, 0, 300)
		fill(127, alf)
		rect(x, y, nn * 1.2, nn)

		recur(n - 0.1, x * 0.95, y * 0.95)
	}
}
