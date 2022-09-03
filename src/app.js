'use strict';

import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  initWelcomePage();

  handleKeyboardInput();
};

const handleKeyboardInput = () => {
  document.addEventListener('keydown', function (e) {
    const element = document.getElementById(`answer-${e.key.toUpperCase()}`);

    if (element) {
      element.click();
    }
  });
};

window.addEventListener('load', loadApp);
