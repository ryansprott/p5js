class Cactus {
    constructor(seed) {
        this.r = 50
        this.w = seed > 0.5 ? this.r : this.r * 2
        this.x = width
        this.y = height - this.r
        this.v = 10
    }

    show() {
        noStroke()
        fill(255)
        ellipse(this.x, this.y, this.w, this.r)
    }

    move() {
        this.x -= this.v
    }
}
