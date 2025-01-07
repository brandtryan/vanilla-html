export const relaxedBreathingKeyFrames = [
	relaxedBreathWGHTkeyFrames,
	relaxedBreathWDTHkeyFrames,
	relaxedBreathITALkeyFrames,
	relaxedBreathCONTkeyFrames,
];

export const relaxedBreathingTiming = [
	relaxedBreathWGHTtiming,
	relaxedBreathWDTHtiming,
	relaxedBreathITALtiming,
	relaxedBreathCONTtiming,
];

const relaxedBreathWGHTkeyFrames = [
	{ fontVariationSettings: `"wght" 295, "wdth" 100, "ital" 0, "cont" 100` },
	{ fontVariationSettings: `"wght" 900, "wdth" 100, "ital" 0, "cont" 100, .25` },
	{ fontVariationSettings: `"wght" 900, "wdth" 140, "ital" 0, "cont" 100, .50` },
	{ fontVariationSettings: `"wght" 900, "wdth" 140, "ital" 12, "cont" 100, .75` },
	{ fontVariationSettings: `"wght" 900, "wdth" 140, "ital" 12, "cont" 100, 1` },
];
const relaxedBreathWGHTtiming = {
	// id: "",
	delay: 0,
	direction: 'alternate',
	duration: 1000,
	endDelay: 0,
	fill: 'none',
	easing: 'cubic-bezier(0.5, 1, 0.89, 1)',
	iterationStart: 0.0,
	iterations: 'Infinity',
	composite: 'add',
	iterationComposite: 'replace',
};

const relaxedBreathWDTHkeyFrames = [{ fontVariationSettings: `"wght" 295, "wdth" 100, "ital" 0, "cont" 100` }];
const relaxedBreathWDTHtiming = {
	// id: "",
	delay: 250,
	direction: 'alternate',
	duration: 1000,
	endDelay: 0,
	fill: 'none',
	easing: 'cubic-bezier(0.45, 0, 0.55, 1)',
	iterationStart: 0.0,
	iterations: 'Infinity',
	composite: 'add',
	iterationComposite: 'replace',
};

const relaxedBreathITALkeyFrames = [{ fontVariationSettings: `"wght" 295, "wdth" 100, "ital" 0, "cont" 100` }];
const relaxedBreathITALtiming = {
	// id: "",
	delay: 500,
	direction: 'alternate',
	duration: 1000,
	endDelay: 0,
	fill: 'none',
	easing: 'cubic-bezier(0.45, 0, 0.55, 1)',
	iterationStart: 0.0,
	iterations: 'Infinity',
	composite: 'add',
	iterationComposite: 'replace',
};

const relaxedBreathCONTkeyFrames = [{ fontVariationSettings: `"wght" 295, "wdth" 100, "ital" 0, "cont" 30` }];
const relaxedBreathCONTtiming = {
	// id: "",
	delay: 750,
	direction: 'alternate',
	duration: 1000,
	endDelay: 0,
	fill: 'none',
	easing: 'cubic-bezier(0.45, 0, 0.55, 1)',
	iterationStart: 0.0,
	iterations: 'Infinity',
	composite: 'add',
	iterationComposite: 'replace',
};
