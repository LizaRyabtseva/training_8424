let obj= {
    name: "Liza",
    age: 19,
    hasOwnProperty: "hasOwnProperty",
};

console.log(Object.prototype.hasOwnProperty.call(obj,"name"));