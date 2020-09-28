class NesColor {
	constructor() {
		this.colors = [
			color(0,0,0),
			color(0,0,188),
			color(0,0,252),
			color(0,64,88),
			color(0,88,0),
			color(0,88,248),
			color(0,104,0),
			color(0,120,0),
			color(0,120,248),
			color(0,136,136),
			color(0,168,0),
			color(0,168,68),
			color(0,184,0),
			color(0,232,216),
			color(0,252,252),
			color(60,188,252),
			color(68,40,188),
			color(80,48,0),
			color(88,216,84),
			color(88,248,152),
			color(104,68,252),
			color(104,136,252),
			color(124,124,124),
			color(136,20,0),
			color(148,0,132),
			color(168,0,32),
			color(168,16,0),
			color(172,124,0),
			color(188,188,188),
			color(216,0,204),
			color(228,0,88),
			color(228,92,16),
			color(248,56,0),
			color(248,248,248),
			color(152,120,248),
			color(248,120,248),
			color(248,88,152),
			color(248,120,88),
			color(252,160,68),
			color(248,184,0),
			color(184,248,24),
			color(120,120,120),
			color(252,252,252),
			color(164,228,252),
			color(184,184,248),
			color(216,184,248),
			color(248,184,248),
			color(248,164,192),
			color(240,208,176),
			color(252,224,168),
			color(248,216,120),
			color(216,248,120),
			color(184,248,184),
			color(184,248,216),
			color(216,216,216)
		]
	}

	getColor() {
		let rnd = parseInt(random(this.colors.length))
		let col = this.colors[rnd]
		col.setAlpha(int(random(10)))
		return col
	}
}

class Square {
	constructor(xmax, ymax) {
		this.xmax = xmax
		this.ymax = ymax
		this.x = random(this.xmax)
		this.y = random(this.ymax)
		this.size = int(random() * xmax / 8)
		this.colors = new NesColor()
	}

	show() {
		// noStroke()
		strokeWeight(random() * 0.1)
		fill(this.colors.getColor(), random(20))
		// fill(int(random(255)), random(10))
		if (this.checkEdges()) {
			rect(this.x, this.y, this.size, this.size)
		}
	}

	checkEdges() {
		if (this.x + this.size > this.xmax - 50 || this.y + this.size > this.ymax - 50) {
			return false
		}
		return true
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	this.squares = []

	for (let i = 0; i < 2000; i++) {
		let square = new Square(windowWidth, windowHeight)
		this.squares.push(square)
	}
}

function draw() {
	for (let square of this.squares) {
		square.show()
	}

	noLoop()
}
