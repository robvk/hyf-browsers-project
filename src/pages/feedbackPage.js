import { USER_INTERFACE_ID, RESTART_QUIZ_BUTTON_ID } from '../constants.js';
import { quizData } from '../data.js';
import { getNumberOfCorrectAnswers } from '../views/numberOfCorrectAnswer.js';
import { initWelcomePage } from './welcomePage.js';

export const initSummaryPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  //This title will apeear if there are wrong answers
  const headTitle = document.createElement('div');
  headTitle.innerHTML =
    '<h3>Below you can see the questions that were not achieved<h1>';
  userInterface.appendChild(headTitle);

  // if there  is no wrong answer,this title will show
  if (getNumberOfCorrectAnswers() == quizData.questions.length) {
    headTitle.innerHTML = `<h1><b>YOU GOT ALL QUESTIONS CORRECT</b><h1>
    <img src='https://media.giphy.com/media/bgGainulgkZhK/giphy.gif'>`;
  }

  //Present only not achieved answer with correct answer and 
  //suggested link
  quizData.questions.forEach((question, index) => {
    if (question.selected !== question.correct) {
      const element = document.createElement('div');
      element.innerHTML = `
      <hr>
      <p><b> Question ${index + 1} </b> (${
        question.text
      }) is <b> not achieved</b></p> 
      <p><b>Correct Answer is</b>: ${question.correct}) ${
        question.answers[question.correct]
      }</p>
      <p> For more information click this link <a href="${
        question.links[0].href
      }">${question.links[0].href}</a></p> <hr>
      `;
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
