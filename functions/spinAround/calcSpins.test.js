import { calcSpins } from './calcSpins.js';

const dataForTests = {
  test1: {
    directions: ['right', 'right', 'right', 'right', 'left', 'right'],
    expectedCount: 1,
  },
  test2: {
    directions: ['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right'],
    expectedCount: 2,
  },
  test3: {
    directions: ['left', 'right', 'left', 'right'],
    expectedCount: 0,
  },
};

describe('calcSpins:', () => {
  it ('Unit test 1', () => {
    const { directions, expectedCount } = dataForTests.test1;
    expect(calcSpins(directions)).toEqual(expectedCount);
  });
  it ('Unit test 2', () => {
    const { directions, expectedCount } = dataForTests.test2;
    expect(calcSpins(directions)).toEqual(expectedCount);
  });
  it ('Unit test 3', () => {
    const { directions, expectedCount } = dataForTests.test3;
    expect(calcSpins(directions)).toEqual(expectedCount);
  });
});
