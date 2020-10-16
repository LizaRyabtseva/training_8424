let cat=document.getElementById('cat');
let hat=document.getElementById('hat');

let angle=Math.PI/2;
function animate(time, lastTime) {
    if (lastTime!=null) {
        angle+=(time-lastTime)*0.001;
    }
    cat.style.top = 250 + (Math.sin(angle) * 70) + 'px';
    cat.style.left = 450 + (-Math.cos(angle) * 200) + 'px';
    hat.style.top=250+(Math.sin(angle)*300)+'px';
    hat.style.left=400+Math.cos(angle)*420+'px';
    requestAnimationFrame(newTime => animate(newTime, time));
}
requestAnimationFrame(animate);