/**
 * @function calcSpins
 * @param {string[]} directions
 * @return {number}
 */

export const calcSpins = (directions) => {

    const leftCount = directions.filter((direction) => direction === 'left').length;
    const rightCount = directions.filter((direction) => direction === 'right').length;
    const oneDirSpinDiff = Math.abs(leftCount - rightCount);

    return Math.floor(oneDirSpinDiff / 4);
};
