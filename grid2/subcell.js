"use strict";

class Subcell {
  constructor(x, y, size, increment = 0.05) {
    this.tx       = random()
    this.inc      = increment
    this.x        = x
    this.y        = y
    this.size     = size
  }

  show() {
    this.tx += this.inc
    // this.drawRect()
    this.drawLines()
    this.drawCircle(true) // blue
    this.drawPoint(true) // white
    this.drawCircle() // green
    this.drawPoint() // red
  }

  drawRect() {
    let rnd = noise(this.tx)
    let fil = (rnd >= 0.5) ? 0 : 255
    fill(fil)
    noStroke()
    rect(this.x, this.y, this.size, this.size)
  }

  drawPoint(corner = false) {
    let dx = (corner) ? this.x : this.x + (this.size / 2)
    let dy = (corner) ? this.y : this.y + (this.size / 2)
    let fl = (corner) ? color(255) : color(248, 56, 0)
    strokeWeight(5)
    stroke(fl)
    point(dx, dy)
  }

  drawLines() {
    strokeWeight(1)
    stroke(124, 56, 124)
    line(this.x, this.y, this.x + this.size, this.y)
    line(this.x, this.y, this.x, this.y + this.size)
  }

  drawCircle(corner = false) {
    strokeWeight(0.7)
    noFill()
    if (corner) {
      stroke(0, 228, 252)
      ellipseMode(CENTER)
    } else {
      stroke(0, 168, 68)
      ellipseMode(CORNER)
    }
    ellipse(this.x, this.y, this.size, this.size)
  }

}
