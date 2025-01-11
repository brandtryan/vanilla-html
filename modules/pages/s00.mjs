import { s00Elements } from '../dom/elements.mjs';

// Create LINE 0 WORD animations and store the Animation objects in an array
// const line0WordAnimations = [
// 	s00p00ln00w03.animate(breathFrames, breathTiming),
// 	s00p00ln00w08.animate(breathFrames, breathTiming),
// ];

// Set duration of each word animation to be reading time divided by number of word animations
// line0WordAnimations.forEach((item) => item.effect.updateTiming({ duration: lineDuration0 / 2 }));

// Set startTime of each word animation so each starts after the previous animation, fitting to reading time
// setWordAnimaStartTime(line0WordAnimations[0], lineDuration0, wordArray0.length, 10);
// setWordAnimaStartTime(line0WordAnimations[1], lineDuration0, wordArray0.length, 18);

// console.log('Anima0 duration = ' + line0WordAnimations[0].effect.getTiming().duration);
// console.log('Anima1 duration = ' + line0WordAnimations[1].effect.getTiming().duration);
// console.log('Anima0 startTime = ' + line0WordAnimations[0].startTime);
// console.log('Anima1 startTime = ' + line0WordAnimations[1].startTime);
// console.log('Line0_0 overall = ' + overall_duration(line0WordAnimations[0]));
// console.log('Line0_1 overall = ' + overall_duration(line0WordAnimations[1]));
// console.log('Line Reading Time = ' + lineDuration0);

// // Create LINE 0 WORD animations and store the Animation objects in an array
// const line0Animations = [
//   ln0.animate(vanishFrames, vanishTiming),
// ];

// // Set startTime of LINE animation to start directly after reading time for line
// setLineAnimaStartTime(line0Animations[0], lineDuration0, 2000.0);

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

//Animate each div... for simplicity, using delays and endDelays to make all animations have same start and end times (end time will be duration + delay + endDelay)

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
