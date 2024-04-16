import { getSpliting } from './getSpliting.js';

describe('getSpliting:', () => {
  it('Unit test 1', () => { expect(getSpliting('5', 5)).toEqual(undefined); });
  it('Unit test 2', () => { expect(getSpliting(5, true)).toEqual(undefined); });
  it('Unit test 3', () => { expect(getSpliting(-5, 5)).toEqual(undefined); });
  it('Unit test 4', () => { expect(getSpliting(5, -5)).toEqual(undefined); });
  it('Unit test 5', () => { expect(getSpliting(5, 0)).toEqual(undefined); });
  it('Unit test 6', () => { expect(getSpliting(0, 5)).toEqual(undefined); });
  it('Unit test 7', () => { expect(getSpliting(5, 3)).toEqual(undefined); });
  it('Unit test 8', () => { expect(getSpliting(5, 5)).toEqual(1); });
  it('Unit test 9', () => { expect(getSpliting(15, 5)).toEqual(3); });
});
