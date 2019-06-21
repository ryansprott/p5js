class Cactus {
    constructor(seed, vel) {
        this.r = 50
        if (seed > 0.0 && seed < 0.33) {
            this.width = this.r
        } else if (seed >= 0.33 && seed <= 0.66) {
            this.width = this.r * 2
        } else if (seed > 0.66) {
            this.width = this.r * 3
        }
        this.x = width
        this.y = height - this.r
        this.velocity = vel
    }

    show() {
        noStroke()
        fill(255)
        ellipseMode(CORNER)
        ellipse(this.x, this.y, this.width, this.r)
    }

    move() {
        this.x -= this.velocity
    }
}
