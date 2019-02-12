function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	let a = 0.0;
	let inc = TWO_PI * 2 / 16.0;
	for (let i = 0; i < 16; i++) {
		let x = i * 25;
		let y = 30.0;
		let y1 = y + sin(a) * (y - 5);
		let col = sin(a) < 0 ? color(0, 0, 255) : color(0, 255, 0);

		strokeWeight(5);
		stroke(col);
		//rect(x, y, 10, y1);
		line(x, y, x, y1);
		a += inc;
	}
}
