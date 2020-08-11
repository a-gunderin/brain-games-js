#!/usr/bin/env node

import readlineSync from 'readline-sync';
import name from '../src/cli.js';

const multiplier = 100;
const numOfQuestions = 3;
let correctAnswers = 0;
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < numOfQuestions; i += 1) {
  const randomNum = Math.round(Math.random() * multiplier);
  const randomNumIsEven = (randomNum % 2) === 0;

  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ', {
    defaultInput: 'Empty space',
  });

  if (randomNumIsEven && answer === 'yes') {
    correctAnswers += 1;
    console.log('Correct!');
  } else if (!randomNumIsEven && answer === 'no') {
    correctAnswers += 1;
    console.log('Correct!');
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was ${randomNumIsEven ? '"yes"' : '"no"'}`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}

if (correctAnswers === numOfQuestions) {
  console.log(`Congratulations, ${name}!`);
}
