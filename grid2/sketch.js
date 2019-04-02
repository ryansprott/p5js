"use strict";

let cells = []
let sideLength = 900
let numCells = 3
let subCells = 3

function setup() {
  createCanvas(sideLength, sideLength)
  background(0)
  frameRate(5)
  let unit = sideLength / numCells
  for (let x = unit; x <= width + unit; x += unit) {
    for (let y = unit; y <= height + unit; y += unit) {
      let cell = new Cell(x, y, unit, subCells)
      cells.push(cell)
      // drawMainGrid(x, y)
    }
  }
  noLoop()
}

function draw() {
  background(0)
  for (let cell of cells) {
    cell.setup()
    cell.show()
  }
}

function drawMainGrid(x, y) {
  strokeWeight(2)
  stroke(248, 184, 0) // yellow
  line(x, 0, x, height)
  line(0, y, width, y)
}
