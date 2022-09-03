'use strict';

export const createFeedbackTitleElement = (gotEverythingCorrect) => {
  const element = document.createElement('div');
  element.classList.add('feedback-title');
  // if there  is no wrong answer,this title will show
  if (gotEverythingCorrect) {
    element.innerHTML = `<h1><b>YOU GOT ALL QUESTIONS CORRECT</b><h1>
      <img src='https://media.giphy.com/media/bgGainulgkZhK/giphy.gif'>`;
  } else {
    element.innerHTML =
      '<h3>Below you can see the questions that were not achieved<h1>';
  }

  return element;
};
