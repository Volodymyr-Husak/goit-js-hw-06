console.log('=====================Option #1======================');
const categoriesArrayEl = document.querySelectorAll('.item');
// console.log(categoriesArrayEl);
const categoriesNumber = categoriesArrayEl.length;
console.log(`Number of categories: ${categoriesNumber}`);
console.log('');

const categoriesEl = document.querySelector('#categories');
// console.log(categoriesEl);

// ===============================Animals======================================
const animalsItemEl = categoriesEl.children[0];
// console.log(animalsItemEl);

const animalsTitle = animalsItemEl.querySelector('h2').textContent;
console.log(`Category: ${animalsTitle}`);

const animalsNumber = animalsItemEl.querySelectorAll('li').length;
console.log(`Elements: ${animalsNumber}`);
console.log('');
// ===============================Products======================================
const productsItemEl = categoriesEl.children[1];

const productsTitle = productsItemEl.querySelector('h2').textContent;
console.log(`Category: ${productsTitle}`);

const productsNumber = productsItemEl.querySelectorAll('li').length;
console.log(`Elements: ${productsNumber}`);
console.log('');
// ===============================Technologies======================================
const technologiesItemEl = categoriesEl.children[2];

const technologiesTitle = technologiesItemEl.querySelector('h2').textContent;
console.log(`Category: ${technologiesTitle}`);

const technologiesNumber = technologiesItemEl.querySelectorAll('li').length;
console.log(`Elements: ${technologiesNumber}`);


// ===============================V2======================================
console.log('=====================Option #2======================');

const categoriesArrayElV2 = document.querySelectorAll('.item');

const categoriesNumberV2 = categoriesArrayEl.length;
console.log(`Number of categories: ${categoriesNumberV2}`);
console.log('');

const categoriesElV2 = document.querySelector('#categories');

function categories (number) {
    const categoriesItemEl = categoriesEl.children[number];
    const categoriesTitle = categoriesItemEl.querySelector('h2').textContent;
    console.log(`Category: ${categoriesTitle}`);
    const categoriesNumber = categoriesItemEl.querySelectorAll('li').length;
    console.log(`Elements: ${categoriesNumber}`);
    console.log('');   
};

categories(0);
categories(1);
categories(2);

