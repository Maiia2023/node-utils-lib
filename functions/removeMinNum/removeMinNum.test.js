import { removeMinNum } from './removeMinNum.js';

const dataForTests = {
  test1: {
    values: [1, 2, 3, 5, 6, 7, 2],
    expectedValue: [2, 3, 5, 6, 7, 2],
  },
  test2: {
    values: [1, 10, 8, 11, 1, 1, 1],
    expectedValue: [10, 8, 11],
  },
  test3: {
    values: [],
    expectedValue: [],
  },
};

describe('dataForTests:', () => {
  it('Unit test1', () => {
    const { values, expectedValue } = dataForTests.test1;
    expect(removeMinNum(values)).toEqual(expectedValue);
  });
  it('Unit test2', () => {
    const { values, expectedValue } = dataForTests.test2;
    expect(removeMinNum(values)).toEqual(expectedValue);
  });
  it('Unit test3', () => {
    const { values, expectedValue } = dataForTests.test3;
    expect(removeMinNum(values)).toEqual(expectedValue);
  });
});
