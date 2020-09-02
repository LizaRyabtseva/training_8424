function reverseArray(arr) {
    let res=[];
    for (let i=arr.length-1; i>=0; i--) {
        res.push(arr[i]);
    }
    return res;
}

console.log(reverseArray([8,1,3,4,5]));

function reverseArrayInPlace(arr) {
    for (let i=0; i<Math.floor(arr.length/2); i++) {
        let temp=arr[i];
        arr[i]=arr[arr.length-i-1];
        arr[arr.length-i-1]=temp;
    }
    return arr;
}

console.log(reverseArrayInPlace([1,3,5,8,2]));