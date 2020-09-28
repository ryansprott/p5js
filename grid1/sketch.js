"use strict";

let cells = []
let sideLength = 1200
let numCells = 2
let subCells = 1
let rate = 2
let unit = sideLength / numCells

function setup() {
  createCanvas(sideLength, sideLength)
}

function draw() {
  frameRate(rate)
  background(0)
  cells = []
  for (let x = unit; x <= width + unit; x += unit) {
    for (let y = unit; y <= height + unit; y += unit) {
      let cell = new Cell(x, y, unit, subCells)
      cells.push(cell)
    }
  }
  for (let cell of cells) {
    cell.show()
  }
  if (frameCount % 5 === 0) {
    rate = ceil(random(1) * 10)
    numCells = ceil(random(1) * 9)
    subCells = ceil(random(1) * 6)
  }
}
