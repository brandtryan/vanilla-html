import { selectContent } from './helperFunctions/selectContent.mjs';

const select = selectContent;

// Select Plate
// TO DO
// select('s00');

const lines = document.querySelectorAll('.line');
const spans = document.getElementsByTagName('span');

const line00 = lines[0];
const line00Spans = line00.children;
console.log(line00Spans);

// console.log(line01);

// for (let span of line00Spans) {
// 	span.setAttribute('id', 'p00-ln00-w');
// 	console.log(span);
// }

// console.log(lines[0].childElementCount);

console.log(lines[1]);
