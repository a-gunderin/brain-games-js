import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?\n', {
    defaultInput: 'John Doe',
  });
  console.log(`Hello, ${name}!`);
  return name;
};

const runGameEngine = (gameDescription, getQuestionResult) => {
  const name = getName();
  console.log(gameDescription);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, correctAnswer] = getQuestionResult();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGameEngine;
