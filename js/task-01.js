const categoriesEl = document.querySelector('ul#categories');
const itemEl = categoriesEl.querySelectorAll('li.item');
console.log(`Number of categories:`, itemEl.length);

itemEl.forEach(elem => {
    console.log (`Category:`, elem.firstElementChild.textContent);
    console.log (`Elements:`, elem.lastElementChild.children.length);
})
