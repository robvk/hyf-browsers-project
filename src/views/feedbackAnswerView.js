'use strict';

export const createFeedbackAnswerElement = (question, index) => {
  const element = document.createElement('div');
  element.innerHTML = `
  <hr>
  <p><b> Question ${index + 1} </b> (${
    question.text
  }) is <b> not achieved</b></p> 
  <p><b>Correct Answer is</b>: ${question.correct}) ${
    question.answers[question.correct]
  }</p> <hr>
  `;
  return element;
};
