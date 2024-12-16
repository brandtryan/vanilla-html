
function peaSplitter(p) {

}

const spans = document.getElementsByTagName('span');
const spansArray = [...spans];

let para0 = spansArray.splice(0, 9);
let para1 = spansArray.splice(0, 17);
let para2 = spansArray.splice(0, 12);
let para3 = spansArray.splice(0, 8);
let para4 = spansArray.splice(0, 5);
let para5 = spansArray.splice(0, 16);
let para6 = spansArray.splice(0, 11);
let para7 = spansArray.splice(0, 8);
let para8 = spansArray.splice(0, 12);
let para9 = spansArray.splice(0, 19);
let para10 = spansArray.splice(0, 16);
let para11 = spansArray.splice(0, 13);
let para12 = spansArray.splice(0, 5);
let para13 = spansArray.splice(0, 11);
let para14 = spansArray.splice(0, 9);
let para15 = spansArray.splice(0, 4);
let para16 = spansArray.splice(0, 14);
let para17 = spansArray.splice(0, 10);
let para18 = spansArray.splice(0, 1);
let para19 = spansArray.splice(0, 2);
let para20 = spansArray.splice(0, 1);
let para21 = spansArray.splice(0, 1);
let para22 = spansArray.splice(0, 1);
let para23 = spansArray.splice(0, 1);
let para24 = spansArray.splice(0, 1);
let para25 = spansArray.splice(0, 2);
let para26 = spansArray.splice(0, 2);
let para27 = spansArray.splice(0, 4);
let para28 = spansArray.splice(0, 1);
let para29 = spansArray.splice(0, 2);
let para30 = spansArray.splice(0, 7);
let para31 = spansArray.splice(0, 4);
let para32 = spansArray.splice(0, 8);
let para33 = spansArray.splice(0, 2);
let para34 = spansArray.splice(0, 1);
let para35 = spansArray.splice(0, 5);
let para36 = spansArray.splice(0, 9);
let para37 = spansArray.splice(0, 8);
let para38 = spansArray.splice(0, 8);
let para39 = spansArray.splice(0, 7);
let para40 = spansArray.splice(0, 8);
let para41 = spansArray.splice(0, 5);
let para42 = spansArray.splice(0, 5);
let para43 = spansArray.splice(0, 5);

const result = [];

for (let span of para9) {
	let words = [];
	let i = 0;
	let j = 0;
	words = span.textContent.split(' ');

	let prefix = '<span ';


	let body = `${span.id}-w${words[i[j]]}>`; 
	// 'p00-ln00-w0>'
	let glued1 = prefix.concat('', body); 
	// '<span p00-ln00-w0>'
	// let inc = i.toString().concat('', '>');
	// '0>'
	// let glued2 = glued1.concat('', inc);
	// '<span p00-ln00-w0>'
	let end = `${words[i]}</span>`
	span = glued1.concat('', end); // <span p00-ln00-w0>word</span>

	result.push(span);
	i++;
	j++;
}

for (let i = 0; i < result.length; i++) {
	result[i] = result[i].replace("wundefined", `w${i}`);
}

console.log(result);






