/**
 * @function removeMinNum
 * @param {number[]} numbers
 * @return {number[]}
 */

export const removeMinNum = (numbers) => {
  if (numbers.length === 0) return [];
  const min = Math.min(...numbers);
  return numbers.filter((number) => number !== min);
};
