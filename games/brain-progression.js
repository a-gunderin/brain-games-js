import readlineSync from 'readline-sync';
import getName from '../src/name.js';
import settings from '../src/index.js';
import getRandomNum from '../src/randomNum.js';
import getProgression from '../src/progression.js';

const brainProgression = () => {
  const name = getName();
  let correctAnswers = 0;

  console.log('What number is missing in the progression?');
  for (let i = 0; i < settings.rounds; i += 1) {
    const startNumber = getRandomNum(settings.brainProgression.maxNum);
    const stepNumber = getRandomNum(settings.brainProgression.maxNum);
    const progression = getProgression(
      startNumber,
      stepNumber,
      settings.brainProgression.lengthOfProgression,
    );

    const secretNumber = getRandomNum(settings.brainProgression.lengthOfProgression);
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

  if (correctAnswers === settings.rounds) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default brainProgression;
