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
        this.subgrid(i, j)
      }
    }
  }

  subgrid(i, j) {
    let di = this.subunit * i
    let dj = this.subunit * j
    let dx = this.x - di
    let dy = this.y - dj
    this.drawPoints(dx, dy)
    this.drawLines(dx, dy)
    this.drawCircles(dx, dy)
    this.drawCircles(dx, dy, true)
  }

  drawLines(dx, dy) {
    strokeWeight(0.3)
    stroke(255)
    line(dx, dy, dx + this.subunit, dy)
    line(dx, dy, dx, dy + this.subunit)
  }

  drawPoints(dx, dy) {
    strokeWeight(5)
    stroke(255, 0, 0)
    point(dx, dy)
  }

  drawCircles(dx, dy, corner = false) {
    strokeWeight(0.4)
    noFill()
    if (corner) {
      stroke(0, 100, 255)
      ellipseMode(CORNER)
    } else {
      stroke(0, 255, 100)
      ellipseMode(CENTER)
    }
    ellipse(dx, dy, this.subunit, this.subunit)
  }
}
