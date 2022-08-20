const inputNumber = document.querySelector('#controls>input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = amount => {
	const elementsAdd = []
	for (let i = 0; i < amount; i+= 1) {
		const div = document.createElement('div');
		div.style.height = `${30 + 10 * i}px`;
		div.style.width = `${30 + 10 * i}px`;
		div.style.background = getRandomHexColor();
		elementsAdd.push(div);
	}
	return elementsAdd
}

const destroyBoxes = () => {
	boxes.innerHTML = ''
}

buttonCreate.addEventListener('click', () => {
	let boxesAdd = createBoxes(inputNumber.value)
	boxes.append(...boxesAdd)
})

buttonDestroy.addEventListener('click', () => {
	destroyBoxes.call()
})
