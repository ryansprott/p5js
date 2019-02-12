let a = 0.5
let b = 0.2
let theta = 0.0
let inc = 0.01

let x1, y1, x2, y2, x3, y3

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(255)
}

function draw() {
  translate(width/2, height/2)

  theta += inc

  x1 = a * cos(theta-inc) * exp(b * (theta-inc))
  y1 = a * sin(theta-inc) * exp(b * (theta-inc))

  x2 = a * cos(theta) * exp(b * theta)
  y2 = a * sin(theta) * exp(b * theta)

  stroke(0)
  line(x1, y1, x2, y2)

  if(theta >= TWO_PI)  {
    stroke(40, 10)
    x3 = a * cos((theta-TWO_PI)-inc) * exp(b * ((theta-TWO_PI)-inc))
    y3 = a * sin((theta-TWO_PI)-inc) * exp(b * ((theta-TWO_PI)-inc))
		line(x3, y3, x1, y1)
  }

  if(theta > 50.0)  {
		console.log('done')
    noLoop()
  }
}
