class Cell {
  constructor(x, y, size, subcells) {
    this.x        = x
    this.y        = y
    this.size     = size
    this.subcells = subcells
  }

  show() {
    for (let i = 1; i <= this.subcells; i++) {
      for (let j = 1; j <= this.subcells; j++) {
        this.subgrid(i, j)
      }
    }
  }

  subgrid(i, j) {
    let subdiv = this.size / this.subcells

    stroke(255)
    strokeWeight(5)
    point(this.x - subdiv * i, this.y - subdiv * j)

    noFill()
    stroke(0, 255, 0)
    strokeWeight(0.5)
    rectMode(CORNER)
    rect(this.x - subdiv * i, this.y - subdiv * j, subdiv, subdiv)
  }
}
