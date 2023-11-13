import { convertRomanToArabian } from './convertRomanToArabian.js';

const dataForTests = {
  test1: {
    romanNum: 'MDCCC',
    expectedNum: 1800,
  },
  test2: {
    romanNum: 'MMXV',
    expectedNum: 2015,
  },
  test3: {
    romanNum: 'MCMLXXXVII',
    expectedNum: 1987,
  },
};

  describe('convertRomanToArabian:', () => {
    it('Unit test1', () => {
      const { romanNum, expectedNum } = dataForTests.test1;
      const arabianNum = convertRomanToArabian(romanNum);
      expect(arabianNum).toEqual(expectedNum);
    });

    it('Unit test2', () => {
      const { romanNum, expectedNum } = dataForTests.test2;
      const arabianNum = convertRomanToArabian(romanNum);
      expect(arabianNum).toEqual(expectedNum);
    });

    it('Unit test2', () => {
      const { romanNum, expectedNum } = dataForTests.test3;
      const arabianNum = convertRomanToArabian(romanNum);
      expect(arabianNum).toEqual(expectedNum);
    });
  }); 
  