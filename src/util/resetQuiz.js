'use strict';

import { quizData } from '../data.js';

export const resetQuiz = () => {
  quizData.currentQuestionIndex = 0;
  sessionStorage.setItem('Score', 0);
  quizData.questions.forEach((question) => {
    question.selected = null;
  });
};
