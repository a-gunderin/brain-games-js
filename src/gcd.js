const getGcd = (num1, num2) => {
  const sortedNums = [num1, num2].sort((a, b) => a - b);
  let result = 1;
  for (let i = 2; i <= sortedNums[0]; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return result;
};

export default getGcd;
