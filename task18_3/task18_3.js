let submit=document.querySelector("#submit");

submit.addEventListener("click", () =>{
    document.querySelector(".block").innerHTML="";
    let n=+document.querySelector("#size").value;

    let checkboxes=[], randNumbers=[], initialState=[];
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
        initialState=checkedState(checkboxes, n);
        for (let i=0; i<n; i++) {
            for (let j=0; j<n; j++) {
                if (count(initialState, i, j, n)<2 || count(initialState, i, j, n)>3)  checkboxes[i][j].checked=false;
                else if (count(initialState, i, j, n)===3)  checkboxes[i][j].checked=true;
            }
        }
    });
});


function count(state, x, y, n) {
    let points=0, curX, curY;

    for (let i=-1; i<2; i++) {
        for (let j=-1; j<2; j++) {
            if (i===0 && j===0) continue;
            curX=x+i;
            curY=y+j;

            if (curX>=0 && curX<n && curY>=0 && curY<n) {
                if (state[curX][curY]===true) points++;
            }
        }
    }
    return points;
}

function checkedState(checkboxes, n) {
    let state=[];
    for (let i=0; i<n; i++) {
        state[i]=[];
    }
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            (checkboxes[i][j].checked===true) ? state[i][j]=true : state[i][j]=false;
        }
    }
    return state;
}