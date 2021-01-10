const fetch=require("node-fetch");
const types=["text/plain", "text/html", "application/json", "application/rainbows+unicorns"];

for (let type of types) {
    fetch("https://eloquentjavascript.net/author", {headers: {Accept: type}})
        .then(res => res.text())
        .then(content => console.log(`Тип: ${type}, Содержимое: ${content}`));
}
