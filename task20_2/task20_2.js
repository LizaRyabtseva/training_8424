const fs=require("fs");
const path=require("path");
let dirName=process.argv[2];

MKCOL(dirName);

function MKCOL(dir) {
    fs.mkdir(path.join(__dirname, dir), {recursive: true}, err => {
        if (err) throw err;
        console.log("Создана новая папка " + dir);
    });
}
