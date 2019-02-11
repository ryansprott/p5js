let sandpiles = [];

function setup() {    
  pixelDensity(1)
  createCanvas(200, 200);
  for (let i = 0; i < width; i++) {
    sandpiles[i] = []
    for (let j = 0; j < height; j++) {
      sandpiles[i][j] = 0
    }
  }
  sandpiles[floor(width / 2)][floor(height / 2)] = 100000
}

function topple() {
  let nextpiles = [];  
  for (let i = 0; i < width; i++) {
    nextpiles[i] = []
    for (let j = 0; j < height; j++) {
      nextpiles[i][j] = 0
    }
  }

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let num = sandpiles[x][y]
      if (num < 4) {
        nextpiles[x][y] = sandpiles[x][y]
      }
    }
  }

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let num = sandpiles[x][y]
      if (num >= 4) {
        nextpiles[x][y] += (num - 4)
        if (x+1 < width)
          nextpiles[x+1][y]++
        if (x-1 >= 0)
          nextpiles[x-1][y]++
        if (y+1 < height) 
          nextpiles[x][y+1]++
        if (y-1 >= 0) 
          nextpiles[x][y-1]++
      }
    }
  }
  sandpiles = nextpiles
}

function render() {
  loadPixels()
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let num = sandpiles[x][y]     
      let col = color(255, 0, 0)
      if (num == 0) {
        col = color(255, 255, 0)
      } else if (num == 1) {
        col = color(0, 185, 63)
      } else if (num == 2) {
        col = color(0, 104, 255)
      } else if (num == 3) {
        col = color(122, 0, 229)
      }
      set(x, y, col)
    }
  }
  updatePixels()
}

function draw() {  
  render()
  for (let i = 0; i < 100; i++) {
    topple()
  }
}
