import getRandomNum from '../utils/randomNum.js';
import runGameEngine from '../index.js';

const settings = {
  minNum: 0,
  maxNum: 100,
};
const operators = ['+', '-', '*'];
const gameDescription = 'What is the result of the expression?';

const gameData = () => {
  const randomNum1 = getRandomNum(settings.minNum, settings.maxNum);
  const randomNum2 = getRandomNum(settings.minNum, settings.maxNum);
  const randomOperator = operators[getRandomNum(0, operators.length - 1)];
  const question = `Question: ${randomNum1} ${randomOperator} ${randomNum2}`;
  const result = () => {
    switch (randomOperator) {
      case '+':
        return (randomNum1 + randomNum2).toString();
      case '-':
        return (randomNum1 - randomNum2).toString();
      default:
        return (randomNum1 * randomNum2).toString();
    }
  };
  return [question, result()];
};

const runBrainCalc = () => {
  runGameEngine(gameDescription, gameData);
};

export default runBrainCalc;
