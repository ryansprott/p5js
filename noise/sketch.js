function setup() {
  tx = 0.1
  ty = 0.1
  createCanvas(900, 900)
}

function draw() {
  tx = tx > 1 ? 0.1 : tx
  ty = ty > 1 ? 0.1 : ty

  background(250)
  strokeWeight(2)

  let nx = noise(tx)
  let ny = noise(ty)
  let x = map(nx, 0, 1, 0, width)
  let y = map(ny, 0, 1, 0, height)

  stroke(255, 0, 0)
  line(x, 0, y, height)

  stroke(0, 0, 255)
  line(0, y, height, x)

  tx += 0.001
  ty += 0.001
}
