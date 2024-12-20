let finalIds = [];
// Paragraphs
const divsCollection = document.getElementsByTagName('div');
const divsArray = [];
const divIdsArray = [];

// Lines
const linesCollection = document.getElementsByTagName('p');
const linesArray = [];
const wordIdsArray = [];

for (let line of linesCollection) {
	linesArray.push(line.textContent.split(' '));
	wordIdsArray.push(line.id);
}

for (let item of wordIdsArray) {
	for (let i = 0; i < item.length; i++) {
		let id = item.concat(`-w${i}`);
		finalIds.push(id);
	}
}
console.log(finalIds);

// Words

const spansArray = [];
const elementsArray = [];

for (let line of linesArray) {
	for (let i = 0; i < linesArray.length; i++) {
		spansArray.push(line[i]);
	}
}
console.log(spansArray[0]);

for (let word of spansArray) {
	elementsArray.push(`<span class='word'>${word}</span>`);
}
console.log(elementsArray[0]);
