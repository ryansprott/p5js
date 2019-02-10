"use strict";

let cells = []

function setup() {
	createCanvas(600, 600);
	background(0); 
  noStroke(); 

  var gridSize = 100

  for (var x = gridSize; x <= width; x += gridSize) {
    for (var y = gridSize; y <= height; y += gridSize) {
			let dx = floor(random(-1, 2))
			let dy = floor(random(-1, 2))
			let cell = new Cell(x, y, dx, dy, gridSize)
			cells.push(cell)			
			// ellipse(x - 50, y - 50, 20)
			stroke(255, 0, 255)
			line(x, 0, x, height)
			line(0, y, width, y)
    }
  }

}

function draw() {
	for (let cell of cells) {
		cell.show()
	}
	if (frameCount % 600 == 0) {
		cells = []
		setup()
	}
}
