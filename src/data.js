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
  // the questions in the quiz
  questions: [
    {
      text: 'Click the best synonym for constitution:',
      answers: {
        a: 'system of laws',
        b: 'card games',
        c: 'faraway galaxy',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'Click the best synonym for resort:',
      answers: {
        a: 'empty room',
        b: 'vacation place',
        c: 'jungle',
        d: 'tunnel',
      },
      correct: 'b',
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
        a: 'strong',
        b: 'cheap',
        c: 'experienced',
        d: 'true',
      },
      correct: 'c',
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
          a: 'passage',
          b: 'symbol',
          c: 'exit',
          d: 'rust',
        },
        correct: 'a',
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
        a: 'offer',
        b: 'stamp',
        c: 'portray',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'Click the best synonym for mention:',
      answers: {
        a: 'oppose',
        b: 'create',
        c: 'create',
        d: 'refer to',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'Click the best synonym for guidance:',
      answers: {
        a: 'principal',
        b: 'advice',
        c: 'create',
        d: 'refer to',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'Click the best synonym for nervous:',
      answers: {
        a: 'principal',
        b: 'advice',
        c: 'worried',
        d: 'refer to',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'Click the best synonym for succeed',
      answers: {
        a: 'principal',
        b: 'achieve',
        c: 'worried',
        d: 'refer to',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'Click the best synonym for vision',
      answers: {
        a: 'principal',
        b: 'sight',
        c: 'worried',
        d: 'refer to',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    
    

  ],
};
