import { createTheater } from './createTheater.mjs';
import { linesTheaterAnimations } from '../animations/theaters/linesTheaterAnimations.mjs';

export const linesTheater = createTheater('linesTheater');
linesTheater.nowShowing = linesTheaterAnimations;
