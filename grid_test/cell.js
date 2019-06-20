"use strict";

class Cell {
  constructor(x, y, size, subcells) {
    this.x        = x
    this.y        = y
    this.size     = size
    this.subcells = subcells
    this.subunit  = size / subcells
  }

  show() {
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
    this.drawLines(dx, dy)
    // this.drawCircles(dx, dy) // blue
    // this.drawCircles(dx, dy, true) // green
  }

  drawLines(dx, dy) {
    strokeWeight(1)
    stroke(124, 124, 124)
    // line(dx, dy, dx + this.subunit, dy) // W -> E
    // line(dx, dy, dx, dy + this.subunit) // N -> S
    // line(dy, dx, dy + this.subunit, dx + this.subunit) // NW -> SE
    // line(dx, dy + this.subunit, dx + this.subunit, dy) // SW -> NE
    line(dy, dx, dx + this.subunit, dy + this.subunit)
  }

  drawPoints(dx, dy) {
    strokeWeight(5)
    stroke(248, 56, 0)
    point(dx, dy)
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
    ellipse(dx, dy, this.subunit, this.subunit)
  }
}
