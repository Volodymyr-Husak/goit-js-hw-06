const inputEl = document.querySelector("#validation-input");

console.log(inputEl);

inputEl.addEventListener("input", checkCorrectLengthString);

function checkCorrectLengthString() {
  const stringLength = inputEl.value.split("").length;

  inputEl.addEventListener("blur", () => {
    if (stringLength < 6 || stringLength > 6) {
      inputEl.classList = "invalid";
    } else {
      inputEl.classList = "valid";
    }
  });
}
