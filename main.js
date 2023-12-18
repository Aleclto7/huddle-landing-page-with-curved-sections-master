// hide labels message
const email = document.querySelector('.form__input')
const btn = document.querySelector('.form__button').addEventListener('click', () => {
    email.addEventListener('invalid', () => {
        email.nextElementSibling.classList.remove('inactive');
        email.classList.add('input__error');
    })
        email.nextElementSibling.classList.add('inactive');
        email.classList.remove('input__error');

        // if (email.checkValidity()) {
        //     email.nextElementSibling.classList.add('inactive');
        //     email.classList.remove('input__error');
        // }
        // else {
        //     // email.setCustomValidity("Check your email please")   Customizar mensaje emergente de email invalido
        //     email.nextElementSibling.classList.remove('inactive');
        //     email.classList.add('input__error');
        // }
    })