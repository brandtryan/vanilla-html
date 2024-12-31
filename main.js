// const progressbar = document.querySelector('#progress');

// progressbar.style.transformOrigin = '0% 50%';
// progressbar.animate(
// 	{
// 		transform: ['scaleX(0)', 'scaleX(1)'],
// 	},
// 	{
// 		fill: 'forwards',
// 		timeline: new ScrollTimeline({
// 			source: document.documentElement,
// 		}),
// 	}
// );

const line = document.querySelector('#p00-ln00');

const rollingKeyframes = new KeyframeEffect(
	line,
	[{ fontVariationSettings: `"wght" 100, "wdth" 75, "ital" 0, "CONT" 0` }, { fontVariationSettings: `"wght" 800, "wdth" 125, "ital" 12, "CONT" 100` }],
	{
		duration: 1000,
		direction: 'alternate',
		easing: 'ease-in-out',
		iterations: 'Infinity',
	}
);

const rollingAnimation = new Animation(rollingKeyframes, document.timeline);
rollingAnimation.play();
