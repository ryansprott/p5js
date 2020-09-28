class Dino {
    constructor(brain) {
        this.r = 100
        this.x = 75
        this.y = height - this.r
        this.gravity = 3
        this.velocity = 0
        this.score = 0
        this.fitness = 0
        this.brain = brain ? brain.copy() : new NeuralNetwork(7, 14, 2)
        this.col = color(0, 255, 0)
    }

    show() {
        stroke(this.col)
        fill(127, 100)
        ellipseMode(CORNER)
        ellipse(this.x, this.y, this.r, this.r)
    }

    mutate() {
        this.brain.mutate(0.1)
    }

    dispose() {
        this.brain.dispose()
    }

    think(cacti) {
        let closest = cacti[0] || new Cactus();
        let inputs = [];
        inputs[0] = this.y / height;
        inputs[1] = this.x / width;
        inputs[2] = closest.x / width;
        inputs[3] = closest.y / height;
        inputs[4] = this.velocity / 10;
        inputs[5] = (this.x + this.r) - (closest.x - closest.width / 2)
        inputs[6] = this.y - (closest.y + closest.r)
        let output = this.brain.predict(inputs);
        if (output[0] > output[1]) {
          this.jump();
        }
    }

    move() {
        this.y += this.velocity
        this.velocity += this.gravity
        this.y = constrain(this.y, 0, height - this.r)
        this.score++
    }

    jump() {
        this.velocity = this.y === height - this.r ? -50 : this.velocity
    }

    hit(cactus) {
        let d  = dist(this.x + this.r, this.y, cactus.x + cactus.width / 2, cactus.y)
        let r1 = this.r / 2
        let r2 = cactus.width / 2
        return d < r1 + r2
    }
}
