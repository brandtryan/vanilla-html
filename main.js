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

// // WORKS
// const s00 = document.getElementById('p00');
// const lines = s00.getElementsByClassName('line');

// let animaLn = lines[0].animate(breatheFrames, breatheTiming);
// console.log(animaLn);

// animaLn.onfinish = () => {
// 	animaLn = lines[1].animate(breatheFrames, breatheTiming);
// 	console.log(animaLn);
// };

const p00ln00 = document.querySelector('#p00-ln00');
p00ln00.animate(breatheFrames, breatheTiming);
const p00ln00Animations = p00ln00.getAnimations();
p00ln00Animations[0].pause();

const p00ln01 = document.querySelector('#p00-ln01');
p00ln01.animate(breatheFrames, breatheTiming);
const p00ln01Animations = p00ln01.getAnimations();
p00ln01Animations[0].pause();

const p00ln02 = document.querySelector('#p00-ln02');
p00ln02.animate(breatheFrames, breatheTiming);
const p00ln02Animations = p00ln02.getAnimations();
p00ln02Animations[0].pause();

const p00ln03 = document.querySelector('#p00-ln03');
p00ln03.animate(breatheFrames, breatheTiming);
const p00ln03Animations = p00ln03.getAnimations();
p00ln03Animations[0].pause();

const p00ln04 = document.querySelector('#p00-ln04');
p00ln04.animate(breatheFrames, breatheTiming);
const p00ln04Animations = p00ln04.getAnimations();
p00ln04Animations[0].pause();

const p00ln05 = document.querySelector('#p00-ln05');
p00ln05.animate(breatheFrames, breatheTiming);
const p00ln05Animations = p00ln05.getAnimations();
p00ln05Animations[0].pause();

const p00ln06 = document.querySelector('#p00-ln06');
p00ln06.animate(breatheFrames, breatheTiming);
const p00ln06Animations = p00ln06.getAnimations();
p00ln06Animations[0].pause();

const p00ln07 = document.querySelector('#p00-ln07');
p00ln07.animate(breatheFrames, breatheTiming);
const p00ln07Animations = p00ln07.getAnimations();
p00ln07Animations[0].pause();

const p00ln08 = document.querySelector('#p00-ln08');
p00ln08.animate(breatheFrames, breatheTiming);
const p00ln08Animations = p00ln08.getAnimations();
p00ln08Animations[0].pause();

p00ln00Animations[0].onfinish = () => {
	p00ln01Animations[0].play();
};

p00ln01Animations[0].onfinish = () => {
	p00ln02Animations[0].play();
};

p00ln02Animations[0].onfinish = () => {
	p00ln03Animations[0].play();
};

p00ln03Animations[0].onfinish = () => {
	p00ln04Animations[0].play();
};

p00ln04Animations[0].onfinish = () => {
	p00ln05Animations[0].play();
};

p00ln05Animations[0].onfinish = () => {
	p00ln06Animations[0].play();
};

p00ln06Animations[0].onfinish = () => {
	p00ln07Animations[0].play();
};

p00ln07Animations[0].onfinish = () => {
	p00ln08Animations[0].play();
};

p00ln00Animations[0].play();
