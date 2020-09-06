export default (startNumber, stepNumber, length) => {
  const progression = [];
  let number = startNumber;
  for (let i = 0; i < length; i += 1) {
    progression.push(number);
    number += stepNumber;
  }
  return progression;
};
