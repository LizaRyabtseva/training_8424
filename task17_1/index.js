let context=document.querySelector("canvas").getContext("2d");

function trapezia(x, y) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x+30, y-80);
    context.lineTo(x+100, y-80);
    context.lineTo(x+130, y);
    context.closePath();
    context.stroke();
}

trapezia(10, 120);

function rhomb(x, y) {
    context.translate(x, y);
    context.fillStyle="#AE978B";
    context.rotate(Math.PI/4);
    context.fillRect(x, y, 80, 80);
    context.resetTransform();
}
rhomb(130,-40);

function zigzagPath(x, y, h1, h2) {
    context.beginPath();
    context.moveTo(x, y);
    for (let i=0; i<13; i++) {
        if (i%2!==0) {
            context.lineTo(x+h1, y+(i)*h2);
        } else {
            context.lineTo(x, y+(i)*h2);
        }
    }
    context.stroke();
}
zigzagPath(350, 20, 90, 10);

function spiral(x, y, r) {
    context.beginPath();
    context.moveTo(x+r, y+r);
    for (let i=0; i<133; i++) {
        context.lineTo(x+r+Math.cos(i*Math.PI/20)*r*i/200, y+r+Math.sin(i*Math.PI/20)*r*i/200);
    }
    context.stroke();
}
spiral(470, 20, 70);

function star(x, y, r) {
    context.beginPath();
    context.moveTo(x+r, y+r);
    for (let i=0; i<9; i++) {
        context.quadraticCurveTo(x+r, y+r, x+r+Math.cos(i*Math.PI/4)*r, y+r+Math.sin(i*Math.PI/4)*r);
    }
    context.fillStyle="#AE978B";
    context.fill();
}
star(600, 20, 70);