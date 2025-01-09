//Create function to calculate reading time (* 1.5 for taking in effects)
export function lineReadingTime(wordCount) {
	const time = (wordCount / 225) * 60;
	return (Math.round(time * 100) / 100) * 1000;
}
