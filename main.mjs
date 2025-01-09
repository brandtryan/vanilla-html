import { pages, paragraphs, lines, words } from './modules/dom/elements.mjs';
import { breathFrames, breathTiming } from './modules/animations/breathAnima.mjs';
import { barkFrames, barkTiming } from './modules/animations/barkAnima.mjs';
import { overallDuration } from './modules/controlAnimations/time/overallDuration.mjs';
import { lineReadingTime } from './modules/controlAnimations/time/lineReadingTime.mjs';
import { setLineAnimaStartTime } from './modules/controlAnimations/time/setLineAnimaStartTime.mjs';
import { setWordAnimaStartTime } from './modules/controlAnimations/time/setWordAnimaStartTime.mjs';
import { headShakeFrames, headShakeTiming } from './modules/animations/headShakeAnima.mjs';

const linesReadingTimesArray = [];
const lineAnimations = [];
const s00Lines = lines.filter((Element) => Element.id.includes('s00p00'));

const lineWordCounts = s00Lines.map((line) => line.childElementCount);

for (let count of lineWordCounts) {
	let result = lineReadingTime(count);
	linesReadingTimesArray.push(result);
}

for (let line of s00Lines) {
	line.animate(breathFrames, breathTiming);
	lineAnimations.push(line.getAnimations());
}

console.log(lineAnimations);

// Create PAGE animations and store the animation objects in an array
// const pageAnimations = [s00.animate(headShakeFrames, headShakeTiming)];
// Set PAGE animations startTime
// ?????????????????????????????

// Create PARAGRAPH animations and store the Animation objects in an array
// const paragraphAnimations = [s00p00.animate(barkFrames, barkTiming)];
// Set PARAGRAPH animations startTime
// ?????????????????????????????

// Create LINE animations and store the Animation objects in an array
// const line0Animations = [s00p00ln00.animate(breathFrames, breathTiming)];
// Set LINE animations startTime to start directly after reading time for line

// for (let lineAnimation of lineAnimations) {
// 	for (let i = 0; i < lineAnimation.length; i++) {
// 		setLineAnimaStartTime(lineAnimation, linesReadingTimesArray[i], 2000.0);
// 	}
// }
// setLineAnimaStartTime(line0Animations[0], linesReadingTimesArray[0], 2000.0);

// // Create WORD animations and store the Animation objects in an array
// const line0WordAnimations = [
// 	s00p00ln00w03.animate(breathFrames, breathTiming),
// 	s00p00ln00w08.animate(breathFrames, breathTiming),
// ];
// // Set duration of each word animation to be reading time divided by number of word animations
// line0WordAnimations.forEach((item) => item.effect.updateTiming({ duration: lineDuration0 / 2 }));
// // Set startTime of each word animation so each starts after the previous animation, fitting to reading time
// setWordAnimaStartTime(line0WordAnimations[0], lineDuration0, wordArray0.length, 10);
// setWordAnimaStartTime(line0WordAnimations[1], lineDuration0, wordArray0.length, 18);

// console.log('Anima0 duration = ' + line0WordAnimations[0].effect.getTiming().duration);
// console.log('Anima1 duration = ' + line0WordAnimations[1].effect.getTiming().duration);
// console.log('Anima0 startTime = ' + line0WordAnimations[0].startTime);
// console.log('Anima1 startTime = ' + line0WordAnimations[1].startTime);
// console.log('Line0_0 overall = ' + overall_duration(line0WordAnimations[0]));
// console.log('Line0_1 overall = ' + overall_duration(line0WordAnimations[1]));
// console.log('Line Reading Time = ' + lineDuration0);

// MISC FUNCTIONS

//calculates start_time for WORD ANIMATIONS
// Create PLAYER RACK
// function animationsPlayer(animations) {
//   return Object.freeze({
//     cancel: function () {
//       animations.forEach((animation) => animation.cancel());
//     },
//     finish: function () {
//       animations.forEach((animation) => animation.finish());
//     },
//     pause: function () {
//       animations.forEach((animation) => animation.pause());
//     },
//     persist: function () {
//       animations.forEach((animation) => animation.persist());
//     },
//     play: function () {
//       animations.forEach((animation) => animation.play());
//     },
//     reverse: function () {
//       animations.forEach((animation) => animation.reverse());
//     },
//     updatePlaybackRate: function () {
//       animations.forEach((animation) => animation.updatePlaybackRate());
//     },
//     // currentTime: function (time = 0) {
//     //   animations.forEach((animation) => animation.currentTime = time);
//     // },
//     currentTime: function (time = 0) {
//       animations.forEach(function (animation) {
//         if (typeof animation.currentTime === "function") {
//           animation.currentTime(time);
//         } else {
//           animation.currentTime = time;
//         }
//       });
//     },
//   });
// }

// let animations = [];
// let isPlaying = true;
// const DURATION = 3500;

// //Animate each div... for simplicity, using delays and endDelays to make all animations have same start and end times (end time will be duration + delay + endDelay)
// lines.forEach((line, i) => {
// 	var anim = line.animate(
// 		{
// 			transform: ['translateX(0) rotate(0deg)', 'translateX(80vw) rotate(2700deg)'],
// 		},
// 		{
// 			direction: 'alternate',
// 			// iterations: Infinity,
// 			duration: DURATION,
// 			easing: 'ease-in-out',
// 			fill: 'both',
// 			delay: (DURATION / 4) * i,
// 			endDelay: DURATION - (DURATION / 4) * i,
// 		}
// 	);

// 	animations.push(anim);
// });

// console.log(s00);
// console.log(s00p00);
// console.log(s00p00ln00);
// console.log(overallDuration(animations[0]));
// console.log(s00p00ln00w00);
