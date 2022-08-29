'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  CORRECT_ANS,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
//import { reviewResult } from './pages/reviewpage.js';
console.log(CORRECT_ANS);

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  if (quizData.currentQuestionIndex + 1 > quizData.questions.length) {
    userInterface.innerHTML = `<h1>Quiz is completed </h1>
    <h2> You got ${CORRECT_ANS} of ${quizData.questions.length} question correct </h2>`;
    return false;
  }

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answerElement.addEventListener('click', function () {
      currentQuestion.selected = key;
      console.log(currentQuestion.selected);
      answerElement.classList.add('chosen');

      if (currentQuestion.selected == currentQuestion.correct) {
        CORRECT_ANS++;
      }

      nextQuestion();
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
