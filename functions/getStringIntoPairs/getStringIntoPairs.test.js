import { getStringIntoPairs } from './getStringIntoPairs.js';

describe('getStringIntoPairs:', () => {
  it('Unit test 1', () => { expect(getStringIntoPairs('abc')).toEqual(['ab', 'c_']); });
  it('Unit test 2', () => { expect(getStringIntoPairs('abcdef')).toEqual(['ab', 'cd', 'ef']); });
});
