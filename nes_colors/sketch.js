function setup() {
  createCanvas(1200, 600);
  this.numCircles = 1000
  this.frameDiv = 1
  this.circles = []
  this.index = 0
  this.colors = [
    color(0,0,0),
    color(0,0,188),
    color(0,0,252),
    color(0,64,88),
    color(0,88,0),
    color(0,88,248),
    color(0,104,0),
    color(0,120,0),
    color(0,120,248),
    color(0,136,136),
    color(0,168,0),
    color(0,168,68),
    color(0,184,0),
    color(0,232,216),
    color(0,252,252),
    color(60,188,252),
    color(68,40,188),
    color(80,48,0),
    color(88,216,84),
    color(88,248,152),
    color(104,68,252),
    color(104,136,252),
    color(124,124,124),
    color(136,20,0),
    color(148,0,132),
    color(168,0,32),
    color(168,16,0),
    color(172,124,0),
    color(188,188,188),
    color(216,0,204),
    color(228,0,88),
    color(228,92,16),
    color(248,56,0),
    color(248,248,248),
    color(152,120,248),
    color(248,120,248),
    color(248,88,152),
    color(248,120,88),
    color(252,160,68),
    color(248,184,0),
    color(184,248,24),
    color(120,120,120),
    color(252,252,252),
    color(164,228,252),
    color(184,184,248),
    color(216,184,248),
    color(248,184,248),
    color(248,164,192),
    color(240,208,176),
    color(252,224,168),
    color(248,216,120),
    color(216,248,120),
    color(184,248,184),
    color(184,248,216),
    color(216,216,216)
  ]
  let rnd = parseInt(random(this.colors.length))
  this.bg = this.colors[rnd]
  background(this.bg)
}

function draw() {
  let sine = this.getSine()
  let cos  = this.getCosine()

  if (frameCount % this.frameDiv == 0) {
    if (this.index < this.colors.length) {
      let cirx = sine * random(-1, 1)
      let ciry = cos * random(-1, 1)
      let cir = new Circle(cirx, ciry, this.colors[this.index], sine)
      this.circles.push(cir)
      this.index++
    } else {
      this.index = 0
    }

    for (let circle of circles) {
      if (circle.life > 0) {
        circle.show()
      }
    }

    if (this.circles.length > this.numCircles) {
      background(this.bg)
      this.circles = []
    }

  }
}

function getSine() {
  return sin(millis() / 1000)
}

function getCosine() {
  return cos(millis() / 1000)
}
