import readlineSync from 'readline-sync';

const name = () => {
  console.log('Welcome to the Brain Games!');
  const getName = readlineSync.question('May I have your name?\n', {
    defaultInput: 'John Doe',
  });
  console.log(`Hello, ${getName}!`);
  return getName;
};

export default name;
