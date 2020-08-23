import readlineSync from 'readline-sync';
import getName from '../src/name.js';
import settings from '../index.js';
import getRandomNum from '../src/randomNum.js';

const brainEven = () => {
  const name = getName();
  let correctAnswers = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < settings.rounds; i += 1) {
    const randomNum = getRandomNum(settings.brainEven.maxNum);
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

  if (correctAnswers === settings.rounds) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default brainEven;
