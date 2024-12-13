import { htmlString } from "./htmlString.mjs";

const html = htmlString;

const main = document.createElement('main');
document.body.appendChild(main);

main.innerHTML = html;


const paragraphs = document.getElementsByTagName('p');

console.log(paragraphs);
