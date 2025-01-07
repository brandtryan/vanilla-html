// "wght"   47    200   900
// "wdth"   60    60   140
// "ital"   0    0   12
// "CONT"   0    100   100
import { relaxedBreathAnima_ARRAY } from './modules/animations/relaxedBreathAnima_ARRAY.mjs';
import { relaxedBreathTiming_ARRAY } from './modules/animations/relaxedBreathAnima_ARRAY.mjs';
import { animationsPlayer } from './modules/animations/animationControl/animationsPlayer.mjs';

const s00p00ln00 = document.getElementById('s00-p00-ln00');

const wght = s00p00ln00.animate(relaxedBreathAnima_ARRAY[0]);
const wdth = s00p00ln00.animate(relaxedBreathAnima_ARRAY[1]);
const ital = s00p00ln00.animate(relaxedBreathAnima_ARRAY[2]);
const cont = s00p00ln00.animate(relaxedBreathAnima_ARRAY[3]);

const wghtTiming = relaxedBreathTiming_ARRAY[0];
const wdthTiming = relaxedBreathTiming_ARRAY[1];
const italTiming = relaxedBreathTiming_ARRAY[2];
const contTiming = relaxedBreathTiming_ARRAY[3];

const animations = [wght, wdth, ital, cont];
const timings = [wghtTiming, wdthTiming, italTiming, contTiming];

const s00Player = animationsPlayer(animations, timings);

wght.startTime = 0;
wdth.startTime = wght.startTime + 3000;
ital.startTime = wght.startTime + 500;
cont.startTime = wght.startTime + 1500;

s00Player.play();

// wght.playbackRate = 2;
// wdth.playbackRate = 0.5;
// ital.playbackRate = 5;
// cont.playbackRate = 2;

// weight.pause()
// width.pause()
// italics.pause()
// contrast.pause()

// weight.cancel()
// width.cancel()
// italics.cancel()
// contrast.cancel()
