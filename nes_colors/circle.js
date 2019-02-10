class Circle {
  constructor(x, y, color, size) {
    this.x = map(x, -1, 1, 0, width)
    this.y = map(y, -1, 1, height, 0)
    this.color = color
    this.size = map(size, -1, 1, 40, 200)
    this.life = map(size, -1, 1, 64, 1)
  }

  show() {
    noStroke()
    this.color.setAlpha(this.life)
    this.life -= 1
    fill(this.color)
    let elx = this.x + random(-20, 200)
    let ely = this.y + random(-20, 200)
    let siz = this.size * random(0.1, 0.9)
    ellipse(elx, ely, siz)
  }
}
