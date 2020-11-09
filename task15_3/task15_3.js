function asTabs(tab) {
    let b=[], atr=[];
    Array.from(tab.children).map(x => {
        b.push(x.textContent);
        atr.push(x.getAttribute("data-tabname"));
        x.style.display="none";
    });
    tab.appendChild(document.createElement("br"));

    for (let i=0; i<b.length; i++) {
        tab.appendChild(document.createElement("button"));
    }

    let buttons=document.querySelectorAll("button");
    for (let i=0; i<buttons.length; i++) {
        buttons[i].innerHTML=atr[i];
        buttons[i].style.fontSize=14+'pt';
        buttons[i].addEventListener("click", () => selectButton(document.querySelector("div"), buttons[i], b[i]));
    }

    function selectButton(panel, button, b) {
        for (let but of buttons) {
            if (button==but) {
                panel.innerHTML = b;
                panel.style.display="inherit"
                but.style.backgroundColor = "pink";
                but.style.fontSize=18+'pt';
            } else {
                but.style.backgroundColor = "";
                but.style.fontSize=14+'pt';
            }
        }
    }
}

let tab=document.querySelector("tab-panel");
asTabs(tab);