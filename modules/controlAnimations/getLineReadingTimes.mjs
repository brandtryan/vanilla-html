import { lineReadingTime } from './time/lineReadingTime.mjs';
import { lines } from '../dom/elements.mjs';

export function getLineReadingTimes(page) {
	return lines.filter((line) => line.id.includes(page)).map((line) => lineReadingTime(line));
}
