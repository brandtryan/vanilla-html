import { createTheater } from './createTheater.mjs';
import { pagesTheaterAnimations } from '../animations/theaters/pagesTheaterAnimations.mjs';

export const pagesTheater = createTheater('pagesTheater');
pagesTheater.nowShowing = pagesTheaterAnimations;
