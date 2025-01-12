import { pg00Elements } from '../dom/elements.mjs';
import { animations_player } from '../controlAnimations/animations_player.mjs';
import { lineDurations } from '../controlAnimations/lineDurations.mjs';
import breathAnima from '../animations/breathAnima.mjs';
// // Create LINE 0 WORD animations and store the Animation objects in an array
const pg00ln00WordAnimations = [];
const pg00ln01WordAnimations = [];
const pg00ln02WordAnimations = [];
const pg00ln03WordAnimations = [];
const pg00ln04WordAnimations = [];
const pg00ln05WordAnimations = [];
const pg00ln06WordAnimations = [];
const pg00ln07WordAnimations = [];

const pg00ln00Words = pg00Elements.filter((element) => element.id.includes('pg00ln00wrd'));
const pg00ln01Words = pg00Elements.filter((element) => element.id.includes('pg00ln01wrd'));
const pg00ln02Words = pg00Elements.filter((element) => element.id.includes('pg00ln02wrd'));
const pg00ln03Words = pg00Elements.filter((element) => element.id.includes('pg00ln03wrd'));
const pg00ln04Words = pg00Elements.filter((element) => element.id.includes('pg00ln04wrd'));
const pg00ln05Words = pg00Elements.filter((element) => element.id.includes('pg00ln05wrd'));
const pg00ln06Words = pg00Elements.filter((element) => element.id.includes('pg00ln06wrd'));
const pg00ln07Words = pg00Elements.filter((element) => element.id.includes('pg00ln07wrd'));

for (const word of pg00ln00Words) {
	pg00ln00WordAnimations.push(word.animate(breathAnima));
}

for (const word of pg00ln01Words) {
	pg00ln01WordAnimations.push(word.animate(breathAnima));
}

for (const word of pg00ln02Words) {
	pg00ln02WordAnimations.push(word.animate(breathAnima));
}

for (const word of pg00ln03Words) {
	pg00ln03WordAnimations.push(word.animate(breathAnima));
}

for (const word of pg00ln04Words) {
	pg00ln04WordAnimations.push(word.animate(breathAnima));
}

for (const word of pg00ln05Words) {
	pg00ln05WordAnimations.push(word.animate(breathAnima));
}

for (const word of pg00ln06Words) {
	pg00ln06WordAnimations.push(word.animate(breathAnima));
}

for (const word of pg00ln07Words) {
	pg00ln07WordAnimations.push(word.animate(breathAnima));
}

// Set duration of each word animation to be reading time divided by number of word animations
pg00ln00WordAnimations.forEach((item) =>
	item.effect.updateTiming({ duration: lineDurations.pg00ln00Duration / pg00ln00Words.length })
);

pg00ln01WordAnimations.forEach((item) =>
	item.effect.updateTiming({ duration: lineDurations.pg00ln01Duration / pg00ln01Words.length })
);

pg00ln02WordAnimations.forEach((item) =>
	item.effect.updateTiming({ duration: lineDurations.pg00ln02Duration / pg00ln02Words.length })
);

pg00ln03WordAnimations.forEach((item) =>
	item.effect.updateTiming({ duration: lineDurations.pg00ln03Duration / pg00ln03Words.length })
);

pg00ln04WordAnimations.forEach((item) =>
	item.effect.updateTiming({ duration: lineDurations.pg00ln04Duration / pg00ln04Words.length })
);

pg00ln05WordAnimations.forEach((item) =>
	item.effect.updateTiming({ duration: lineDurations.pg00ln05Duration / pg00ln05Words.length })
);

pg00ln06WordAnimations.forEach((item) =>
	item.effect.updateTiming({ duration: lineDurations.pg00ln06Duration / pg00ln06Words.length })
);

pg00ln07WordAnimations.forEach((item) =>
	item.effect.updateTiming({ duration: lineDurations.pg00ln07Duration / pg00ln07Words.length })
);

// Set startTime of each word animation so each starts after the previous animation, fitting to reading time
pg00ln00WordAnimations[0].startTime = 1000.0;

for (let i = 1; i < 7; i++) {
	pg00ln00WordAnimations[i].startTime =
		pg00ln00WordAnimations[i - 1].startTime +
		eval(`lineDurations.pg00ln0${i}Duration`) / eval(`pg00ln0${i}Words`).length;
}
// line0WordAnimations[1].startTime = line0WordAnimations[0].startTime + line0Duration / line0WordAnimations.length;

// console.log('Line0_0 overall = ' + overall_duration(line0WordAnimations[0]));
// console.log('Line0_1 overall = ' + overall_duration(line0WordAnimations[1]));

// // Create LINE 1 WORD animations and store the Animation objects in an array
// const line1WordAnimations = [ln1w6.animate(breathAnima), ln1w14.animate(breathAnima)];

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
// 	line.animate(breathAnima);
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
// const line0Animations = [s00p00ln00.animate(breathAnima)];
// Set LINE animations startTime to start directly after reading time for line

// for (let lineAnimation of lineAnimations) {
// 	for (let i = 0; i < lineAnimation.length; i++) {
// 		setLineAnimaStartTime(lineAnimation, linesReadingTimesArray[i], 2000.0);
// 	}
// }
// setLineAnimaStartTime(line0Animations[0], linesReadingTimesArray[0], 2000.0);

// // Create WORD animations and store the Animation objects in an array
// const line0WordAnimations = [
// 	s00p00ln00w03.animate(breathAnima),
// 	s00p00ln00w08.animate(breathAnima),
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

// Start animations and store them

let all_animations = Object.create(null);

const animationArrays = {
	word: [pg00ln00WordAnimations],
	// word: [word_animations],
	// line: [line_animations],
	// page: [page_animations],
};

Object.keys(animationArrays).forEach(function (name) {
	all_animations[name] = Array.from(document.querySelectorAll(`[data-channel="${name}"]`)).map(function (element) {
		return element.animate(animationArrays[name]);
	});
});

const word_animations = all_animations.word;
const line_animations = all_animations.line;
const page_animations = all_animations.page;

export const word_player = animations_player(word_animations);
const line_player = animations_player(line_animations);
const page_player = animations_player(page_animations);

// word_animations.addEventListener('finish', function () {
// 	main_player.stop();
// });
