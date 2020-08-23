import readlineSync from 'readline-sync';
import getName from '../src/name.js';
import settings from '../index.js';
import getRandomNum from '../src/randomNum.js';
import getGcd from '../src/gcd.js';

const brainGcd = () => {
  const name = getName();
  let correctAnswers = 0;

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < settings.rounds; i += 1) {
    const randomNum1 = getRandomNum(settings.brainGcd.maxNum);
    const randomNum2 = getRandomNum(settings.brainGcd.maxNum);
    const result = getGcd(randomNum1, randomNum2);
    console.log(`Question: ${randomNum1} ${randomNum2}`);
    const answer = +readlineSync.question('Your answer: ', {
      defaultInput: NaN,
    });
    if (answer === result) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}"`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (correctAnswers === settings.rounds) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default brainGcd;
