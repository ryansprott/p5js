class Cactus {
    constructor(seed) {
        this.r = 50
        this.x = width
        this.y = height - this.r
        this.seed = seed
    }

    show() {
        let w = this.seed > 0.5 ? this.r : this.r * 2
        noStroke()
        fill(255)
        ellipse(this.x, this.y, w, this.r)
    }

    move() {
        this.x -= 10
    }

}
