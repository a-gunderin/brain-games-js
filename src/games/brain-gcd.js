import getRandomNum from '../utils/randomNum.js';
import runGameEngine from '../index.js';

const settings = {
  minNum: 0,
  maxNum: 100,
};
const gameDescription = 'Find the greatest common divisor of given numbers.';
const getGcd = (num1, num2) => {
  let result = 1;
  for (let i = 2; i <= Math.min(num1, num2); i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return result;
};

const getGameData = () => {
  const questionNum1 = getRandomNum(settings.minNum, settings.maxNum);
  const questionNum2 = getRandomNum(settings.minNum, settings.maxNum);
  const correctAnswer = getGcd(questionNum1, questionNum2).toString();
  const question = `${questionNum1} ${questionNum2}`;
  return [question, correctAnswer];
};

const runBrainGcd = () => {
  runGameEngine(gameDescription, getGameData);
};

export default runBrainGcd;
