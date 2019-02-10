class Cell {
  constructor(x, y, dx, dy, size) {
    this.x    = x;
    this.y    = y;
    this.dx   = dx;
    this.dy   = dy;
    this.size = size;
    this.weight = 1;
  }

  show() {
    if (this.dx > 0 && this.dy > 0) {
      this.blinkRate = 120
      stroke(255, 255, 255)
      fill(0, 0, 0)
    } else if (this.dx < 0 && this.dy > 0) {
      this.blinkRate = 100
      stroke(255, 0, 255)
      fill(0, 255, 0)				
    } else if (this.dx > 0 && this.dy < 0) {
      this.blinkRate = 80
      stroke(255, 255, 0)
      fill(0, 0, 255)
    } else if (this.dx < 0 && this.dy < 0) {
      this.blinkRate = 60
      stroke(255, 0, 0)
      fill(0, 255, 255)
    } else if (this.dx == 0 && this.dy > 0) {
      this.blinkRate = 40
      stroke(0, 255, 0)
      fill(255, 0, 255)
    } else if (this.dx > 0 && this.dy == 0) {
      this.blinkRate = 20
      stroke(0, 0, 255)
      fill(255, 255, 0)
    } else if (this.dx == 0 && this.dy < 0) {
      this.blinkRate = 10
      stroke(127, 255, 127)
      fill(255, 127, 255)
    } else if (this.dx < 0 && this.dy == 0) {
      this.blinkRate = 10
      stroke(0, 0, 0)
      fill(255, 255, 255)
    } else if (this.dx == 0 && this.dy == 0) {
      this.blinkRate = 60
      stroke(0, 0, 0)
      fill(0, 0, 0)
    }

    if (frameCount % this.blinkRate > this.blinkRate / 2) {
      this.weight = lerp(this.weight, this.size / 32, 0.1)      
    } else {
      this.weight = lerp(this.weight, this.size / 4, 0.1)      
    }
    strokeWeight(this.weight)
    ellipse(this.x - this.size / 2, this.y - this.size / 2, this.size / 2, this.size / 2)
  }
}
