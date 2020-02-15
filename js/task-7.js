"use strict";

const refs = {
    inputValue: document.querySelector('input#font-size-control'),
    outputValue: document.querySelector('span#text'),
};

refs.inputValue.addEventListener('input', changeFontSize);

function changeFontSize({ target }) {
    refs.outputValue.style.fontSize = `${target.value}px`;
}