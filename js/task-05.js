
const nameInputEl = document.querySelector("#name-input");
console.log(nameInputEl);

const nameOutputEl = document.querySelector("#name-output");
console.log(nameOutputEl);


nameInputEl.addEventListener("input", (event) => {
    nameOutputEl.textContent = event.currentTarget.value;
});
