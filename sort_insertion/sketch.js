let insertion = []
let x = 1
let y = 0

function setup() {
	createCanvas(1000, 600)
	for (let z = 0; z < width; z++) {
		insertion[z] = random(height)
	}
}

function draw() {
	background(0)

  if (x < insertion.length) {
		y = x
		while (y > 0 && insertion[y-1] > insertion[y]) {
			swap(insertion, y, y-1)
			y = y-1
		}		
  } else {
    console.log("finished")
    noLoop()
  }
	
	x++

  for (let i in insertion) {
    stroke(255, 0, 0)
		line(i, height, i, height - insertion[i])
		//point(i, height - values[i])
  }
}

function swap(arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}
