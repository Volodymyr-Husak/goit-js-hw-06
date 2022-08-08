
const nameInputEl = document.querySelector("#name-input");
console.log(nameInputEl);

const nameOutputEl = document.querySelector("#name-output");
console.log(nameOutputEl);


nameInputEl.addEventListener("input", (event) => {
    nameOutputEl.textContent = event.currentTarget.value;
});

nameInputEl.addEventListener("change", emptyStringCheck);

function emptyStringCheck() {
    const stringLength = nameInputEl.value.split('').length;

    nameInputEl.addEventListener("blur", () => {
        if (stringLength === 0) {
            nameOutputEl.textContent = 'Anonymous';
        } 
    });
};