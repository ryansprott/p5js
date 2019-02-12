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
    let di = subdiv * i
    let dj = subdiv * j
    let dx = this.x - di
    let dy = this.y - dj
    this.drawPoints(dx, dy)
    this.drawLines(dx, dy, subdiv)
    this.drawCircles(dx, dy, subdiv)
    this.drawCircles(dx, dy, subdiv, true)
  }

  drawLines(dx, dy, subdiv) {
    strokeWeight(0.3)
    stroke(255)
    line(dx, dy, dx + subdiv, dy)
    line(dx, dy, dx, dy + subdiv)
  }

  drawPoints(dx, dy) {
    strokeWeight(5)
    stroke(255, 0, 0)
    point(dx, dy)
  }

  drawCircles(dx, dy, subdiv, corner = false) {
    strokeWeight(0.4)
    noFill()
    if (corner) {
      ellipseMode(CORNER)
      stroke(0, 100, 255)
    } else {
      stroke(0, 255, 0)
      ellipseMode(CENTER)
    }
    ellipse(dx, dy, subdiv, subdiv)
  }
}
