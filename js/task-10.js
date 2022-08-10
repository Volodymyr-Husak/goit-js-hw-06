function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector("#controls");

const boxesEl = document.querySelector("#boxes");

const controlsChildrenEl = controlsEl.children;

const refs = {
  inputEl: controlsChildrenEl[0],
  buttonCreateEl: controlsChildrenEl[1],
  buttonDestroyEl: controlsChildrenEl[2],
};

refs.buttonCreateEl.addEventListener("click", () => {
  const number = refs.inputEl.value;

  function createBoxes(amount) {
    for (let j = 0; j < amount; j += 1) {
      let increasedValue = 30;
      increasedValue += j * 10;
      // debugger;
      let newDswEl = document.createElement("div");

      newDswEl.classList = "boxes";
      newDswEl.style.margin = "10px";
      newDswEl.style.width = increasedValue + "px";
      newDswEl.style.height = increasedValue + "px";
      newDswEl.style.backgroundColor = getRandomHexColor();

      boxesEl.append(newDswEl);
    }
  }

  createBoxes(number);
});

refs.buttonDestroyEl.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  const divBoxesEl = document.querySelectorAll(".boxes");

  divBoxesEl.forEach((element) => element.remove());
}
