"use strict";

let cells = []
let nums = []
let sideLength = 600
let numCells = 5
let ndx = 0

function setup() {
  createCanvas(sideLength, sideLength)
  background(255)
  populateNums()
  populateCells()
}

function draw() {
  frameRate(2)
  let num = nums[ndx]
  for (let a = 0; a < numCells; a++) {
    for (let b = 0; b < numCells; b++) {
      let disp = parseInt(num[a][b]) > 0
      cells[a][b].show(disp)
    }
  }
  //ndx = (ndx < nums.length) ? ndx + 1 : 0
  ndx = Math.floor(random(0, nums.length))
}

function populateNums() {
  for (let n = 1; n <= 32767; n++) {
    let output = []
    let binary = dec2bin(n)
    output[0]  = binary.substr(0, numCells).split('')
    output[1]  = binary.substr(numCells, numCells).split('')
    output[2]  = binary.substr(numCells * 2, numCells).split('')
    output[3]  = binary.substr(numCells, numCells).split('')
    output[4]  = binary.substr(0, numCells).split('')
    nums.push(output)
  }
}

function populateCells() {
  let unit = sideLength / numCells
  for (let x = unit; x <= width; x += unit) {
    let a = (x / unit) - 1
    let z = []
    for (let y = unit; y <= height; y += unit) {
      let cell = new Cell(x - unit, y - unit, unit)
      let b = (y / unit) - 1
      z[b] = cell
    }
    cells[a] = z
  }
}

function dec2bin(n) {
	var i = 0
	var bin = []
	var str = ""
	
	while (n > 0) { 
		bin[i] = Math.floor(n % 2); 
		n = Math.floor(n / 2); 
		i++; 
	}

	while (bin.length < 15) {
		bin.push(0)
	}
	
	for (var j = bin.length - 1; j >= 0; j--) {
		str += bin[j]
	}
	
	return str
}
