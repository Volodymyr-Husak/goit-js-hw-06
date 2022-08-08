const inputFontSizeControlEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

inputFontSizeControlEl.addEventListener("change", currentFontSize);

function currentFontSize() {
    const inputValue = inputFontSizeControlEl.value;
    textEl.style.fontSize = inputValue + 'px';
}