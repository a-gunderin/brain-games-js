import readlineSync from 'readline-sync';
import getName from './utils/name.js';

const rounds = 3;

const runGameEngine = (gameDescription, getQuestionResult) => {
  const name = getName();
  console.log(gameDescription);

  for (let i = 0; i < rounds; i += 1) {
    const [question, result] = getQuestionResult();
    console.log(question);
    const answer = readlineSync.question('Your answer: ', {
      defaultInput: NaN,
    });
    if (answer === result) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGameEngine;
