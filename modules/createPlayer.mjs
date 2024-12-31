export function createPlayer(animations) {
	return Object.freeze({
		play: function () {
			animations.forEach((animation) => animation.play());
		},
		pause: function () {
			animations.forEach((animation) => animation.pause());
		},
		currentTime: function (time = 0) {
			animations.forEach((animation) => (animation.currentTime = time));
		},
	});
}
