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
    this.drawLines(dx, dy)
  }

  drawLines(dx, dy) {
    strokeWeight(1)
    stroke(124, 124, 124)
    if (random(1) > 0.95) {
      line(dx, dy, dx + this.subunit, dy) // W -> E
    }
    if (random(1) > 0.95) {
      line(dx, dy, dx, dy + this.subunit) // N -> S
    }
    if (random(1) > 0.95) {
      line(dy, dx, dy + this.subunit, dx + this.subunit) // NW -> SE
    }
    if (random(1) > 0.95) {
      line(dx, dy + this.subunit, dx + this.subunit, dy) // SW -> NE
    }
  }
}
