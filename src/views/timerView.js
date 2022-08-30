import { TIMER_ID } from '../constants.js';
import { quizData } from '../data.js';

export const countDown = (callback) => {
  let timer = 30;
  const element = document.createElement('div');
  quizData.counter = setInterval(timeDown, 1000);

  function timeDown() {
    element.textContent = 'Time Left: ' + timer;
    const timerDiv = document.getElementById(TIMER_ID);
    timerDiv.innerHTML = '';
    timerDiv.appendChild(element);
    timer--;

    if (timer < 0) {
      clearInterval(quizData.counter);
      callback();

    }
  }
};
