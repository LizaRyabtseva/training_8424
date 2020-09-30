function Promise_all(promises) {
    return new Promise((resolve, reject ) => {
        let count=0;
        let results=[];
        if (promises.length==0) resolve(results);
        for (let pr of promises) {
            pr.then(res => {
                results.push(res);
                count++;
                if (count==promises.length) resolve(results);
            }, reject);
        }
    });
}
Promise_all([]).then(array => {
    console.log("This should be []:", array);
});
Promise_all([Promise.reject("Y")]).then(array => console.log("This should be []:", array), error =>  console.log("Error: "+error));

function soon(val) {
    return new Promise(resolve => {
        setTimeout(() => resolve(val), 500);
    });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
    console.log(`This should be [1, 2, 3]:`, array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)]).then(array => {
    console.log("We should not get here");
}).catch(error => {
    if (error != "X") {
        console.log("Unexpected failure:", error);
    }
});