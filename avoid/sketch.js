let particles = []

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < 1000; i++) {
		let p = new Particle()
		particles.push(p)
	}
}

function draw() {
	background(255)
	for (let particle of particles) {
		particle.separate(particles)
		particle.drag()
		particle.update()				
		particle.show()
		particle.checkEdges()
	}
}
