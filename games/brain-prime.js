import readlineSync from 'readline-sync';
import getName from '../src/name.js';
import rounds from '../src/index.js';
import getRandomNum from '../src/randomNum.js';
import isPrimeNumber from '../src/isPrimeNumber.js';
import generatePrimeNumber from '../src/generatePrimeNumber.js';

const brainPrime = () => {
  const name = getName();
  let correctAnswers = 0;
  const maxNum = 100;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < rounds; i += 1) {
    const randomPrimeNumber = generatePrimeNumber(getRandomNum(maxNum));
    const randomNumber = getRandomNum(maxNum);
    const numbers = [randomPrimeNumber, randomNumber];
    const randomQuestionNumber = numbers[getRandomNum(numbers.length - 1)];
    console.log(`Question: ${randomQuestionNumber}`);
    const answer = readlineSync.question('Your answer: ', {
      defaultInput: 'I don\'t know =(',
    });
    if (answer === 'yes' && isPrimeNumber(randomQuestionNumber)) {
      correctAnswers += 1;
      console.log('Correct!');
    } else if (answer === 'no' && !isPrimeNumber(randomQuestionNumber)) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isPrimeNumber(randomQuestionNumber) ? 'yes' : 'no'}"`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (correctAnswers === rounds) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default brainPrime;