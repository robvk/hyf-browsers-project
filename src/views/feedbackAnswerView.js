'use strict';

export const createFeedbackAnswerElement = (question, index) => {
  const element = document.createElement('div');
  element.classList.add('feedback-answer')
  element.innerHTML = `
  <hr>
  <p><b> Question ${index + 1} </b> (${
    question.text
  }) is <b> not achieved</b></p> 
  <p><b>Correct Answer is</b>: <span>${question.correct}) ${
    question.answers[question.correct]
  }</p></span><hr>
  `;
  return element;
};
