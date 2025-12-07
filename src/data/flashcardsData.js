// src/data/flashcardsData.js
export const decks = [
  {
    id: 'cse-312',
    name: 'CSE 312 Probability',
    course: 'CSE 312',
    description: 'Key probability concepts and practice questions.',
    cards: [
      {
        id: 1,
        question: 'What is a random variable?',
        answer: 'A function that maps outcomes to real numbers.'
      },
      {
        id: 2,
        question: 'State the linearity of expectation.',
        answer: 'E[X + Y] = E[X] + E[Y], even if X and Y are dependent.'
      }
    ]
  },
  {
    id: 'info-340',
    name: 'INFO 340 React Basics',
    course: 'INFO 340',
    description: 'Core ideas about components, props, and state.',
    cards: [
      {
        id: 1,
        question: 'What is a React component?',
        answer: 'A reusable function that returns JSX UI.'
      },
      {
        id: 2,
        question: 'What is state used for in React?',
        answer: 'To store dynamic data that changes over time.'
      }
    ]
  },
  {
    id: 'js-fundamentals',
    name: 'JavaScript Fundamentals',
    course: 'General',
    description: 'Scope, closures, and modern JS features.',
    cards: [
      {
        id: 1,
        question: 'What is the difference between let and var?',
        answer: 'let is block-scoped; var is function-scoped.'
      },
      {
        id: 2,
        question: 'What is a closure?',
        answer:
          'A function that “remembers” variables from its outer scope even after that scope has finished executing.'
      }
    ]
  }
];
