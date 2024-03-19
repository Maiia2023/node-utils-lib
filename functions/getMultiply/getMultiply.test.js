import { getMultiply } from './getMultiply.js';

describe('getMultiply:', () => {
  it('Unit test 1', () => { expect(getMultiply('5', 5)).toEqual(undefined); });
  it('Unit test 2', () => { expect(getMultiply(5, true)).toEqual(undefined); });
  it('Unit test 3', () => { expect(getMultiply(-5, 5)).toEqual(undefined); });
  it('Unit test 4', () => { expect(getMultiply(0, 5)).toEqual(undefined); });
  it('Unit test 5', () => { expect(getMultiply(5, 0)).toEqual(undefined); });
  it('Unit test 6', () => { expect(getMultiply(5, 5)).toEqual(25); });
});
