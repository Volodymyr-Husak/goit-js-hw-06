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
  for (const arr of array) {
    const itemEl = document.createElement("li");
    itemEl.textContent = arr;
    gradientsEl.append(itemEl);
  };
 };

createItems(ingredients);
