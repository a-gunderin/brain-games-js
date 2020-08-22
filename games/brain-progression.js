import readlineSync from 'readline-sync';
import getName from '../src/name.js';
import rounds from '../src/index.js';
import getRandomNum from '../src/randomNum.js';
import getProgression from '../src/progression.js';

const brainProgression = () => {
  const name = getName();
  let correctAnswers = 0;
  const maxNum = 100;
  const lengthOfProgression = 10;

  console.log('What number is missing in the progression?');
  for (let i = 0; i < rounds; i += 1) {
    const startNumber = getRandomNum(maxNum);
    const stepNumber = getRandomNum(maxNum);
    const progression = getProgression(startNumber, stepNumber, lengthOfProgression);
    const secretNumber = getRandomNum(lengthOfProgression);
    const secretProgression = [...progression];
    secretProgression[secretNumber] = '..';
    console.log(`Question: ${secretProgression.join(' ')}`);
    const answer = +readlineSync.question('Your answer: ', {
      defaultInput: NaN,
    });
    if (answer === progression[secretNumber]) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${progression[secretNumber]}"`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
  if (correctAnswers === rounds) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default brainProgression;
