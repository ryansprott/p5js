class ParticleSystem {

  constructor(num) {
    this.particles = []
    for (let i = 0; i < num; i++) {
      let p = new Particle()
      this.particles.push(p)
    }
  }

  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let prt = this.particles[i]

      let gravity = createVector(0, 0.9 * prt.mass)      
      prt.applyForce(gravity)
      
      if (mouseIsPressed) {
        let acc = this.createAcceleration(prt)
        prt.applyForce(acc)  
      }

      prt.update()
      prt.show()
      prt.checkEdges()
      if (prt.finished()) {
        this.particles.splice(i, 1)
      }
    }
  }

  createAcceleration(particle) {
    let mouse = createVector(mouseX, mouseY)
    let direction = p5.Vector.sub(mouse, particle.location)
    direction.normalize()
    return direction.mult(0.5)
  }

}
