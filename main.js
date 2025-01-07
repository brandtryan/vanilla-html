// "wght"   47    200   900
// "wdth"   60    60   140
// "ital"   0    0   12
// "CONT"   0    100   100

import * as PageElements from './modules/DOM/PageElements.mjs';
import * as PageAnimas from './modules/DOM/PageAnimas.mjs';
import * as LineElements from './modules/DOM/LineElements.mjs';

import { crunchFrames, crunchTiming } from './modules/animations/crunch.mjs';

const s00p00ln00_Crunch = LineElements.page00paragraph00Lines[0].animate(crunchFrames, crunchTiming);
const s00p00ln01_Crunch = LineElements.page00paragraph00Lines[1].animate(crunchFrames, crunchTiming);
const s00p00ln02_Crunch = LineElements.page00paragraph00Lines[2].animate(crunchFrames, crunchTiming);

s00p00ln00_Crunch.pause();
s00p00ln01_Crunch.pause();
s00p00ln02_Crunch.pause();

for (let i = 0; i < PageAnimas.page00Animas.length; i++) {
	PageAnimas.page00Animas[i].onfinish = () => {
		PageAnimas.page00Animas[i + 1].play();
	};
}

console.log(PageAnimas.page00Animas.length);

s00p00ln00_Crunch.play();
