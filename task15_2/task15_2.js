let shadows=[];
for (let i=0; i<50; i++) {
    let sh=document.createElement("div");
    sh.className="shadows";
    sh.style.position = "absolute";
    sh.style.backgroundColor= "pink";
    sh.style.height = 15 + 'px';
    sh.style.width = 15 + 'px';
    sh.innerHTML="L";
    document.body.appendChild(sh);
    shadows.push(sh);
}
let i=0;
window.addEventListener("mousemove", ev => {
    let sh=shadows[i];
    sh.style.left = (ev.clientX)+ 'px';
    sh.style.top = (ev.clientY)+ 'px';
    i=(i+1)%shadows.length;
});