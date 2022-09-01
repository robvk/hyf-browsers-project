import { USER_INTERFACE_ID, RESTART_QUIZ_BUTTON_ID } from '../constants.js';
import { quizData } from '../data.js';
import { createFeedbackAnswerElement } from '../views/feedbackAnswerView.js';
import { createFeedbackTitleElement } from '../views/feedbackTitleView.js';
import { getNumberOfCorrectAnswers } from '../util/numberOfCorrectAnswer.js';
import { initWelcomePage } from './welcomePage.js';

export const initFeedbackPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  //This title will appear if there are wrong answers
  const headTitle = createFeedbackTitleElement(
    getNumberOfCorrectAnswers() === quizData.questions.length
  );

  userInterface.appendChild(headTitle);

  //Present only not achieved answer with correct answer and
  //suggested link
  quizData.questions.forEach((question, index) => {
    if (question.selected !== question.correct) {
      const element = createFeedbackAnswerElement(question, index);

      userInterface.appendChild(element);
    }
  });

  //Adding restart button
  const buttonEl = document.createElement('div');
  buttonEl.innerHTML = String.raw`
    
    <button id="${RESTART_QUIZ_BUTTON_ID}">Restart Quiz</button>
  `;
  userInterface.appendChild(buttonEl);

  document
    .getElementById(RESTART_QUIZ_BUTTON_ID)
    .addEventListener('click', initWelcomePage);
};
