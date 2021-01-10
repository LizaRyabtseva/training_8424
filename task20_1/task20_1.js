const fs=require("fs");

let reg=new RegExp(process.argv[2]);

for (let i=3; i<process.argv.length; i++) {
    explore(process.argv[i]);
}

function explore(arg) {
    let stat = fs.statSync(arg);
    if (stat.isFile() && reg.test(fs.readFileSync(arg, "utf-8"))) {
        console.log("Regular expression was found in " + arg);
    } else if (stat.isDirectory()) {
        for (let dir of fs.readdirSync(arg)) {
            explore(arg + "/" + dir);
        }
    }
}