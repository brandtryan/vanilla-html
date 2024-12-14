// import { htmlString } from "./htmlString.mjs";

const html = `
<div class="plate">
<section><p>Lorem ipsum dolor sit amet.</p>
</section>
</div>
<div class="plate">
<section><p>Lorem ipsum dolor sit amet.</p>
</section>
</div>
<div class="plate">
<section><p>Lorem ipsum dolor sit amet.</p>
</section>
</div>
`;

const main = document.createElement('main');
document.body.appendChild(main);

main.innerHTML = html;
