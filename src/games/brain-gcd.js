import getRandomNum from '../utils/randomNum.js';
import getGcd from '../utils/gcd.js';
import runGameEngine from '../index.js';

const settings = {
  minNum: 0,
  maxNum: 100,
};
const gameDescription = 'Find the greatest common divisor of given numbers.';

const gameData = () => {
  const randomNum1 = getRandomNum(settings.minNum, settings.maxNum);
  const randomNum2 = getRandomNum(settings.minNum, settings.maxNum);
  const result = getGcd(randomNum1, randomNum2).toString();
  const question = `Question: ${randomNum1} ${randomNum2}`;
  return [question, result];
};

const runBrainGcd = () => {
  runGameEngine(gameDescription, gameData);
};

export default runBrainGcd;
