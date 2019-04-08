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
    // rect(this.x, this.y, this.size, this.size / 2)
    rect(this.x, this.y, this.size / 2, this.size)
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
    // NW -> NE
    stroke(124, 56, 124)
    line(this.x, this.y, this.x + this.size, this.y)
    // NW -> SW
    stroke(255, 0, 0)
    line(this.x, this.y, this.x, this.y + this.size)
    // NW -> SE
    stroke(0, 248, 0)
    line(this.x, this.y, this.x + this.size, this.y + this.size)
    // SW -> NE
    stroke(255)
    line(this.x, this.y + this.size, this.x + this.size, this.y)
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
