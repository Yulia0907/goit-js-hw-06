const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener("input", textInput);

function textInput(event) {
    console.log(event.currentTarget.value);
    span.textContent = event.currentTarget.value;

    if (event.currentTarget.value === '') {
        span.textContent = 'Anonymous';
    }
}
