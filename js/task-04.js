let counterValue = 0;

const decrementEl = () => {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
    
};

document
.querySelector('[data-action="decrement"]')
.addEventListener('click', decrementEl );

const incrementEl = () => {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
    
};

document
.querySelector('[data-action="increment"]')
.addEventListener('click', incrementEl );
