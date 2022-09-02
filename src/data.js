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
      text: 'Click the best synonym for constitution:',
      answers: {
        A: 'system of laws',
        B: 'card games',
        C: 'faraway galaxy',
      },
      correct: 'A',
      selected: null,
    },
    {
      text: 'Click the best synonym for resort:',
      answers: {
        A: 'empty room',
        B: 'vacation place',
        C: 'jungle',
        D: 'tunnel',
      },
      correct: 'B',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text: 'Click the best synonym for sophisticated:',
      answers: {
        A: 'strong',
        B: 'cheap',
        C: 'experienced',
        D: 'true',
      },
      correct: 'C',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text: 'Click the best synonym for corridor:',
      answers: {
        A: 'passage',
        B: 'symbol',
        C: 'exit',
        D: 'rust',
      },
      correct: 'A',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      text: 'Click the best synonym for bid:',
      answers: {
        A: 'offer',
        B: 'stamp',
        C: 'portray',
      },
      correct: 'A',
      selected: null,
    },
    {
      text: 'Click the best synonym for mention:',
      answers: {
        A: 'oppose',
        B: 'create',
        C: 'create',
        D: 'refer to',
      },
      correct: 'D',
      selected: null,
    },
    {
      text: 'Click the best synonym for guidance:',
      answers: {
        A: 'principal',
        B: 'advice',
        C: 'create',
        D: 'refer to',
      },
      correct: 'B',
      selected: null,
    },
    {
      text: 'Click the best synonym for nervous:',
      answers: {
        A: 'principal',
        B: 'advice',
        C: 'worried',
        D: 'refer to',
      },
      correct: 'C',
      selected: null,
    },
    {
      text: 'Click the best synonym for succeed',
      answers: {
        A: 'principal',
        B: 'achieve',
        C: 'worried',
        D: 'refer to',
      },
      correct: 'B',
      selected: null,
    },
    {
      text: 'Click the best synonym for vision',
      answers: {
        A: 'principal',
        B: 'sight',
        C: 'worried',
        D: 'refer to',
      },
      correct: 'B',
      selected: null,
    },
  ],
};
