'use strict';

import {
  TOP_ANSWERS_LIST_ID,
  BOTTOM_ANSWERS_LIST_ID,
  ANSWERS_LIST_ID,
  TIMER_ID,
  SCORE_ID,
} from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { quizData } from '../data.js';

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');
  let splitQues = question.split(' ');
  let mainques = "";
  let lastWord = splitQues[splitQues.length-1]
    for(let i = 0; i < splitQues.length - 1; i++){
        mainques += splitQues[i] + " ";      
    }
  
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <div id="${SCORE_ID}"> </div>
    <div id="${TIMER_ID}"> </div>
    <div class='counter'>Question ${quizData.currentQuestionIndex + 1} / ${
    quizData.questions.length
  }</div>

    <p class="question">${quizData.currentQuestionIndex + 1}.  ${mainques} <em class="bold-text">${lastWord}</em></p>

    <div id="${ANSWERS_LIST_ID}" class="answers-list">
      <div id="${TOP_ANSWERS_LIST_ID}" class="sub-answer-list"></div>
      <div id="${BOTTOM_ANSWERS_LIST_ID}" class="sub-answer-list"></div>
    </div>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
  `;

  return element;
};
