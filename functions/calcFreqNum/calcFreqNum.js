/**
 * @function calcFreqNum
 * @param {number[]} nums
 * @returns {number}
 */

export const calcFreqNum = (nums) => {
  if (!nums.length) return 0;
  let count = 0;

  for (const num of nums) {
    const filteredNums = nums.filter((filterNum) => num === filterNum);
    if (filteredNums.length > count) count = filteredNums.length;
  };

  return count;
};

