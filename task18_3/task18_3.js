let submit=document.querySelector("#submit");

submit.addEventListener("click", () =>{
    document.querySelector(".block").innerHTML="";
    let n=+document.querySelector("#size").value;

    let checkboxes=[], randNumbers=[];
    let block=document.querySelector(".block");
    block.style.width=`${20*n}px`;

    for (let i=0; i<n; i++) {
        checkboxes[i]=[];
        randNumbers[i]=[];
    }

    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkboxes[i].push(checkbox);
            block.appendChild(checkbox);
        }
    }

    let button=document.createElement("button");
    button.textContent="Следующий ход";
    block.appendChild(button);

    for (let i=0; i<n; i++) {
        for (let j=0; j<n*5/11; j++) {
            randNumbers[i].push(Math.random() * n);
        }
    }

    for (let i=0; i<n; i++) {
        for (let rn of randNumbers[i]) {
            for (let ch of checkboxes[i]) {
                if (checkboxes[i].indexOf(ch) === Math.floor(rn)) ch.checked = true;
            }
        }
    }

    button.addEventListener("click", () => {
        for (let i=0; i<n; i++) {
            for (let j=0; j<n; j++) {
               if (count(checkboxes, i, j, n)<2 || count(checkboxes, i, j, n)>3)  checkboxes[i][j].checked=false;
               else if (count(checkboxes, i, j, n)===3)  checkboxes[i][j].checked=true;
            }
        }
    });

});

function count(checkboxes, x, y, n) {
    let points=0, curX, curY;

    for (let i=-1; i<2; i++) {
        for (let j=-1; j<2; j++) {
            if (i===0 && j===0) continue;
            curX=x+i;
            curY=y+j;

            if (curX>=0 && curX<n && curY>=0 && curY<n) {
                if (checkboxes[curX][curY].checked===true) points++;
            }
        }
    }
    return points;
}