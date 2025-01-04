import { breatheFrames, breatheTiming } from './modules/animations/breathe.mjs';
import { twitchFrames, twitchTiming } from './modules/animations/twitch.mjs';

// "wght"   47    200   900
// "wdth"   60    60   140
// "ital"   0    0   12
// "CONT"   0    100   100

const s00p00ln00 = document.querySelector('#s00-p00-ln00');
s00p00ln00.animate(breatheFrames, breatheTiming);

const s00p00ln01 = document.querySelector('#s00-p00-ln01');
s00p00ln01.animate(breatheFrames, breatheTiming);

const s00p00ln02 = document.querySelector('#s00-p00-ln02');
s00p00ln02.animate(twitchFrames, twitchTiming);

// const p00ln03 = document.querySelector('#p00-ln03');
// p00ln03.animate(breatheFrames, breatheTiming);

// const p00ln04 = document.querySelector('#p00-ln04');
// p00ln04.animate(breatheFrames, breatheTiming);

// const p00ln05 = document.querySelector('#p00-ln05');
// p00ln05.animate(breatheFrames, breatheTiming);

// const p00ln06 = document.querySelector('#p00-ln06');
// p00ln06.animate(breatheFrames, breatheTiming);

// const p00ln07 = document.querySelector('#p00-ln07');
// p00ln07.animate(breatheFrames, breatheTiming);

// const p00ln08 = document.querySelector('#p00-ln08');
// p00ln08.animate(breatheFrames, breatheTiming);

const allAnimations = document.getAnimations();
allAnimations.forEach((animation) => animation.pause());

const s00p00 = document.getElementById('s00-p00');
const s00p00Animations = s00p00.getAnimations({ subtree: true });

for (let i = 0; i < s00p00Animations.length - 1; i++) {
	s00p00Animations[i].onfinish = () => {
		s00p00Animations[i + 1].play();
	};
}

// console.log(p00Animations[0]);

allAnimations[0].play();
