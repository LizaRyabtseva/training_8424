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
        if (ind=this.collection.indexOf(value)!=-1)     this.collection.splice(ind, 1);
    }

    static from(obj) {
        let group= new Group();
        for (let k in obj) {
            group.add(obj[k]);
        }
        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(group) {
        this.group=group;
        this.pos=0;
    }

    next() {
        if (this.pos<this.group.collection.length) {
            let res={
                done: false,
                value: this.group.collection[this.pos],
            };
            this.pos++;
            return res;
        } else {
            return { done: true, };
        }
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

let group3=Group.from(["L", "i", "z", "a"]);
console.log(group3);

for (let value of group3) {
    console.log(value);
}
