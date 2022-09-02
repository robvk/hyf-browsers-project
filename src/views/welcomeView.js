'use strict';

import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h2 class='welcome'>READY FOR ENGLISH TEST ?</h2>
    <img src='https://images.unsplash.com/photo-1555431189-0fabf2667795?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80' width='500px'><br>
    <button id="${START_QUIZ_BUTTON_ID}">START QUIZ</button>
  `;
  return element;
};
