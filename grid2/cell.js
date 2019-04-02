"use strict";

class Cell {
  constructor(x, y, size, subcells) {
    this.x        = x
    this.y        = y
    this.size     = size
    this.subcells = subcells
    this.subunit  = size / subcells
    this.subs     = []
  }

  setup() {
    for (let i = 1; i <= this.subcells; i++) {
      for (let j = 1; j <= this.subcells; j++) {
        let dx = this.x - (this.subunit * i)
        let dy = this.y - (this.subunit * j)
        let sc = new Subcell(dx, dy, this.subunit)
        this.subs.push(sc)
      }
    }
  }

  show() {
    for (let sc of this.subs) {
      sc.show()
    }
  }

}
