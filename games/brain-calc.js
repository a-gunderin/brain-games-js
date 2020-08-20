import readlineSync from 'readline-sync';
import getName from '../src/name.js';
import rounds from '../src/index.js';
import getRandomNum from '../src/randomNum.js';

const brainCalc = () => {
  const name = getName();
  const maxNum = 100;
  let correctAnswers = 0;
  const operators = ['+', '-', '*'];
  console.log('What is the result of the expression?');

  for (let i = 0; i < rounds; i += 1) {
    const randomNum1 = getRandomNum(maxNum);
    const randomNum2 = getRandomNum(maxNum);
    const randomOperator = operators[getRandomNum(operators.length - 1)];
    const result = () => {
      if (randomOperator === '+') {
        return randomNum1 + randomNum2;
      }
      if (randomOperator === '-') {
        return randomNum1 - randomNum2;
      }
      return randomNum1 * randomNum2;
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

  if (correctAnswers === rounds) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default brainCalc;
