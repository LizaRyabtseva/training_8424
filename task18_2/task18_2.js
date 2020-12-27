let button=document.querySelector("#button");

button.addEventListener("click", () => {
    let text=document.querySelector("#textArea");
    let span=document.querySelector("#span");
    try {
        span.innerHTML = Function(text.value)();
    } catch (e) {
        span.innerHTML=e;
    }
});

