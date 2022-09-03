'use strict';

/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  counter: undefined,

  // the questions in the quiz
  questions: [
    {
      text: 'Choose the best synonym for Constitution:',
      answers: {
        A: 'System of Laws',
        B: 'Card Games',
        C: 'Faraway Galaxy',
        D: 'Weather Forecast'
      },
      correct: 'A',
      selected: null,
    },
    {
      text: 'Choose the best synonym for resort:',
      answers: {
        A: 'Empty Room',
        B: 'Vacation Rental',
        C: 'Jungle',
        D: 'Tunnel',
      },
      correct: 'B',
      selected: null,
    },
    {
      text: 'Choose the best synonym for Sophisticated:',
      answers: {
        A: 'Strong',
        B: 'Cheap',
        C: 'Experienced',
        D: 'True',
      },
      correct: 'C',
      selected: null,
    },
    {
      text: 'Click the best synonym for corridor:',
      answers: {
        A: 'Passage',
        B: 'Symbol',
        C: 'Exit',
        D: 'Rust',
      },
      correct: 'A',
      selected: null,
    },
    {
      text: 'Click the best synonym for bid:',
      answers: {
        A: 'Offer',
        B: 'Stamp',
        C: 'Portray',
        D: 'Donate',
      },
      correct: 'A',
      selected: null,
    },
    {
      text: 'Click the best synonym for mention:',
      answers: {
        A: 'Oppose',
        B: 'Create',
        C: 'Duplicate',
        D: 'Refer to',
      },
      correct: 'D',
      selected: null,
    },
    {
      text: 'Click the best synonym for guidance:',
      answers: {
        A: 'Principal',
        B: 'Advice',
        C: 'Create',
        D: 'Refer to',
      },
      correct: 'B',
      selected: null,
    },
    {
      text: 'Click the best synonym for nervous:',
      answers: {
        A: 'Principal',
        B: 'Advice',
        C: 'Worried',
        D: 'Refer to',
      },
      correct: 'C',
      selected: null,
    },
    {
      text: 'Click the best synonym for succeed',
      answers: {
        A: 'Principal',
        B: 'Achieve',
        C: 'Worried',
        D: 'Refer to',
      },
      correct: 'B',
      selected: null,
    },
    {
      text: 'Click the best synonym for vision',
      answers: {
        A: 'Principal',
        B: 'Sight',
        C: 'Worried',
        D: 'Refer to',
      },
      correct: 'B',
      selected: null,
    },
  ],
};
