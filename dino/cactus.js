class Cactus {
    constructor(seed, vel) {
        this.r = 50
        this.width = seed > 0.5 ? this.r : this.r * 2
        this.x = width
        this.y = height - this.r
        this.velocity = vel
    }

    show() {
        noStroke()
        fill(255)
        ellipse(this.x, this.y, this.width, this.r)
    }

    move() {
        this.x -= this.velocity
    }
}
