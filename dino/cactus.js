class Cactus {
    constructor(seed, vel) {
        this.r = 50
        if (seed > 0.0 && seed < 0.33) {
            this.width = this.r
        } else if (seed >= 0.33 && seed <= 0.66) {
            this.width = this.r * 1.5
        } else if (seed > 0.66) {
            this.width = this.r * 2
        }
        this.x = width
        this.ys = [(height / 1.5) - this.r, (height / 1.25) - this.r, height - this.r]
        this.y = this.ys[ceil(random(2))]
        this.velocity = vel
    }

    show() {
        noStroke()
        fill(255)
        ellipseMode(CORNER)
        ellipse(this.x, this.y, this.width, this.r)
    }

    move() {
        this.x -= this.velocity * 0.4
    }
}
