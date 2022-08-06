// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// const categoriesArrayEl = document.querySelectorAll('.item');
// console.log(categoriesArrayEl);

// const categoriesNumber = categoriesArrayEl.length;
// console.log(`Number of categories: ${categoriesNumber}`);
// console.log('')

// const firstCategoriesText = document.querySelector('h2').textContent;
// console.log(`Category: ${firstCategoriesText}`);
// const firstCategoriesNumber = document.querySelectorAll('.item').length;

// console.log(document.querySelectorAll('.item'));
// console.log(`Elements: ${firstCategoriesNumber}`);

// const secondCategoriesText = document.querySelector('h2').textContent;
// const list = body.firstElementChild;
// console.log(list);
//
// elem.firstElementChild
// const ul = document.querySelector;
// =============================================================================================================
console.log('===========================================================')
const categoriesArrayEl = document.querySelectorAll('.item');
// console.log(categoriesArrayEl);
const categoriesNumber = categoriesArrayEl.length;
console.log(`Number of categories: ${categoriesNumber}`);
console.log('')

const categoriesEl = document.querySelector('#categories');
// console.log(categoriesEl);

// ===============================Animals======================================
const animalsItemEl = categoriesEl.children[0];
// console.log(animalsItemEl);

const animalsTitle = animalsItemEl.querySelector('h2').textContent;
console.log(`Category: ${animalsTitle}`);

const animalsNumber = animalsItemEl.querySelectorAll('li').length;
console.log(`Elements: ${animalsNumber}`);





