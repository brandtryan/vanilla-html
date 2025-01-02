import { breatheFrames, breatheTiming } from './modules/animations/breathe.mjs';

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

// "wght"   47    200   900
// "wdth"   60    60   140
// "ital"   0    0   12
// "CONT"   0    100   100

const p00ln00 = document.querySelector('#p00-ln00');
p00ln00.animate(breatheFrames, breatheTiming);

const p00ln01 = document.querySelector('#p00-ln01');
p00ln01.animate(breatheFrames, breatheTiming);

const p00ln02 = document.querySelector('#p00-ln02');
p00ln02.animate(breatheFrames, breatheTiming);

const p00ln03 = document.querySelector('#p00-ln03');
p00ln03.animate(breatheFrames, breatheTiming);

const p00ln04 = document.querySelector('#p00-ln04');
p00ln04.animate(breatheFrames, breatheTiming);

const p00ln05 = document.querySelector('#p00-ln05');
p00ln05.animate(breatheFrames, breatheTiming);

const p00ln06 = document.querySelector('#p00-ln06');
p00ln06.animate(breatheFrames, breatheTiming);

const p00ln07 = document.querySelector('#p00-ln07');
p00ln07.animate(breatheFrames, breatheTiming);

const p00ln08 = document.querySelector('#p00-ln08');
p00ln08.animate(breatheFrames, breatheTiming);

const allAnimations = document.getAnimations();
allAnimations.forEach((animation) => animation.pause());

const p00 = document.getElementById('p00');
const p00Animations = p00.getAnimations({ subtree: true });

for (let i = 0; i < p00Animations.length - 1; i++) {
	p00Animations[i].onfinish = () => {
		p00Animations[i + 1].play();
	};
}

allAnimations[0].play();
