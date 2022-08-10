const inputFontSizeControlEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");
const inputValue = inputFontSizeControlEl.value;
textEl.style.fontSize = inputValue + "px";

inputFontSizeControlEl.addEventListener("input", currentFontSize);

function currentFontSize() {
  const inputValue = inputFontSizeControlEl.value;
  textEl.style.fontSize = inputValue + "px";
}
