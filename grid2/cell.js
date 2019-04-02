"use strict";

class Cell {
  constructor(x, y, size, subcells) {
    this.tx       = random()
    this.x        = x
    this.y        = y
    this.size     = size
    this.subcells = subcells
    this.subunit  = size / subcells
  }

  show() {
    this.tx += 0.01
    for (let i = 1; i <= this.subcells; i++) {
      for (let j = 1; j <= this.subcells; j++) {
        this.drawSubGrid(i, j)
      }
    }
  }

  drawSubGrid(i, j) {
    let dx = this.x - (this.subunit * i)
    let dy = this.y - (this.subunit * j)
    // this.drawPoints(dx, dy)
    // this.drawLines(dx, dy)
    this.drawRects(dx, dy)
    // this.drawCircles(dx, dy)
    // this.drawCircles(dx, dy, true)
  }

  drawLines(dx, dy) {
    strokeWeight(1)
    stroke(124, 124, 124)
    line(dx, dy, dx + this.subunit, dy)
    line(dx, dy, dx, dy + this.subunit)
  }

  drawPoints(dx, dy) {
    strokeWeight(5)
    stroke(248, 56, 0)
    point(dx, dy)
  }

  drawRects(dx, dy) {
    let rnd = noise(this.tx)
    let fil = (rnd >= 0.5) ? 0 : 255
    fill(fil)
    noStroke()
    rect(dx, dy, this.subunit, this.subunit)
  }

  drawCircles(dx, dy, corner = false) {
    strokeWeight(0.7)
    noFill()
    if (corner) {
      stroke(164, 228, 252)
      ellipseMode(CORNER)
    } else {
      stroke(0, 168, 68)
      ellipseMode(CENTER)
    }
    // ellipse(dx, dy, this.subunit, this.subunit)
    let nx = this.subunit * noise(this.tx)
    ellipse(dx, dy, nx, nx)
  }
}
