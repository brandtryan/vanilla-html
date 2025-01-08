//Create function to calculate reading time (* 1.5 for taking in effects)
export function lineReadingTime(wordarray) {
	const words = wordarray.length / 2;
	const time = (words / 225) * 60;
	return (Math.round(time * 100) / 100) * 1000;
}
