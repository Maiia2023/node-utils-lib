/** @type {*} */
const CONVERTER = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};

/**
 * @function convertRomanToArabian
 * @param {string} romanNum
 * @returns {number}
 */

export const convertRomanToArabian = (romanNum) => {
  let arabianNum = 0;
  for (let i = 0; i < romanNum.length; ++i) {
    CONVERTER[ romanNum[ i ]] < CONVERTER[romanNum[ i + 1 ] ]
      ? arabianNum -= CONVERTER[romanNum[i]]
      : arabianNum += CONVERTER[romanNum[i]];
  };
  return arabianNum;
};
