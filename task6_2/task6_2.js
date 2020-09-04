class Group {
    constructor() {
        this.collection=[];
    }

    has(value) {
        return this.collection.includes(value);
    }

    add(value) {
        if (!this.has(value))   this.collection.push(value);
    }

    delete(value) {
        let ind;
        if (ind=this.collection.indexOf(value)!=-1)
            this.collection.splice(ind, 1);
    }

    static from(obj) {
        let group= new Group();
        for (let k in obj) {
            group.add(obj[k]);
        }
        return group;
    }
}

let group1= new Group();
group1.add("Liza");
group1.add("Anna");
group1.add("Alisa");
group1.add("Liza");
group1.delete("Anna");
console.log(group1);

console.log(group1.has("Liza"));
console.log(group1.has("Agata"));

let group2=Group.from({value1: 1,value2: 5, value3: "Liza"});
console.log(group2);

let group3=Group.from([1,25,8]);
console.log(group3);