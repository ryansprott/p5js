class Particle {

  constructor() {
    this.location = createVector(random(windowWidth), random(windowHeight))      
    this.velocity = createVector(0, 0)
    this.acceleration = createVector(0, 0);
    this.maxspeed = 10
    this.maxforce = 0.1
    this.mass = random(1, 2)
    this.r = 16
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass)
    this.acceleration.add(f)
  }

  update() {
    this.velocity.add(this.acceleration)
    this.velocity.limit(this.maxspeed)
    this.location.add(this.velocity)
    this.acceleration.mult(0)
  }

  show() {
    colorMode(HSB)
    noStroke()
    fill(this.mass * 180, 75, 100)
    ellipse(this.location.x, this.location.y, this.r)
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

  drag() {
    let speed = this.velocity.mag()
    let dragmag = 0.9 * speed * speed
    let drag = this.velocity.copy()
    drag.mult(-1)
    drag.normalize()
    drag.mult(dragmag)
    this.applyForce(drag)
  }

  separate(particles) {
    let sum = createVector()
    let count = 0
    let desired = 16

    for (let particle of particles) {
      let distance = p5.Vector.dist(this.location, particle.location)        
      if (distance > 0 && distance < desired) {
        let diff = p5.Vector.sub(this.location, particle.location)
        diff.normalize()
        diff.div(distance)
        sum.add(diff)
        count++
      }
    }

    if (count > 0) {
      sum.div(count)
      sum.normalize()
      sum.mult(this.maxspeed)
      let steer = p5.Vector.sub(sum, this.velocity)
      steer.limit(this.maxforce)
      this.applyForce(steer)
    }
  }

}
