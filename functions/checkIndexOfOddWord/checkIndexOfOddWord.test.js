import { checkIndexOfOddWord } from './checkIndexOfOddWord.js';

const dataForTests = {
  test1: {
    values: ['even', 4, 'even', 7, 'even', 55, 'even', 6, 'even', 10, 'odd', 3, 'even'],
    expectedValue: true,
  },
  test2: {
    values: ['even', 4, 'even', 7, 'even', 55, 'even', 6, 'even', 9, 'odd', 3, 'even'],
    expectedValue: false,
  },
  test3: {
    values: ['even', 10, 'odd', 2, 'even'],
    expectedValue: true,
  },
};

describe('checkIndexOfOddWord:', () => {
  it('Unit test 1', () => {
    const { values, expectedValue } = dataForTests.test1;
    expect(checkIndexOfOddWord(values)).toEqual(expectedValue);
  });

  it('Unit test 2', () => {
    const { values, expectedValue } = dataForTests.test2;
    expect(checkIndexOfOddWord(values)).toEqual(expectedValue);
  });

  it('Unit test 3', () => {
    const { values, expectedValue } = dataForTests.test3;
    expect(checkIndexOfOddWord(values)).toEqual(expectedValue);
  });
});
