import { USER_INTERFACE_ID } from '../constants.js';
import { getNumberOfCorrectAnswers, quizData } from '../data.js';

export const initReviewPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const element = document.createElement('div');

  element.innerHTML = `<h1>Quiz is completed </h1>
    <h2> You got ${getNumberOfCorrectAnswers()} of ${
    quizData.questions.length
  } question correct </h2>`;

  userInterface.appendChild(element);
};
