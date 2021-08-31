import { render } from './../node_modules/lit-html/lit-html.js';

import { allOptionsTemplate } from './templates/optionTemplates.js';

let menuSelect = document.getElementById('menu');
//console.log(optionsObject);

let addOptionForm = document.getElementById('add-option-form');
addOptionForm.addEventListener('submit', addItem);

let submitButton = document.getElementById('submit');
submitButton.disabled = true;

loadOptions();

let options = [];

async function loadOptions() {
    let optionsResponse = await fetch('http://localhost:3030/jsonstore/advanced/dropdown ');
    let optionsObject = await optionsResponse.json();
    options = Object.values(optionsObject);

    render(allOptionsTemplate(options), menuSelect);
    submitButton.disabled = false;
}



async function addItem(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);

    let newOption = {
        text: formData.get('text')
    }

    let createResponse = await fetch('http://localhost:3030/jsonstore/advanced/dropdown ',
        {
            headers: { 'Content-Type': 'application/json' },
            method: 'Post',
            body: JSON.stringify(newOption)

        });

    if (createResponse.ok) {
        //await loadOptions();
        let createdOption = await createResponse.json();
        options.push(createdOption);
        render(allOptionsTemplate(options), menuSelect);
    }

}