let numbers=["15", ".", "+15", "+-7", "-8", ".-7", "-.7", "1.2.3", "1.2e+32", "1+1", "1E-8"];
let reg=/^[-\+]?(\d+(\.\d*)?|\.\d+)(e[-\+]?\d+)?$/gi;
for (let v of numbers) {
    console.log(reg.test(v));
}