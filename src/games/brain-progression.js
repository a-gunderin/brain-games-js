import getRandomNum from '../utils/randomNum.js';
import getProgression from '../utils/progression.js';
import runGameEngine from '../index.js';

const settings = {
  minNum: 0,
  maxNum: 100,
  lengthOfProgression: 10,
};
const gameDescription = 'What number is missing in the progression?';

const gameData = () => {
  const startNumber = getRandomNum(settings.minNum, settings.maxNum);
  const stepNumber = getRandomNum(settings.minNum, settings.maxNum);
  const progression = getProgression(
    startNumber,
    stepNumber,
    settings.lengthOfProgression,
  );
  const secretNumber = getRandomNum(0, settings.lengthOfProgression);
  const secretProgression = [...progression];
  secretProgression[secretNumber] = '..';
  const question = `Question: ${secretProgression.join(' ')}`;
  const result = progression[secretNumber].toString();
  return [question, result];
};

const runBrainProgression = () => {
  runGameEngine(gameDescription, gameData);
};

export default runBrainProgression;
