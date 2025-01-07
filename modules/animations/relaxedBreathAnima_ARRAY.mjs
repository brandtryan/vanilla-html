const relaxedBreathWGHTkeyFrames = [
	{ fontVariationSettings: `"wght" 47, "wdth" 60, "ital" 0, "cont" 0` },
	{ fontVariationSettings: `"wght" 900, "wdth" 140, "ital" 0, "cont" 0` },
];
const relaxedBreathWGHTtiming = {
	// id: "",
	id: 'animaWidth',
	delay: 0,
	direction: 'alternate',
	duration: 100,
	easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
	endDelay: 0,
	fill: 'none',
	iterationStart: 0.0,
	iterations: Infinity,
	composite: 'add',
	iterationComposite: 'replace',
};

const relaxedBreathWDTHkeyFrames = [
	{ fontVariationSettings: `"wght" 47, "wdth" 60, "ital" 0, "cont" 0` },
	{ fontVariationSettings: `"wght" 900, "wdth" 140, "ital" 0, "cont" 0` },
];

const relaxedBreathWDTHtiming = {
	id: 'animaWidth',
	delay: 0,
	direction: 'alternate',
	duration: 100,
	easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
	endDelay: 0,
	fill: 'none',
	iterationStart: 0.0,
	iterations: Infinity,
	composite: 'add',
	iterationComposite: 'replace',
};

const relaxedBreathITALkeyFrames = [
	{ fontVariationSettings: `"wght" 47, "wdth" 60, "ital" 0, "cont" 0` },
	{ fontVariationSettings: `"wght" 900, "wdth" 140, "ital" 12, "cont" 0` },
];

const relaxedBreathITALtiming = {
	id: 'animaItalics',
	delay: 0,
	direction: 'alternate',
	duration: 1000,
	easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
	endDelay: 300,
	fill: 'none',
	iterationStart: 0.0,
	iterations: Infinity,
	composite: 'add',
	iterationComposite: 'replace',
};

const relaxedBreathCONTkeyFrames = [
	{ fontVariationSettings: `"wght" 200, "wdth" 60, "ital" 12, "cont" 0` },
	{ fontVariationSettings: `"wght" 900, "wdth" 140, "ital" 0, "cont" 100` },
];

const relaxedBreathCONTtiming = {
	id: 'animaContrast',
	delay: 0,
	direction: 'alternate',
	duration: 1000,
	easing: 'cubic-bezier(0.83, 0, 0.17, 1)',
	endDelay: 300,
	fill: 'none',
	iterationStart: 0.0,
	iterations: Infinity,
	composite: 'add',
	iterationComposite: 'replace',
};

export const relaxedBreathAnima_ARRAY = [
	relaxedBreathWGHTkeyFrames,
	relaxedBreathWDTHkeyFrames,
	relaxedBreathITALkeyFrames,
	relaxedBreathCONTkeyFrames,
];

export const relaxedBreathTiming_ARRAY = [
	relaxedBreathWGHTtiming,
	relaxedBreathWDTHtiming,
	relaxedBreathITALtiming,
	relaxedBreathCONTtiming,
];
