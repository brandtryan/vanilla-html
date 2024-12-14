// import { htmlString } from "./htmlString.mjs";

const html = `
<section data-type="narrow"><p>Lorem ipsum dolor sit amet.</p>
</section>
<section data-type="medium"><p>Lorem ipsum dolor sit amet.</p>
</section>
<section data-type="wide"><p>Lorem ipsum dolor sit amet.</p>
</section>
`;

const main = document.createElement('main');
document.body.appendChild(main);

main.innerHTML = html;


const paragraphs = document.getElementsByTagName('p');

console.log(paragraphs);
