/**
 * @typedef {import('./types').Value} Value
 */

/**
 * @function checkIndexOfOddWord
 * @param {Value[]} values
 * @returns {boolean}
 */

export const checkIndexOfOddWord = (values) => {
  const oddIndex = values.findIndex((value) => Boolean(value.length % 2));
  return values.some((value) => value === oddIndex);
};
