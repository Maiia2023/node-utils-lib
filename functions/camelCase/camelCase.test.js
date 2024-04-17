import { camelCase } from './camelCase.js';

const dataForTests = {
  test1: {
    value: 'the-stealth-warrior',
    expectedValue: 'theStealthWarrior',
  },
  test2: {
    value: 'The_Stealth-Warrior',
    expectedValue: 'TheStealthWarrior',
  },
  test3: {
    value: 'The_Stealth_Warrior',
    expectedValue: 'TheStealthWarrior',
  },
};

describe('camelCase:', () => {
  it('Unit test1', () => {
    const { value, expectedValue } = dataForTests.test1;
    expect(camelCase(value)).toEqual(expectedValue);
  });

  it('Unit test2', () => {
    const { value, expectedValue } = dataForTests.test2;
    expect(camelCase(value)).toEqual(expectedValue);
  });

  it('Unit test3', () => {
    const { value, expectedValue } = dataForTests.test3;
    expect(camelCase(value)).toEqual(expectedValue);
  });
});
