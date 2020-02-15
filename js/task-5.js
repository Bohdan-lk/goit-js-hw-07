"use strict";

const refs = {
    inputValue: document.querySelector ('input#name-input'),
    nameOutput: document.querySelector ('span#name-output'),
};


refs.inputValue.addEventListener('input', ({ target }) => {
    if (target.value.length === 0) {
        refs.nameOutput.textContent = 'незнакомец';
    } else { refs.nameOutput.textContent = target.value; }
});
