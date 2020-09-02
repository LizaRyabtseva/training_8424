function range(start, end, h=1) {
    let arr=[];
    for (let i=Math.min(start, end); i<=Math.max(start, end);  i+=Math.abs(h)) {
        arr.push(i);
    }
    if (h<1)
        return arr.reverse();
    else return  arr;
}

function sum(arr) {
    return arr.reduce((x, y) => x+y);
}

console.log(range(5,2, -1));
