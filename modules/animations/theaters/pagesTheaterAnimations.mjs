import { blowFrames, blowTiming, blowOpacityFrames, blowOpacityTiming } from '../blowAnima.mjs';
import { pages } from '../../dom/elements.mjs';

const schedule = document.timeline;

export const pagesTheaterAnimations = [];

for (const page of pages) {
	const blow = new KeyframeEffect(page, blowFrames, blowTiming);
	blow.timeline = schedule;
	const blowOpacity = new KeyframeEffect(page, blowOpacityFrames, blowOpacityTiming);
	blowOpacity.timeline = schedule;
	pagesTheaterAnimations.push(blow, blowOpacity);
}
