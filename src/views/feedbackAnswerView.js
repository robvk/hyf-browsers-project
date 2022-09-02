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
  }</p>
  <p> For more information click this link <a href="${
    question.links[0].href
  }">${question.links[0].href}</a></p> <hr>
  `;
  return element;
};
