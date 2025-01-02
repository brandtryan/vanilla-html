// "wght"   47    200   900
// "wdth"   60    60   140
// "ital"   0    0   12
// "CONT"   0    100   100

export const breatheFrames = [
	{
		fontWeight: 47,
		fontStretch: '60%',
		fontStyle: 'normal',
		fontVariationSettings: `"cont" 100`,
	},
	{
		fontWeight: 900,
		fontStretch: '140%',
		fontStyle: 'italic',
		fontVariationSettings: `"cont" 0`,
	},
];

export const breatheTiming = {
	delay: 100,
	direction: 'alternate',
	duration: 350,
	easing: 'ease-in-out',
	iterations: '2.3',
	// endDelay: Math.random() * 100,
};
