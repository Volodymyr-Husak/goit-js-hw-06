const inputEl = document.querySelector("#validation-input");

console.log(inputEl);

inputEl.addEventListener("change", checkCorrectNumber);

function checkCorrectNumber() {
    const numberCharactersEntered = inputEl.value.split('').length;

    inputEl.addEventListener("blur", () => {
    
        if (numberCharactersEntered < 6) {
            inputEl.classList = 'invalid'
        } else {
            inputEl.classList = 'valid'
        };
    });
};