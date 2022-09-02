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

  element.innerHTML = `<h1>Quiz is completed </h1>
    <h3> You got ${getNumberOfCorrectAnswers()} of ${
    quizData.questions.length
  } question correct </h3>
  <h4>To see feedback on your answers, please click below button!</h4>
  <button id="${GO_TO_FEEDBACK_PAGE_BUTTON_ID}">
      Go to Summary
    </button>
  `;

  userInterface.appendChild(element);

  document
    .getElementById(GO_TO_FEEDBACK_PAGE_BUTTON_ID)
    .addEventListener('click', initFeedbackPage);
};
