class Dino {
    constructor(brain) {
        this.r = 50
        this.x = 75
        this.y = height - this.r
        this.gravity = 3
        this.velocity = 0

        this.score = 0
        this.fitness = 0
        this.brain = brain ? brain.copy() : new NeuralNetwork(3, 6, 2)
    }

    show() {
        noStroke()
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
        let closestD = Infinity;
        for (let i = 0; i < cacti.length; i++) {
          let d = cacti[i].x + cacti[i].width - this.x;
          if (d < closestD && d > 0) {
            closest = cacti[i];
            closestD = d;
          }
        }

        let inputs = [];
        inputs[0] = this.y / height;
        inputs[1] = closest.x / width;
        inputs[2] = this.velocity / 10;
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
        this.velocity = this.y === height - this.r ? -35 : this.velocity
    }

    hit(cactus) {
        let d  = dist(this.x, this.y, cactus.x + cactus.width / 4, cactus.y)
        let r1 = this.r / 2
        let r2 = cactus.width / 2
        return d < r1 + r2
    }
}
