import { TIMER_ID } from '../constants.js';
import { quizData } from '../data.js';

export const countDown = (callback) => {
  let timer = 20;
  const warningAudio = document.getElementById('warning-sound');

  function timeDown() {
    const timerDiv = document.getElementById(TIMER_ID);
    timerDiv.innerHTML = `<div>Time Left:</div><div class='timer'>${timer}</div>`;
    timer--;
    warningAudio.pause();
    document.getElementById(TIMER_ID).classList.remove('blink');

    if (timer < 0) {
      clearInterval(quizData.counter);
      callback();
    }

    //When timer goes below zero, background will be red
    if (timer < 10) {
      timerDiv.style.background = 'red';
      document.getElementById(TIMER_ID).classList.add('blink');
      warningAudio.play();
    }
  }

  quizData.counter = setInterval(timeDown, 1000);
  timeDown();
};
