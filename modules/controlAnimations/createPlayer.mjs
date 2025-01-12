export function createPlayer(theaterName) {
	return Object.freeze({
		play: function () {
			theaterName.nowShowing.forEach((animation) => animation.play());
		},
		pause: function () {
			theaterName.nowShowing.forEach((animation) => animation.pause());
		},
		reverse: function () {
			theaterName.nowShowing.forEach((animation) => animation.reverse());
		},
		currentTime: function (time = 0) {
			theaterName.nowShowing.forEach(function (animation) {
				if (typeof animation.currentTime === 'function') {
					animation.currentTime(time);
				} else {
					animation.currentTime = time;
				}
			});
		},
	});
}
