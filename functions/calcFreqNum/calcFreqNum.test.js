import { calcFreqNum } from './calcFreqNum.js';

const dataForTests = {
  test1: {
    nums: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3],
    expectedCount: 5,
  },
  test2: {
    nums: [3, -1, -1, 3, 2, 3, -1, 3, -1, 3, 4, 9, 3],
    expectedCount: 6,
  },
  test3: {
    nums: [4, -2, -1, 4, 3, -1, 2, 4, 9, 3],
    expectedCount: 3,
  },
  test4: {
    nums: [],
    expectedCount: 0,
  },
};

describe('calcFreqNum:', () => {
  it('Unit test 1', () => {
    const { nums, expectedCount } = dataForTests.test1;
    const count = calcFreqNum(nums);
    expect(count).toEqual(expectedCount);
  });

  it('Unit test 2', () => {
    const { nums, expectedCount } = dataForTests.test2;
    const count = calcFreqNum(nums);
    expect(count).toEqual(expectedCount);
  });

  it('Unit test 3', () => {
    const { nums, expectedCount } = dataForTests.test3;
    const count = calcFreqNum(nums);
    expect(count).toEqual(expectedCount);
  });

  it('Unit test 4', () => {
    const { nums, expectedCount } = dataForTests.test4;
    const count = calcFreqNum(nums);
    expect(count).toEqual(expectedCount);
  });
});
