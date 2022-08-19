const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');

const elements = [];
for (let i = 0; i < ingredients.length; i++ ) {
const ingredient = ingredients[i];  

const liEl = document.createElement('li');
liEl.textContent = ingredient;
liEl.classList.add('item');

elements.push(liEl);
}

ulEl.append(...elements);
console.log(ulEl);

