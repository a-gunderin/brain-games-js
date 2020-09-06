import getRandomNum from '../utils/randomNum.js';
import runGameEngine from '../index.js';

const settings = {
  minNum: 0,
  maxNum: 100,
};
const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameData = () => {
  const randomNum = getRandomNum(settings.minNum, settings.maxNum);
  const randomNumIsEven = (randomNum % 2) === 0;
  const question = `Question: ${randomNum}`;
  const result = randomNumIsEven ? 'yes' : 'no';
  return [question, result];
};

const runBrainEven = () => {
  runGameEngine(gameDescription, gameData);
};

export default runBrainEven;
