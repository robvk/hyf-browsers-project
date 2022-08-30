import { getNumberOfCorrectAnswers } from '../views/numberOfCorrectAnswer.js';
import { SCORE_ID } from '../constants.js';

export const showScore = () => {
  const scoreDiv = document.getElementById(SCORE_ID);
  scoreDiv.textContent = `Current Score:${getNumberOfCorrectAnswers()}`;
};
