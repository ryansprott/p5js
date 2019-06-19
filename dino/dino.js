class Dino {
    constructor() {
        this.r  = 50
        this.x  = 75
        this.y  = height - this.r
        this.vy = 0
        this.g  = 3
        this.fl = 0
    }

    show() {
        noStroke()
        fill(127, this.fl)
        ellipse(this.x, this.y, this.r, this.r)
    }

    move() {
        this.y  += this.vy
        this.vy += this.g
        this.y  = constrain(this.y, 0, height - this.r)
    }

    jump() {
        this.vy = this.y === height - this.r ? -35 : this.vy
    }

    hit(cactus) {
        let d  = dist(this.x, this.y, cactus.x, cactus.y)
        let r1 = this.r * 0.5
        let r2 = cactus.w * 0.5
        return d < r1 + r2
    }
}
