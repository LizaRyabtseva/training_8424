const fetch=require("node-fetch");
const types=["text/plain", "text/html", "application/json", "application/rainbows+unicorns"];

(async ()=> {
    let res;
    for (let type of types) {
        res= await fetch("https://eloquentjavascript.net/author", {headers: {Accept: type}});
        `${type}`==="application/rainbows+unicorns" ?
            console.log(`Тип: ${type}, Содержимое: ${await res.text()}, Статус: ${await res.status}`) :
            console.log(`Тип: ${type}, Содержимое: ${await res.text()}`);
        }
})();
