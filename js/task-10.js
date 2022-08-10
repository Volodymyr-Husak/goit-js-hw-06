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

  createBoxes(number);
});

function createBoxes(amount) {
  const newBoxElArray = [];
  for (let j = 0; j < amount; j += 1) {
    let increasedValue = 30;
    increasedValue += j * 10;

    let newBoxEl = document.createElement("div");
    newBoxEl.classList = "boxes";
    newBoxEl.style.margin = "10px";
    newBoxEl.style.width = increasedValue + "px";
    newBoxEl.style.height = increasedValue + "px";
    newBoxEl.style.backgroundColor = getRandomHexColor();

    newBoxElArray.push(newBoxEl);
  }

  boxesEl.append(...newBoxElArray);
}

refs.buttonDestroyEl.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  const divBoxesEl = document.querySelectorAll(".boxes");

  divBoxesEl.forEach((element) => element.remove());
}
