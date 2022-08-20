function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeButtonColor = document.querySelector('button.change-color');
const body = document.querySelector('body');
const span = document.querySelector('span.color')

changeButtonColor.addEventListener('click', event => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
})