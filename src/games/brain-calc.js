import getRandomNum from '../utils/randomNum.js';
import runGameEngine from '../index.js';

const settings = {
  minNum: 0,
  maxNum: 100,
};
const operators = ['+', '-', '*'];
const gameDescription = 'What is the result of the expression?';
const calcNums = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

const getGameData = () => {
  const questionNum1 = getRandomNum(settings.minNum, settings.maxNum);
  const questionNum2 = getRandomNum(settings.minNum, settings.maxNum);
  const questionOperator = operators[getRandomNum(0, operators.length - 1)];
  const question = `${questionNum1} ${questionOperator} ${questionNum2}`;
  const correctAnswer = calcNums(questionNum1, questionNum2, questionOperator).toString();
  return [question, correctAnswer];
};

const runBrainCalc = () => {
  runGameEngine(gameDescription, getGameData);
};

export default runBrainCalc;
