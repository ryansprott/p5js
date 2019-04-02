"use strict";

class Subcell {
  constructor(x, y, size) {
    this.tx       = random()
    this.inc      = 0.05
    this.x        = x
    this.y        = y
    this.size     = size
  }

  show() {
    this.tx += this.inc
    // this.drawRect()
    this.drawLines()
    this.drawCircle(true) // blue
    this.drawCircle() // green
    this.drawPoint()
  }

  drawRect() {
    let rnd = noise(this.tx)
    let fil = (rnd >= 0.5) ? 0 : 255
    fill(fil)
    noStroke()
    rect(this.x, this.y, this.size, this.size)
  }

  drawPoint() {
    strokeWeight(5)
    stroke(248, 56, 0)
    point(this.x, this.y)
  }

  drawLines() {
    strokeWeight(1)
    stroke(124, 124, 124)
    line(this.x, this.y, this.x + this.size, this.y)
    line(this.x, this.y, this.x, this.y + this.size)
  }

  drawCircle(corner = false) {
    strokeWeight(0.7)
    noFill()
    if (corner) {
      stroke(164, 228, 252)
      ellipseMode(CORNER)
    } else {
      stroke(0, 168, 68)
      ellipseMode(CENTER)
    }
    ellipse(this.x, this.y, this.size, this.size)
  }

}
