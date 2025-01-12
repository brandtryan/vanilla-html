import { getLineReadingTimes } from './lineDurations.mjs';
import { overallDuration } from './time/overallDuration.mjs';

export function createCinemaCue() {
	return Object.freeze({
		pg00LineReadingTimes: getLineReadingTimes('pg00'),
		pg01LineReadingTimes: getLineReadingTimes('pg01'),
		pg02LineReadingTimes: getLineReadingTimes('pg02'),
		pg03LineReadingTimes: getLineReadingTimes('pg03'),
		pg04LineReadingTimes: getLineReadingTimes('pg04'),
		pg05LineReadingTimes: getLineReadingTimes('pg05'),
		pg06LineReadingTimes: getLineReadingTimes('pg06'),
		pg07LineReadingTimes: getLineReadingTimes('pg07'),
		pg08LineReadingTimes: getLineReadingTimes('pg08'),
		pg09LineReadingTimes: getLineReadingTimes('pg09'),
		pg10LineReadingTimes: getLineReadingTimes('pg10'),
		pg11LineReadingTimes: getLineReadingTimes('pg11'),
		pg12LineReadingTimes: getLineReadingTimes('pg12'),
		pg13LineReadingTimes: getLineReadingTimes('pg13'),
		pg14LineReadingTimes: getLineReadingTimes('pg14'),
		pg15LineReadingTimes: getLineReadingTimes('pg15'),
		pg16LineReadingTimes: getLineReadingTimes('pg16'),
		pg17LineReadingTimes: getLineReadingTimes('pg17'),
		pg18LineReadingTimes: getLineReadingTimes('pg18'),
		pg19LineReadingTimes: getLineReadingTimes('pg19'),
		pg20LineReadingTimes: getLineReadingTimes('pg20'),
		pg21LineReadingTimes: getLineReadingTimes('pg21'),
		pg22LineReadingTimes: getLineReadingTimes('pg22'),
		pg23LineReadingTimes: getLineReadingTimes('pg23'),
		pg24LineReadingTimes: getLineReadingTimes('pg24'),
		pg25LineReadingTimes: getLineReadingTimes('pg25'),
		pg26LineReadingTimes: getLineReadingTimes('pg26'),
		pg27LineReadingTimes: getLineReadingTimes('pg27'),
		pg28LineReadingTimes: getLineReadingTimes('pg28'),
		pg29LineReadingTimes: getLineReadingTimes('pg29'),
		pg30LineReadingTimes: getLineReadingTimes('pg30'),
		pg31LineReadingTimes: getLineReadingTimes('pg31'),
		pg32LineReadingTimes: getLineReadingTimes('pg32'),
		pg33LineReadingTimes: getLineReadingTimes('pg33'),
		pg34LineReadingTimes: getLineReadingTimes('pg34'),

		entireAnimationDuration: overallDuration(animation),
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
