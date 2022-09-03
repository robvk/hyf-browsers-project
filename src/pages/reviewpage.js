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
    <h3> You got ${getNumberOfCorrectAnswers()} out of ${
    quizData.questions.length
  } questions correct </h3>`
  if (getNumberOfCorrectAnswers() <= 3) {
      element.innerHTML += `<h3>That was pretty Bad!</h4>`
    } else if (getNumberOfCorrectAnswers() < 6) {
      element.innerHTML += `<h3>That was Average!</h4>`
  } else {
    element.innerHTML += `<h3>You are a Pro!</h4>`
    }
  element.innerHTML += `<p>To see feedback on your answers, please click below button!</p>
  <button id="${GO_TO_FEEDBACK_PAGE_BUTTON_ID}">
      Go to Summary
    </button>
  `;

  userInterface.appendChild(element);

  document
    .getElementById(GO_TO_FEEDBACK_PAGE_BUTTON_ID)
    .addEventListener('click', initFeedbackPage);
};
