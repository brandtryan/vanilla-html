import { createTheater } from './createTheater.mjs';
import { wordsTheaterAnimations } from '../animations/theaters/wordsTheaterAnimations.mjs';

export const wordsTheater = createTheater('wordsTheater');
wordsTheater.nowShowing = wordsTheaterAnimations;
