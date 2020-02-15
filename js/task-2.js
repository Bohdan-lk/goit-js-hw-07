"use strict";

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ul = document.querySelector("#ingredients");

function createIngredients(el) {
    const item = document.createElement("li");
    item.textContent = el;
    return item;
}
const arrayElements = ingredients.map(item => createIngredients(item));
ul.append(...arrayElements);