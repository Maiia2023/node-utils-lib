import { getArrayOfNumAndStr } from './getArrayOfNumAndStr.js';

const dataForTests = {
  test1: {
    values: ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0'],
    expectedValues: [3.6, 'udiwstagwo'],
  },
  test2: {
    values: ['i', '5', 'y', '6', 'i', 't', 't', '7', 'c', 'c', '4', '3', 's', 'k', '9', 'a', '1', '2', '1', '5'],
    expectedValues: [4.3, 'iyittccska'],
  },
};

describe('getArrayOfNumAndStr:', () => {
  it('Unit test 1', () => {
    const { values, expectedValues } = dataForTests.test1;
    expect(getArrayOfNumAndStr(values)).toEqual(expectedValues);
  });

  it('Unit test 2', () => {
    const { values, expectedValues } = dataForTests.test2;
    expect(getArrayOfNumAndStr(values)).toEqual(expectedValues);
  });
});
