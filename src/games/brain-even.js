import getRandomNum from '../utils/randomNum.js';
import runGameEngine from '../index.js';

const settings = {
  minNum: 0,
  maxNum: 100,
};
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const numIsEven = (num) => num % 2 === 0;

const getGameData = () => {
  const questionNum = getRandomNum(settings.minNum, settings.maxNum);
  const questionNumIsEven = numIsEven(questionNum);
  const correctAnswer = questionNumIsEven ? 'yes' : 'no';
  return [questionNum, correctAnswer];
};

const runBrainEven = () => {
  runGameEngine(gameDescription, getGameData);
};

export default runBrainEven;
