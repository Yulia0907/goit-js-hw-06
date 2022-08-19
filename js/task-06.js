const input = document.querySelector('#validation-input');

input.addEventListener('blur', onBlurChange);

function onBlurChange(event) {
    const onInput = event.currentTarget;
    const inputLength = onInput.dataset.length;

    if (onInput.value.length >= inputLength) {
        onInput.classList.remove('invalid');
        onInput.classList.add('valid');
    } else {
        onInput.classList.add('invalid');
    }
}
