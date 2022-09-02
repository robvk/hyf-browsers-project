'use strict';

/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.classList.add('answer');
  element.id = `answer-${key}`;
  element.innerHTML = String.raw`
    ${key}: ${answerText}
  `;
  return element;
};
