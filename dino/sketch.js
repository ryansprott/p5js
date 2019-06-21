let dino
let cacti = []
let level = 10

function setup() {
	createCanvas(1200, 600);
	dino = new Dino()
}

function keyPressed() {
	if (keyCode === 32) {
		dino.jump()
	}
}

function draw() {
	background(0)
	cacti = cacti.filter(cactus => cactus.x > cactus.r * -1)
	if (random(1) < 0.05 && cacti.length === 0) {
		cacti.push(new Cactus(random(1), level))
		level++
	}
	for (let cactus of cacti) {
		cactus.show()
		cactus.move()
		if (dino.hit(cactus)) {
			dino.fl = 127
			noLoop()
		} else {
			dino.fl = 255
		}
	}
	dino.show()
	dino.move()
}
