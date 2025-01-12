import { getLineReadingTimes } from './getLineReadingTimes.mjs';
import { overallDuration } from './time/overallDuration.mjs';

export function createCinemaCue() {
	return Object.freeze({
		page00LinesReadingTime: getLineReadingTimes('p00'),
		page01LinesReadingTime: getLineReadingTimes('p01'),
		page02LinesReadingTime: getLineReadingTimes('p02'),
		page03LinesReadingTime: getLineReadingTimes('p03'),
		page04LinesReadingTime: getLineReadingTimes('p04'),
		page05LinesReadingTime: getLineReadingTimes('p05'),
		page06LinesReadingTime: getLineReadingTimes('p06'),
		page07LinesReadingTime: getLineReadingTimes('p07'),
		page08LinesReadingTime: getLineReadingTimes('p08'),
		page09LinesReadingTime: getLineReadingTimes('p09'),
		page10LinesReadingTime: getLineReadingTimes('p10'),
		page11LinesReadingTime: getLineReadingTimes('p11'),
		page12LinesReadingTime: getLineReadingTimes('p12'),
		page13LinesReadingTime: getLineReadingTimes('p13'),
		page14LinesReadingTime: getLineReadingTimes('p14'),
		page15LinesReadingTime: getLineReadingTimes('p15'),
		page16LinesReadingTime: getLineReadingTimes('p16'),
		page17LinesReadingTime: getLineReadingTimes('p17'),
		page18LinesReadingTime: getLineReadingTimes('p18'),
		page19LinesReadingTime: getLineReadingTimes('p19'),
		page20LinesReadingTime: getLineReadingTimes('p20'),
		page21LinesReadingTime: getLineReadingTimes('p21'),
		page22LinesReadingTime: getLineReadingTimes('p22'),
		page23LinesReadingTime: getLineReadingTimes('p23'),
		page24LinesReadingTime: getLineReadingTimes('p24'),
		page25LinesReadingTime: getLineReadingTimes('p25'),
		page26LinesReadingTime: getLineReadingTimes('p26'),
		page27LinesReadingTime: getLineReadingTimes('p27'),
		page28LinesReadingTime: getLineReadingTimes('p28'),
		page29LinesReadingTime: getLineReadingTimes('p29'),
		page30LinesReadingTime: getLineReadingTimes('p30'),
		page31LinesReadingTime: getLineReadingTimes('p31'),
		page32LinesReadingTime: getLineReadingTimes('p32'),
		page33LinesReadingTime: getLineReadingTimes('p33'),
		page34LinesReadingTime: getLineReadingTimes('p34'),

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
