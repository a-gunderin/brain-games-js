import getRandomNum from '../utils/randomNum.js';
import isPrimeNumber from '../utils/isPrimeNumber.js';
import generatePrimeNumber from '../utils/generatePrimeNumber.js';
import runGameEngine from '../index.js';

const settings = {
  minNum: 0,
  maxNum: 100,
};
const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameData = () => {
  const randomPrimeNumber = generatePrimeNumber(getRandomNum(settings.minNum, settings.maxNum));
  const randomNumber = getRandomNum(settings.minNum, settings.maxNum);
  const numbers = [randomPrimeNumber, randomNumber];
  const randomQuestionNumber = numbers[getRandomNum(0, numbers.length - 1)];
  const question = `Question: ${randomQuestionNumber}`;
  const result = isPrimeNumber(randomQuestionNumber) ? 'yes' : 'no';
  return [question, result];
};

const runBrainPrime = () => {
  runGameEngine(gameDescription, gameData);
};

export default runBrainPrime;
