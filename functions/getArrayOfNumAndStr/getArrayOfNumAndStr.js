/**
 * @function getArrayOfNumAndStr
 * @param {string[]} values
 * @returns {{[number, string]}}
 */

export const getArrayOfNumAndStr = (values) => {
  let count = 0;
  let sum = 0;
  let letters = '';

  for (const value of values) {
    const numRegex = /^[0-9]$/g;
    const isNum = numRegex.test(value);

    if (isNum) {
      count += 1;
      sum += Number.parseInt(value, 10);
    } else { letters += value; }
  }

  const average = sum / count;

  return [average, letters];
};
