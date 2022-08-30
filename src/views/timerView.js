import { TIMER_ID } from '../constants.js';
import { quizData } from '../data.js';

export const countDown = (callback) => {
  let timer = 30;

  function timeDown() {
    const timerDiv = document.getElementById(TIMER_ID);
    timerDiv.textContent = 'Time Left: ' + timer;
    timer--;

    if (timer < 0) {
      clearInterval(quizData.counter);
      callback();
    }
  }

  quizData.counter = setInterval(timeDown, 1000);
  timeDown();
};
