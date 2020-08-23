import isPrimeNumber from './isPrimeNumber.js';

export default (upperlimit) => {
  let primeNumber = 2;
  for (let i = upperlimit; ; i -= 1) {
    if (isPrimeNumber(i)) {
      primeNumber = i;
      return primeNumber;
    }
  }
};
