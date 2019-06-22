let arr, cols, rows
let reso = 15

function setup() {
	createCanvas(windowWidth, windowHeight - 20);
	cols = floor(width / reso)
	rows = floor(height / reso)
	arr = randomArray(blankArray(cols, rows))
}

function draw() {
	// frameRate(5)
	step()

	for (let x = 0; x < arr.length; x++) {
		for (let y = 0; y < arr[x].length; y++) {
			a = x * reso
			b = y * reso
			fil = arr[x][y] === 1 ? color(0, 255, 0) : color(0)
			fill(fil)
			rect(a, b, reso, reso)
		}
	}
}

step = () => {
	let next = blankArray(cols, rows)
	for (let y = 0; y < arr.length; y++) {
		for (let x = 0; x < arr[y].length; x++) {
			let xPositive = x > 0
			let yPositive = y > 0
			let xWithinBounds = x < arr[y].length - 1
			let yWithinBounds = y < arr.length - 1

			let hasNW = yPositive && xPositive
			let hasN  = yPositive
			let hasNE = yPositive && xWithinBounds
			let hasW  = xPositive
			let hasE  = xWithinBounds
			let hasSW = yWithinBounds && xPositive
			let hasS  = yWithinBounds
			let hasSE = xWithinBounds && yWithinBounds

			let nw = hasNW ? arr[y-1][x-1] : 0
			let n  = hasN  ? arr[y-1][x  ] : 0
			let ne = hasNE ? arr[y-1][x+1] : 0
			let w  = hasW  ? arr[y  ][x-1] : 0
			let e  = hasE  ? arr[y  ][x+1] : 0
			let sw = hasSW ? arr[y+1][x-1] : 0
			let s  = hasS  ? arr[y+1][x  ] : 0
			let se = hasSE ? arr[y+1][x+1] : 0
			let sumOfNeighbors = nw + n + ne + w + e + sw + s + se
			let me = arr[y][x]

			if (me === 1) {
				if (sumOfNeighbors < 2) {
					next[y][x] = 0
				} else if (sumOfNeighbors === 2 || sumOfNeighbors === 3) {
					next[y][x] = 1
				} else if (sumOfNeighbors > 3) {
					next[y][x] = 0
				}
			} else {
				if (sumOfNeighbors === 3) {
					next[y][x] = 1
				} else {
					next[y][x] = 0
				}
			}
		}
	}
	arr = next
}

blankArray = (cols, rows) => {
	let a = new Array(rows)
	for (let i = 0; i < a.length; i++) {
		a[i] = new Array(cols)
	}
	return a
}

randomArray = a => {
	for (let x = 0; x < a.length; x++) {
		for (let y = 0; y < a[x].length; y++) {
			a[x][y] = floor(random(2))
		}
	}
	return a
}
