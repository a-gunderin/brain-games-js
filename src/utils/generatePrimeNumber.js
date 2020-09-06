import isPrimeNumber from './isPrimeNumber.js';

export default (upperLimit) => {
  let primeNumber = 2;
  for (let i = upperLimit; ; i -= 1) {
    if (isPrimeNumber(i)) {
      primeNumber = i;
      return primeNumber;
    }
  }
};
