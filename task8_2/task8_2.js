const box= {
    locked: false,
    unlock() {
        this.locked=false;
    },
    lock() {
        this.locked=true;
    },
    _content: [],
    get content() {
        if (this.locked)    throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
    let temp;
    if (box.locked) {
        temp=box.locked;
        box.unlock();
    }
    try {
        body();
    } finally {
        if (temp)
            box.lock();
        else box.unlock();
    }
}
withBoxUnlocked(() => {
    box.content.push("gold piece");
});

try {
    console.log(box.locked);
    withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised: " + e);
}
