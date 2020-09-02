function deepEqual(obj1, obj2) {
    if (obj1===obj2) return  true;
    else if (obj1==null || obj2==null || typeof obj1!="object" || typeof obj2!="object") return false;

    for (let k in obj1) {
        if (!(k in obj2) || !deepEqual(obj1[k], obj2[k]))  return false;
    }
    return true;
}

console.log(deepEqual({value1: 1, value2:20 }, {value1: 1, value2: 20}));