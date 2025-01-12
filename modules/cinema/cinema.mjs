import { createPlayer } from '../controlAnimations/createPlayer.mjs';
import { createCinemaCue } from '../controlAnimations/createCinemaCue.mjs';
import { pagesTheater } from './pagesTheater.mjs';
import { linesTheater } from './linesTheater.mjs';
import { wordsTheater } from './wordsTheater.mjs';

// const theaters = [pagesTheater, linesTheater, wordsTheater];

const cinema = {
	cinemaCue: createCinemaCue,
	pagesPlayer: createPlayer(pagesTheater),
	linesPlayer: createPlayer(linesTheater),
	wordsPlayer: createPlayer(wordsTheater),
};
