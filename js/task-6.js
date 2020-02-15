"use strict";
const inputValue = document.querySelector('input#validation-input');


inputValue.addEventListener('blur', validation);

function validation({ target }) {
    if (+target.value.length === +target.dataset.length) {
        target.classList.add('valid');
        target.classList.remove('invalid');
    } else {
        target.classList.add('invalid');
        target.classList.remove('valid');
    }
}