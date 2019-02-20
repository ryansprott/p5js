"use strict";

class Cell {
  constructor(x, y, size) {
    this.x        = x
    this.y        = y
    this.size     = size
  }

  show(on) {
    let disp = on ? 0 : 255
    fill(disp)
    noStroke()
    rect(this.x, this.y, this.size, this.size)
  }
}
