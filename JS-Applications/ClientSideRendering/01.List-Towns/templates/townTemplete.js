import { html } from "../../node_modules/lit-html/lit-html.js";

export let townTemplete = (town) => html`<li>${town}</li>`

export let allTownsTemplate = (towns)=>html`
<ul>
    ${towns.map(t=>townTemplete(t))}
</ul>`;

