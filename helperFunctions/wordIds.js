const paragraphs = document.querySelectorAll('.line');

paragraphs.forEach((paragraph) => {
	const words = paragraph.textContent.split(' ');
	const wrappedWords = words.map((word) => `<span id=${paragraph.id}-w-${word}>${word}</span>`).join(' ');
	paragraph.innerHTML = wrappedWords;
});

const spans = document.querySelectorAll('span');
spans.forEach((span) => {
	console.log(span.id);
});
