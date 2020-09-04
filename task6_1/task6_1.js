class Vec {
    constructor(x, y) {
        this.x=x;
        this.y=y;
    }

    plus(vector) {
        return new Vec(this.x+vector.x, this.y+vector.y);
    }

    minus(vector) {
        return new Vec(this.x-vector.x, this.y-vector.y);
    }

    get length() {
        return Math.sqrt(this.x**2+this.y**2).toPrecision(3);
    }
}

let vector= new Vec(4,3);
console.log(vector.plus(new Vec(2,3)));
console.log(vector.minus(new Vec(1,2)));
console.log(vector.length);