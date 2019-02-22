"use strict";

let cells = []
let sideLength = 600
let numCells = 3
let subCells = 3

function setup() {
  createCanvas(sideLength, sideLength)
  background(0)
  let unit = sideLength / numCells
  for (let x = unit; x <= width + unit; x += unit) {
    for (let y = unit; y <= height + unit; y += unit) {
      let cell = new Cell(x, y, unit, subCells)
      cells.push(cell)
      drawMainGrid(x, y)
    }
  }
  noLoop()
}

function draw() {
  for (let cell of cells) {
    cell.show()
  }
}

function drawMainGrid(x, y) {
  strokeWeight(2)
  stroke(248, 184, 0)
  line(x, 0, x, height)
  line(0, y, width, y)
}
