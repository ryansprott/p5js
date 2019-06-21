class Dino {
    constructor() {
        this.r = 50
        this.x = 75
        this.y = height - this.r
        this.gravity = 3
        this.fl = 0
        this.velocity = 0
    }

    show() {
        noStroke()
        fill(127, this.fl)
        ellipse(this.x, this.y, this.r, this.r)
    }

    move() {
        this.y += this.velocity
        this.velocity += this.gravity
        this.y = constrain(this.y, 0, height - this.r)
    }

    jump() {
        this.velocity = this.y === height - this.r ? -35 : this.velocity
    }

    hit(cactus) {
        let d  = dist(this.x, this.y, cactus.x, cactus.y)
        let r1 = this.r * 0.5
        let r2 = cactus.width * 0.5
        return d < r1 + r2
    }
}
