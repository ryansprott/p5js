class Particle {

  constructor() {
    this.location = createVector(random(windowWidth), random(windowHeight))
    this.velocity = createVector(0, 0)
    this.acceleration = createVector(0, 0);
    this.maxspeed = 10
    this.alpha = random(360)
    this.mass = random(0.1, 1)
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass)
    this.acceleration.add(f)
  }

  finished() {
    return this.alpha < 0
  }

  update() {
    this.velocity.add(this.acceleration)
    this.velocity.limit(this.maxspeed)
    this.location.add(this.velocity)
    this.acceleration.mult(0)
    this.alpha -= 0.5
  }

  show() {
    noStroke()
    fill(this.alpha, 75, 100)
    ellipse(this.location.x, this.location.y, this.mass*16, this.mass*16)
  }

  checkEdges() {
    if ((this.location.x > width) || (this.location.x < 0)) {
      this.velocity.x *= -1
    }
    if ((this.location.y > height) || (this.location.y < 0)) {
      this.velocity.y *= -1
      //this.location.y = height
    }
  }

}
