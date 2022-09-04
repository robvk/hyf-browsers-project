'use strict';

import {
  ANSWERS_LIST_ID,
  TOP_ANSWERS_LIST_ID,
  BOTTOM_ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { initReviewPage } from './reviewpage.js';
import { countDown } from '../views/timerView.js';
import { showScore } from '../views/scoreView.js';

export const initQuestionPage = () => {
  if (quizData.currentQuestionIndex + 1 > quizData.questions.length) {
    initReviewPage();
    return false;
  }

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);
  clearInterval(quizData.counter);
  userInterface.appendChild(questionElement);
  showScore();
  countDown(() => {
    nextQuestion();
  });
  //This is main div for options A,B,C,D
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  //Only option A,B go into this div
  const topAnswersListElement = document.getElementById(TOP_ANSWERS_LIST_ID);
  //Only option C,D go into this div
  const bottomAnswersListElement = document.getElementById(
    BOTTOM_ANSWERS_LIST_ID
  );

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const wrongAnswer = document.getElementById('wrong-answer');
    const correctAnswer = document.getElementById('correct-answer');
    const answerElement = createAnswerElement(key, answerText);
    answerElement.addEventListener('click', function () {
      currentQuestion.selected = key;

      if (key == currentQuestion.correct) {
        showScore();
        document
          .getElementById(`answer-${key}`)
          .classList.add('green', 'blink');
        correctAnswer.play();
        document
          .getElementById(`answer-${key}`)
          .firstElementChild.classList.add('correct');
      } else {
        document.getElementById(`answer-${key}`).classList.add('red');
        wrongAnswer.play();
        document
          .getElementById(`answer-${currentQuestion.correct}`)
          .classList.add('green', 'blink');
        //If wrong answer is chosen, two options will be colored,red and green
        document
          .getElementById(`answer-${key}`)
          .firstElementChild.classList.add('wrong');
        document
          .getElementById(`answer-${currentQuestion.correct}`)
          .firstElementChild.classList.add('correct');
      }
      //After clicking all list elements will be blocked
      for (const element of document.getElementsByClassName('answer')) {
        element.classList.add('disable');
      }

      setTimeout(nextQuestion, 1000);
    });

    if (key === 'A' || key === 'B') {
      topAnswersListElement.appendChild(answerElement);
    } else {
      bottomAnswersListElement.appendChild(answerElement);
    }
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex++;
  initQuestionPage();
};
