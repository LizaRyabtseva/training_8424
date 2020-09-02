function arrayToList(arr) {
    let list=null;
    arr=arr.reverse();
    for (let i=0; i<arr.length; i++) {
        list = {
            value: arr[i],
            rest: list,
        }
    }
    return list;
}

function listToArray(list) {
    let arr=[];
    for (let i=list; i ;i=i.rest) {
        arr.push(i.value);
    }
    return arr;
}

function prepend(list, elem) {
    return {elem,  rest: list};
}

function nth(list, number) {
    if ((typeof list)!="object") return undefined;
    return (number==0) ? list.value : nth(list.rest, number-1);
}
console.log(nth({value: 2, rest: { value: 3, rest : null}}, 1));