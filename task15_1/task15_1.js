let balloon=document.body.querySelector("#balloon");
window.addEventListener("keydown", changeSize);

function originalSize(str) {
    let s=[];
    for (let i=0; i<str.length-2; i++) {
        s.push(str[i]);
    }
    s=+s.join("");
    return s;
}

function changeSize(ev) {
    let fSize = window.getComputedStyle(balloon).fontSize;
    let s = originalSize(fSize);
    if (ev.key == "ArrowUp") {
        s *= 1.1;
        balloon.style.fontSize = s + 'px';
        ev.preventDefault();
    } else if (ev.key == "ArrowDown") {
        s *= 0.9;
        balloon.style.fontSize = s + 'px';
        ev.preventDefault();
    }
    if (s > 200) {
        balloon.innerHTML = "💥";
        window.removeEventListener("keydown", changeSize)
    }
}