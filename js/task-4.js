"use strict";

const ref = {
    decrBtn: document.querySelector ('button'),
    incrBtn: document.querySelector ('button[data-action="increment"]'),
    counterSpan: document.querySelector ('#value'),
};


let counterValue = 0;

const incrValue = function incr() {
    counterValue += 1;
    ref.counterSpan.textContent = counterValue;
};

const decrValue = function decr() {
    counterValue -= 1;
    ref.counterSpan.textContent = counterValue;
};

ref.decrBtn.addEventListener ('click', decrValue);
ref.incrBtn.addEventListener ('click', incrValue);
