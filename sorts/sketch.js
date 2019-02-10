let bubble    = [], bub_x = 0
let insertion = [], ins_x = 1
let selection = [], sel_x = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
	for (let i = 0; i < width; i++) {
    bubble[i] = insertion[i] = selection[i] = random(height)    
  }
}

function draw() {
	background(0)
  if (bub_x < bubble.length) {
    for (let bub_y = 0; bub_y < (bubble.length - bub_x - 1); bub_y++) {
      let a = bubble[bub_y]
      let b = bubble[bub_y+1]
      if (a > b) {
        swap(bubble, bub_y, bub_y+1)
      }
		}		
  } else {
    console.log("bubble sort (yellow) finished")
  }
  bub_x++

  if (ins_x <= insertion.length) {
		let ins_y = ins_x
		while (ins_y > 0 && insertion[ins_y-1] > insertion[ins_y]) {
			swap(insertion, ins_y, ins_y-1)
			ins_y = ins_y-1
		}		
  } else {
    console.log("insertion sort (red) finished")
  }	
  ins_x++

  if (sel_x <= selection.length - 1) {
    let min = sel_x
    for (let sel_y = sel_x+1; sel_y < selection.length; sel_y++) {
      if (selection[sel_y] < selection[min]) {
        min = sel_y
      }
    }
    if (min != sel_x) {
      swap(selection, sel_x, min)
    }
  } else {
    console.log("selection sort (aqua) finished")
  }
  sel_x++
  
  // bubble (yellow)
  for (let i in bubble) {
    stroke(255, 255, 0)
		point(i, height - bubble[i])
  }

  // insertion (red)
  for (let i in insertion) {
    stroke(255, 0, 0)
		point(i, height - insertion[i])
  }

  // selection (aqua)
  for (let i in selection) {
    stroke(0, 255, 255)
		point(i, height - selection[i])
  }

  if (ins_x > insertion.length && bub_x > bubble.length && sel_x > selection.length) {
    noLoop()
    console.log("all done")
  }

}

function swap(arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}
