// "wght"   47    200   900
// "wdth"   60    60   140
// "ital"   0    0   12
// "CONT"   0    100   100
import {
	page00,
	page01,
	page02,
	page03,
	page04,
	page05,
	page06,
	page07,
	page08,
	page09,
	page10,
	page11,
	page12,
	page13,
	page14,
	page15,
	page16,
	page17,
	page18,
	page19,
	page20,
	page21,
	page22,
	page23,
	page24,
	page25,
	page26,
	page27,
	page28,
	page29,
	page30,
	page31,
	page32,
	page33,
	page34,
} from './modules/pageElements.mjs';
import { breatheFrames, breatheTiming } from './modules/animations/breathe.mjs';
import { twitchFrames, twitchTiming } from './modules/animations/twitch.mjs';
import { page00Animas } from './modules/animations/pageAnimas.mjs';
// const page00 = document.getElementById('s00');
// const page01 = document.getElementById('s01');
// const page02 = document.getElementById('s02');
// const page03 = document.getElementById('s03');
// const page04 = document.getElementById('s04');
// const page05 = document.getElementById('s05');
// const page06 = document.getElementById('s06');
// const page07 = document.getElementById('s07');
// const page08 = document.getElementById('s08');
// const page09 = document.getElementById('s09');
// const page10 = document.getElementById('s10');
// const page11 = document.getElementById('s11');
// const page12 = document.getElementById('s12');
// const page13 = document.getElementById('s13');
// const page14 = document.getElementById('s14');
// const page15 = document.getElementById('s15');
// const page16 = document.getElementById('s16');
// const page17 = document.getElementById('s17');
// const page18 = document.getElementById('s18');
// const page19 = document.getElementById('s19');
// const page20 = document.getElementById('s20');
// const page21 = document.getElementById('s21');
// const page22 = document.getElementById('s22');
// const page23 = document.getElementById('s23');
// const page24 = document.getElementById('s24');
// const page25 = document.getElementById('s25');
// const page26 = document.getElementById('s26');
// const page27 = document.getElementById('s27');
// const page28 = document.getElementById('s28');
// const page29 = document.getElementById('s29');
// const page30 = document.getElementById('s30');
// const page31 = document.getElementById('s31');
// const page32 = document.getElementById('s32');
// const page33 = document.getElementById('s33');
// const page34 = document.getElementById('s34');

// const page00Animas = page00.getAnimations();
// const page01Animas = page01.getAnimations();
// const page02Animas = page02.getAnimations();
// const page03Animas = page03.getAnimations();
// const page04Animas = page04.getAnimations();
// const page05Animas = page05.getAnimations();
// const page06Animas = page06.getAnimations();
// const page07Animas = page07.getAnimations();
// const page08Animas = page08.getAnimations();
// const page09Animas = page09.getAnimations();
// const page10Animas = page10.getAnimations();
// const page11Animas = page11.getAnimations();
// const page12Animas = page12.getAnimations();
// const page13Animas = page13.getAnimations();
// const page14Animas = page14.getAnimations();
// const page15Animas = page15.getAnimations();
// const page16Animas = page16.getAnimations();
// const page17Animas = page17.getAnimations();
// const page18Animas = page18.getAnimations();
// const page19Animas = page19.getAnimations();
// const page20Animas = page20.getAnimations();
// const page21Animas = page21.getAnimations();
// const page22Animas = page22.getAnimations();
// const page23Animas = page23.getAnimations();
// const page24Animas = page24.getAnimations();
// const page25Animas = page25.getAnimations();
// const page26Animas = page26.getAnimations();
// const page27Animas = page27.getAnimations();
// const page28Animas = page28.getAnimations();
// const page29Animas = page29.getAnimations();
// const page30Animas = page30.getAnimations();
// const page31Animas = page31.getAnimations();
// const page32Animas = page32.getAnimations();
// const page33Animas = page33.getAnimations();
// const page34Animas = page34.getAnimations();

const s00p00ln00 = document.querySelector('#s00-p00-ln00');
s00p00ln00.animate(breatheFrames, breatheTiming);

const s00p00ln01 = document.querySelector('#s00-p00-ln01');
s00p00ln01.animate(breatheFrames, breatheTiming);

const s00p00ln02 = document.querySelector('#s00-p00-ln02');
s00p00ln02.animate(twitchFrames, twitchTiming);

// const allAnimations = document.getAnimations();
// allAnimations.forEach((animation) => animation.pause());

// const s00p00 = document.getElementById('s00-p00');
// const s00p00Animations = s00p00.getAnimations({ subtree: true });

// for (let i = 0; i < s00p00Animations.length - 1; i++) {
// 	s00p00Animations[i].onfinish = () => {
// 		s00p00Animations[i + 1].play();
// 	};
// }

// allAnimations[0].play();

console.log(typeof p00Animas);
