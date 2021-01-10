let select=document.querySelector("select");
let textarea=document.querySelector("textarea");
let button=document.querySelector("button");

fetch("/").then(res => res.text()).then(fileNames => {
    for (let fn of fileNames.split("\n")) {
        let option = document.createElement("option");
        option.textContent = fn;
        select.appendChild(option);
    }
});

select.addEventListener("change", () => {
    fetch(select.value).then(res=> res.text()).then(file => {
        textarea.value=file;
    });
});

button.addEventListener("click",  () => {
    fetch(select.value, {method: "PUT", body: textarea.value})
    alert("Изменения сохранены!");
});
