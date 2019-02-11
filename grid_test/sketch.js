"use strict";

let cells = []
let sideLength = 800
let numCells = 8
let subCells = 3

function setup() {
	createCanvas(sideLength, sideLength)
	background(0)
	noLoop()

  let gridSize = sideLength / numCells

  for (let x = gridSize; x <= width; x += gridSize) {
    for (let y = gridSize; y <= height; y += gridSize) {
			let cell = new Cell(x, y, gridSize, subCells)
			cells.push(cell)
			grid(x, y)
    }
  }
}

function draw() {
	for (let cell of cells) {
		//cell.show()
	}
	cells[9].show()
}

function grid(x, y) {
	stroke(255, 0, 255)
	line(x, 0, x, height)
	line(0, y, width, y)
}
