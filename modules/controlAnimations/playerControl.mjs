export function pauseAll() {
	isPlaying = false;
	animations.forEach((animation) => {
		animation.pause();
	});
}

export function finishAll() {
	isPlaying = false;
	animations.forEach((animation) => {
		animation.finish();
	});
}

export function playAll() {
	isPlaying = true;
	animations.forEach((animation) => {
		animation.play();
	});
}
