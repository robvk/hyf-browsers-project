import { TIMER_ID } from '../constants.js';
import { quizData } from '../data.js';

export const countDown = (callback) => {
  let timer = 15;
  const audio = document.getElementById('warning-sound')

  function timeDown() {
    const timerDiv = document.getElementById(TIMER_ID);
    timerDiv.innerHTML = `<div>Time Left:</div><div class='timer'>${timer}</div>`;
    timer--;
    audio.pause();

    if (timer < 0) {
      clearInterval(quizData.counter);
      callback();
    }

    //When timer goes below zero, background will be red
    if (timer < 10) {
      timerDiv.style.background = 'red';
      audio.play()
    }
  }

  quizData.counter = setInterval(timeDown, 1000);
  timeDown();
};
