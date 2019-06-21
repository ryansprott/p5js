let dinos = []
let savedDinos = []
let cacti = []
let level = 10
const TOTAL = 250
let gens = 1

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

function canAddCactus() {
	if (cacti.length === 0) {
		return true
	} else if (cacti.length === 1 && cacti[0].x < width / 2) {
		return true
	}
	return false
}

function draw() {
	background(0)
	cacti = cacti.filter(cactus => cactus.x > cactus.r * -1)
	if (random(1) < 0.05 && canAddCactus()) {
		cacti.push(new Cactus(random(1), level))
		level++
	}
	for (let cactus of cacti) {
		cactus.show()
		cactus.move()
		for (let dino of dinos) {
			if (dino.hit(cactus)) {
				savedDinos.push(dino)
				dinos = dinos.filter(d => d !== dino)
			}
		}
	}
	for (let dino of dinos) {
		dino.think(cacti)
		dino.move()
		dino.show()
	}
	if (dinos.length === 0) {
		cacti = []
		gens++
		console.log(`generation ${gens} level ${level} hi score ${savedDinos[savedDinos.length-1].score}`)
		nextGeneration()
	}
}

function nextGeneration() {
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
	let child = new Dino(dino.brain);
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
