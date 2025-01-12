import { blowFrames, blowTiming, blowOpacityFrames, blowOpacityTiming } from '../blowAnima.mjs';
import { words } from '../../dom/elements.mjs';

const schedule = document.timeline;

export const wordsTheaterAnimations = [];

for (const word of words) {
	const blow = new KeyframeEffect(word, blowFrames, blowTiming);
	blow.timeline = schedule;
	const blowOpacity = new KeyframeEffect(word, blowOpacityFrames, blowOpacityTiming);
	blowOpacity.timeline = schedule;
	wordsTheaterAnimations.push(blow, blowOpacity);
}
