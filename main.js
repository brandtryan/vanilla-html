// "wght"   47    200   900
// "wdth"   60    60   140
// "ital"   0    0   12
// "CONT"   0    100   100

import * as PageElements from './modules/DOM/PageElements.mjs';
import * as ParagraphElements from './modules/DOM/ParagraphElements.mjs';
import * as LineElements from './modules/DOM/LineElements.mjs';
import * as PageAnimas from './modules/DOM/PageAnimas.mjs';

import { crunchFrames, crunchTiming } from './modules/animations/crunch.mjs';

LineElements.page00paragraph00Lines[0].animate(crunchFrames, crunchTiming);
LineElements.page00paragraph00Lines[1].animate(crunchFrames, crunchTiming);
LineElements.page00paragraph00Lines[2].animate(crunchFrames, crunchTiming);

PageAnimas.page00Animas.forEach((animation) => animation.pause());

for (let i = 0; i < PageAnimas.page00Animas.length; i++) {
	PageAnimas.page00Animas[i].onfinish = () => {
		PageAnimas.page00Animas[i + 1].play();
	};
}

console.log(PageElements.page00.className);
console.log(ParagraphElements.page20paragraphs.length);
console.log(LineElements.page18paragraph00Lines.length);
console.log(LineElements.page18paragraph01Lines.length);
