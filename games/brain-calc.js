import readlineSync from 'readline-sync';
import getName from '../src/name.js';
import settings from '../index.js';
import getRandomNum from '../src/randomNum.js';

const brainCalc = () => {
  const name = getName();
  let correctAnswers = 0;
  const operators = ['+', '-', '*'];

  console.log('What is the result of the expression?');

  for (let i = 0; i < settings.rounds; i += 1) {
    const randomNum1 = getRandomNum(settings.brainCalc.maxNum);
    const randomNum2 = getRandomNum(settings.brainCalc.maxNum);
    const randomOperator = operators[getRandomNum(operators.length - 1)];
    const result = () => {
      switch (randomOperator) {
        case '+':
          return randomNum1 + randomNum2;
        case '-':
          return randomNum1 - randomNum2;
        default:
          return randomNum1 * randomNum2;
      }
    };

    console.log(`Question: ${randomNum1} ${randomOperator} ${randomNum2}`);

    const answer = +readlineSync.question('Your answer: ', {
      defaultInput: NaN,
    });

    if (answer === result()) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result()}"`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswers === settings.rounds) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default brainCalc;
