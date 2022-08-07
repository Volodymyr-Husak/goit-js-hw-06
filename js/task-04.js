// -----------------------------------v1--------------------------------
// const decrementEl = document.querySelector('button[data-action="decrement"]');

// const valueEl = document.querySelector('#value');

// const incrementEl = document.querySelector('button[data-action="increment"]');

// decrementEl.addEventListener("click", () => {
//   valueEl.textContent -= 1;
// });

// incrementEl.addEventListener("click", () => {
//   valueEl.textContent = Number(valueEl.textContent) + 1;
// });

// -----------------------------------v2--------------------------------
let counterValue = 0;

const valueEl = document.querySelector('#value');

valueEl.textContent = counterValue;

const decrementEl = document.querySelector('button[data-action="decrement"]');

const incrementEl = document.querySelector('button[data-action="increment"]');

decrementEl.addEventListener("click", () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

incrementEl.addEventListener("click", () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});