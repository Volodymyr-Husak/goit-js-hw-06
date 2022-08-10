const categoriesArrayEl = document.querySelectorAll(".item");

const categoriesNumber = categoriesArrayEl.length;
console.log(`Number of categories: ${categoriesNumber}`);
console.log("");

categoriesArrayEl.forEach((element) => {
  const titleCategories = element.firstElementChild.textContent;
  console.log(`Category: ${titleCategories}`);

  const elementsNumber = element.lastElementChild.children.length;
  console.log(`Elements: ${elementsNumber}`);
  console.log("");
});
