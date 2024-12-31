import { breatheFrames, breatheTiming } from './modules/animations/breathe.mjs';

// "wght"   47    200   900
// "wdth"   60    60   140
// "ital"   0    0   12
// "CONT"   0    100   100

// const line = document.querySelector('#p00-ln00');
const lines = document.querySelectorAll('p');
// console.log(lines.length);

for (let line of lines) {
	line.animate(breatheFrames, breatheTiming);
}

// const progressbar = document.querySelector('#progress');

// progressbar.style.transformOrigin = '0% 50%';
// progressbar.animate(
// 	{
// 		transform: ['scaleX(0)', 'scaleX(1)'],
// 	},
// 	{
// 		fill: 'forwards',
// 		timeline: new ScrollTimeline({
// 			source: document.documentElement,
// 		}),
// 	}
// );
