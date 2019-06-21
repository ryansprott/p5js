let dinos = []
let savedDinos = []
let cacti = []
let level = 10
const TOTAL = 250

function setup() {
	createCanvas(1200, 600);
	tf.setBackend('cpu');
	for (let i = 0; i < TOTAL; i++) {
		dinos.push(new Dino())
	}
}

function keyPressed() {
	if (keyCode === 32) {
		// dino.jump()
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
		for (let dino of dinos) {
			if (dino.hit(cactus)) {
				dinos = dinos.filter(d => d !== dino)
			}
			dino.show()
			dino.think(cacti)
			dino.move()
		}
	}
}

function nextGeneration() {
	console.log('next generation');
	calculateFitness();
	for (let i = 0; i < TOTAL; i++) {
		dinos[i] = pickOne();
	}
	for (let i = 0; i < TOTAL; i++) {
		savedDinos[i].dispose();
	}
	savedDinos = [];
}

function pickOne() {
	let index = 0;
	let r = random(1);
	while (r > 0) {
		r = r - savedDinos[index].fitness;
		index++;
	}
	index--;
	let dino = savedDinos[index];
	let child = new Bird(dino.brain);
	child.mutate();
	return child;
}

function calculateFitness() {
	let sum = 0;
	for (let dino of savedDinos) {
		sum += dino.score;
	}
	for (let dino of savedDinos) {
		dino.fitness = dino.score / sum;
	}
}
