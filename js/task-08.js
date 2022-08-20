const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    const formEl = event.currentTarget.elements;

        const email = formEl.email;
        const password = formEl.password;

    if (email.value === '' || password.value === '') {
        return alert('Bсе поля должны быть заполнены!')
    }
    const userEl = { Email: email.value, Password: password.value }
    
    console.log(userEl)
    event.currentTarget.reset()
}
