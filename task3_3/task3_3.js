function countBs(str) {
    let res=0;
    for (let v of str) {
        if (v="B")  res++;
    }
    return res;
}

console.log(countBs("sbbbs"));

function countChar(str, ch) {
    let res=0;
    for (let v of str) {
        if (v==ch)  res++;
    }
    return res;
}

console.log(countChar("qwerqtyq", "q"));