class Particle {

  constructor() {
    this.location = { x: random(windowWidth), y: random(windowHeight) }
    this.mass = random(1, 2)
    this.r = 16
  }

  show() {
    colorMode(HSB)
    noStroke()
    fill(this.mass * 180, 75, 100)
    ellipse(this.location.x, this.location.y, this.r)
  }

  checkEdges() {
    if ((this.location.x > width) || (this.location.x < 0)) {
      //this.velocity.x *= -1
      this.location.x = width
    }
    if ((this.location.y > height) || (this.location.y < 0)) {
      //this.velocity.y *= -1
      this.location.y = height
    }
  }

  separate(particles) {
    let desired = 16

    for (let particle of particles) {
      let distx = this.location.x - particle.location.x
      let disty = this.location.y - particle.location.y
      if ((distx > 0 && disty > 0) && (distx < desired || disty < desired)) {
        this.location.x *= 0.99
        this.location.y *= 0.99
      }
    }
  }
}
