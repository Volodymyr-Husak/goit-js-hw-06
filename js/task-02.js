const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function createItems(array = []) {
  const gradientsEl = document.querySelector('#ingredients');
  array.forEach(arr => {
    const itemEl = document.createElement("li");
    itemEl.textContent = arr;
    itemEl.classList = 'item';
    gradientsEl.append(itemEl);
  })
 };

createItems(ingredients);