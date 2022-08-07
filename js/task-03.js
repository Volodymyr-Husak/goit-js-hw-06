const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');

function createImages(array = []) {
  
  array.forEach(arr => {
    const itemEl = document.createElement("li");
   
    galleryEl.append(itemEl);
    
    const markup = `<img class = "picture" src=${arr.url} alt=${arr.alt} width = 200>`;
    
    itemEl.insertAdjacentHTML("beforeend", markup);

  })
};

createImages(images);

galleryEl.style.display = "flex";

// const img = document.querySelectorAll(".picture");
// img.style.margin = "15px";
