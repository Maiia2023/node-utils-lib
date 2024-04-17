/**
 * @function camelCase
 * @param {string}
 * @returns {string}
 */

export const camelCase = (str) => {
  const words = str.split(/[-_]/);
  let camelCaseStr = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (i === 0) {
      camelCaseStr += word;
    } else {
      camelCaseStr += word.charAt(0).toUpperCase() + word.slice(1);
    }
  }

  return camelCaseStr;
};
