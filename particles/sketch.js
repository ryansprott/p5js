let ps;

function setup() {
  colorMode(HSB)
  createCanvas(windowWidth, windowHeight)
  ps = new ParticleSystem(2000)
}

function draw() {
  background(240, 100, 100)
  ps.run()
}
