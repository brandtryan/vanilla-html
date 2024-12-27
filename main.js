// let finalIds = [];
// // Paragraphs = Divs
// const divsCollection = document.getElementsByTagName('div');
// const divsArray = [...divsCollection];
// console.log(`number of paragraphs =: ${divsArray.length}`);

// // Lines = paragraph
// const linesCollection = document.getElementsByTagName('p');
// // const linesArray = [];
// const wholeLinesArray = [];
// const splitLinesArray = [];
// const wordsInEachLine = [];
// const wordIdsArray = [];
// const spansArray = [];

// for (let line of linesCollection) {
// 	wholeLinesArray.push(line);
// 	splitLinesArray.push(line.textContent.split(' '));
// 	wordIdsArray.push(line.id);
// }
// console.log(`Number of Lines: ${splitLinesArray.length}`);
// console.log(`Number of words in line 0: ${splitLinesArray[0].length}`);

// console.log(`word id index 0: ${wordIdsArray[0]}`);

// // console.log(`word id length: ${wordIdsArray[0].length}`);

// for (let item of wordIdsArray) {
// 	for (let i = 0; i < item.length; i++) {
// 		let id = item.concat(`-w${i}`);
// 		finalIds.push(id);
// 	}
// }
// console.log(finalIds[0]);
// console.log(`Number of finalIds: ${finalIds.length}`);

// console.log(wordIdsArray[0]);
// console.log(wordIdsArray.length);

// Words

// const spansArray = [];
// const elementsArray = [];

// for (let line of linesArray) {
// 	for (let i = 0; i < linesArray.length; i++) {
// 		spansArray.push(line[i]);
// 	}
// }
// console.log(spansArray[0]);
// console.log(spansArray.length);
// console.log(elementsArray.length);

// for (let word of spansArray) {
// 	elementsArray.push(`<span class='word'>${word}</span>`);
// }
// console.log(elementsArray[0]);
// console.log(spansArray.length);

const paragraphs = document.querySelectorAll('.paragraph-container');

paragraphs.forEach((paragraph, paragraphIndex) => {
	const paragraphId = paragraph.id;
	const lines = paragraph.querySelectorAll('.line');

	lines.forEach((line, lineIndex) => {
		const lineId = line.id;
		const words = line.textContent.split(/\s+/);

		words.forEach((word, wordIndex) => {
			const wordId = `${paragraphId.slice(0, 2)}-ln${lineIndex.toString().padStart(2, '0')}-w${(wordIndex + 1).toString().padStart(2, '0')}`;
			const wordElement = document.createElement('span');
			wordElement.id = wordId;
			wordElement.textContent = word + ' ';
			line.innerHTML = ''; // Clear the existing text content
			line.appendChild(wordElement);
		});
	});
});
