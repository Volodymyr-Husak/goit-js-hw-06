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
    gradientsEl.append(itemEl);
  })
 };

createItems(ingredients);