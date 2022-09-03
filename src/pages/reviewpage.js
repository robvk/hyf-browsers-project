import {
  USER_INTERFACE_ID,
  GO_TO_FEEDBACK_PAGE_BUTTON_ID,
} from '../constants.js';
import { quizData } from '../data.js';
import { getNumberOfCorrectAnswers } from '../util/numberOfCorrectAnswer.js';
import { initFeedbackPage } from './feedbackPage.js';

export const initReviewPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const element = document.createElement('div');

  element.classList.add('review-page')

  element.innerHTML = `<h1>Quiz is completed </h1>
    <h2> You got <span>${getNumberOfCorrectAnswers()}</span> of <span>${
    quizData.questions.length
  }</span> question correct </h2>
  <h2>To see feedback on your answers, please click below button!</h2>
  <button id="${GO_TO_FEEDBACK_PAGE_BUTTON_ID}">
      Go to Summary
    </button>
  `;

  userInterface.appendChild(element);

  document
    .getElementById(GO_TO_FEEDBACK_PAGE_BUTTON_ID)
    .addEventListener('click', initFeedbackPage);
};
