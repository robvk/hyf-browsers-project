import { getNumberOfCorrectAnswers } from '../views/numberOfCorrectAnswer.js';
import { SCORE_ID } from '../constants.js';

export const showScore = () => {
  const scoreDiv = document.getElementById(SCORE_ID);
  sessionStorage.setItem('Score',getNumberOfCorrectAnswers())
  scoreDiv.textContent = `Current Score:${sessionStorage.getItem('Score')}`;
  return scoreDiv
};
