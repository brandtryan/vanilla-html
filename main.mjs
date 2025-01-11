import { elements, pages, lines, words } from './modules/dom/elements.mjs';
import { getLineWordCounts } from './modules/controlAnimations/time/getLineWordCounts.mjs';
import { overallDuration } from './modules/controlAnimations/time/overallDuration.mjs';
import { lineReadingTime } from './modules/controlAnimations/time/lineReadingTime.mjs';

console.log(lineReadingTime(pg00ln00));

// Create array of words per line from strings
// const s00p00ln00Words = s00p00ln00.filter((line) => line.textContent.includes('s00p00ln00w'));
// const regex = /\bs?\w*s00p00ln01w\w*\b/;
// const s00p00ln01Words = words.match(regex);
// const s00p00ln02Words = lines.filter((line) => line.textContent.includes('s00p00ln02w'));
// const s00p00ln03Words = lines.filter((line) => line.textContent.includes('s00p00ln03w'));
// const s00p00ln04Words = lines.filter((line) => line.textContent.includes('s00p00ln04w'));
// const s00p00ln05Words = lines.filter((line) => line.textContent.includes('s00p00ln05w'));
// const s00p00ln06Words = lines.filter((line) => line.textContent.includes('s00p00ln06w'));
// const s00p00ln07Words = lines.filter((line) => line.textContent.includes('s00p00ln07w'));
// const s00p00ln08Words = lines.filter((line) => line.textContent.includes('s00p00ln08w'));

// console.log(el.s00Line00Words);
// console.log(el.s00Line01Words);
// console.log(el.s00Line02Words);
// console.log(el.s00Line03Words);
// console.log(el.s00Line04Words);
// console.log(el.s00Line05Words);
// console.log(el.s00Line06Words);
// console.log(el.s00Line07Words);
// console.log(el.s00Line08Words);

//Set duration of line animations based on average reading time
// const s00p00ln00Duration = lineReadingTime(s00p00ln00Words);
// const s00p00ln01Duration = lineReadingTime(s00p00ln01Words);
// const s00p00ln02Duration = lineReadingTime(s00p00ln02Words);
// const s00p00ln03Duration = lineReadingTime(s00p00ln03Words);
// const s00p00ln04Duration = lineReadingTime(s00p00ln04Words);
// const s00p00ln05Duration = lineReadingTime(s00p00ln05Words);
// const s00p00ln06Duration = lineReadingTime(s00p00ln06Words);
// const s00p00ln07Duration = lineReadingTime(s00p00ln07Words);
// const s00p00ln08Duration = lineReadingTime(s00p00ln08Words);

// // Animations

// const breathframes = [
// 	{ fontvariationsettings: `"wght" 295, "wdth" 100, "ital" 0, "cont" 0` },
// 	{ fontvariationsettings: `"wght" 900, "wdth" 140, "ital" 12, "cont" 100` },
// 	{ fontvariationsettings: `"wght" 295, "wdth" 100, "ital" 0, "cont" 0` },
// ];

// const breathtiming = {
// 	delay: 0,
// 	direction: 'normal',
// 	duration: s00p00ln00Duration,
// 	fill: 'none',
// 	easing: 'cubic-bezier(0.45, 0, 0.55, 1)',
// 	iterationstart: 0.0,
// 	iterations: '1',
// 	composite: 'replace',
// 	iterationcomposite: 'replace',
// };

// // Create LINE 0 WORD animations and store the Animation objects in an array
// const s00p00ln00WordAnimas = [];

// for (const word of s00p00ln00Words) {
// 	s00p00ln00WordAnimas.push(word.animate(breathframes, breathtiming));
// }

// console.log(s00p00ln00WordAnimas[0]);

// // // Set duration of each word animation to be reading time divided by number of word animations
// s00p00ln00WordAnimas.forEach((item) =>
// 	item.effect.updateTiming({ duration: s00p00ln00Duration / s00p00ln00Words.length })
// );
// // Set startTime of each word animation so each starts after the previous animation, fitting to reading time
// line0WordAnimations[0].startTime = 1000.0;
// line0WordAnimations[1].startTime = line0WordAnimations[0].startTime + line0Duration / line0WordAnimations.length;

// console.log('Line0_0 overall = ' + overall_duration(line0WordAnimations[0]));
// console.log('Line0_1 overall = ' + overall_duration(line0WordAnimations[1]));

// // Create LINE 1 WORD animations and store the Animation objects in an array
// const line1WordAnimations = [ln1w6.animate(breathFrames, breathTiming), ln1w14.animate(breathFrames, breathTiming)];

// // Set duration of each word animation to be reading time divided by number of word animations
// line1WordAnimations.forEach((item) => item.effect.updateTiming({ duration: line1Duration / 4 }));
// // Set startTime of each word animation so each starts after the previous animation, fitting to reading time
// line1WordAnimations[0].startTime = line0Duration + 1000.0;
// line1WordAnimations[1].startTime = line1WordAnimations[0].startTime + line0Duration / line1WordAnimations.length;

// console.log('Line1_0 overall = ' + overall_duration(line1WordAnimations[0]));
// console.log('Line1_1 overall = ' + overall_duration(line1WordAnimations[1]));

// // MISC FUNCTIONS

// const animation = sampleElements.map(Element => Element.animate(keyframes, timing));

// const player = animationsPlayer(s00p00ln00Animas);
// player.play();

// const linesReadingTimesArray = [];
// const lineAnimations = [];

// const lineWordCounts = s00Lines.map((line) => line.childElementCount);

// for (let count of lineWordCounts) {
// 	let result = lineReadingTime(count);
// 	linesReadingTimesArray.push(result);
// }

// for (let line of s00Lines) {
// 	line.animate(breathFrames, breathTiming);
// 	lineAnimations.push(line.getAnimations());
// }

// console.log(nowTimeLine.currentTime);

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
// setWordAnimaStartTime(line0WordAnimations[0], lineDuration0, s00p00ln00.length, 10);
// setWordAnimaStartTime(line0WordAnimations[1], lineDuration0, s00p00ln00.length, 18);

// console.log('Anima0 duration = ' + line0WordAnimations[0].effect.getTiming().duration);
// console.log('Anima1 duration = ' + line0WordAnimations[1].effect.getTiming().duration);
// console.log('Anima0 startTime = ' + line0WordAnimations[0].startTime);
// console.log('Anima1 startTime = ' + line0WordAnimations[1].startTime);
// console.log('Line0_0 overall = ' + overall_duration(line0WordAnimations[0]));
// console.log('Line0_1 overall = ' + overall_duration(line0WordAnimations[1]));
// console.log('Line Reading Time = ' + lineDuration0);
