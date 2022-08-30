'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { initReviewPage } from './reviewPage.js';

export const initQuestionPage = () => {
  if (quizData.currentQuestionIndex + 1 > quizData.questions.length) {
    initReviewPage();

    return false;
  }

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);

    answerElement.addEventListener('click', function () {
      currentQuestion.selected = key;

      if (currentQuestion.selected !== currentQuestion.correct) {
        answerElement.classList.add('wrong');
      } else answerElement.classList.add('correct');

      // nextQuestion();
    });

    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex++;

  initQuestionPage();
};
