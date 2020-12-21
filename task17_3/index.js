let context=document.querySelector("canvas").getContext("2d");

let xr=100, yr=100, width=300, height=300, r=15;
let hx=200, hy=200, speedX=100, speedY=80;
let lastTime=null;

function animate(time){
    if (lastTime!=null) {
        updateAnimate( (time - lastTime)*0.001);
    }
    lastTime=time;
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

function  updateAnimate(h) {
    context.clearRect(0, 0, width*2, height*2);
    context.lineWidth = 5;
    context.fillStyle="#AE978B";
    context.fillRect(xr, yr, width, height);

    hx+=h*speedX;
    hy+=h*speedY;
    if (hx<xr+r || hx>width+100-r) speedX=-speedX;
    if (hy<yr+r || hy>height+100-r) speedY=-speedY;
    context.fillStyle="black";
    context.beginPath();
    context.arc(hx, hy, r, 0, Math.PI*2);
    context.fill();
}