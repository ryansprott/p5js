var x, y, zr, zi, zr2, zi2, cr, ci, n
var zmx1, zmx2, zmy1, zmy2, f, di, dj
var fn1, fn2, fn3, re, gr, bl, xt, yt, j
var i = 0

function setup() {
    createCanvas(500, 500)
    f    = 10
    fn1  = random(20) 
    fn2  = random(20) 
    fn3  = random(20)
    zmx1 = int(width / 4)	
    zmy1 = int(height / 4)
    zmx2 = zmy2 = 2
    di = dj = 0
}

function draw() {
    if (i <= width) {
        i++
    } 
    x = (i +  di) / zmx1 - zmx2
    for (j = 0; j <= height; j++) {
        y  = zmy2 - (j + dj) / zmy1
        zr = zi = zr2 = zi2 = 0 
        cr = x   
        ci = y  
        n  = 1
        while (n < 200 && (zr2 + zi2) < 4) {
            zi2 = zi * zi
            zr2 = zr * zr
            zi  = 2 * zi * zr + ci
            zr  = zr2 - zi2 + cr
            n++
        }  
        re = (n * fn1) % 255
        gr = (n * fn2) % 255
        bl = (n * fn3) % 255
        stroke(re, gr, bl) 	  
        point(i, j)
    }
}

function mousePressed() {
    background(200) 
    xt   = mouseX
    yt   = mouseY
    di   = di + mouseX - float(width / 2)
    dj   = dj + mouseY - float(height / 2)
    zmx1 = zmx1 * f
    zmx2 = zmx2 * (1 / f)
    zmy1 = zmy1 * f
    zmy2 = zmy2 * (1 / f)
    di   = di * f
    dj   = dj * f
    i = j = 0
}
