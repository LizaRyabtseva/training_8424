function everySome(arr, fun) {
    return !arr.some(x => !fun(x));
}
console.log(everySome([1,7,4], x => x>0));

function everyMap(arr, fun) {
    arr=arr.map(fun);
    return (arr.includes(false)) ? false: true;
}
console.log(everyMap([1,-2,-4], x => x>0));

function everyCicl(arr, fun) {
    for (let v of arr) {
        if (!fun(v)) return  false;
    }
    return true;
}

console.log(everyCicl([1,3,4], x => x>0));