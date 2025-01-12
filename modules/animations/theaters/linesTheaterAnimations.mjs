import { blowFrames, blowTiming, blowOpacityFrames, blowOpacityTiming } from '../blowAnima.mjs';
import { lines } from '../../dom/elements.mjs';

const schedule = document.timeline;

export const linesTheaterAnimations = [];

for (const line of lines) {
	const blow = new KeyframeEffect(line, blowFrames, blowTiming);
	blow.timeline = schedule;
	const blowOpacity = new KeyframeEffect(line, blowOpacityFrames, blowOpacityTiming);
	blowOpacity.timeline = schedule;
	linesTheaterAnimations.push(blow, blowOpacity);
}

// linesTheaterAnimations.forEach((animation) => {
// 	animation.timeline = cinema.schedule;
// });
