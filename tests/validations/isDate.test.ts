import { test } from '../index.ts';

Deno.test('should validate date', () => {
  test({
    validator: 'isDate',
    valid: [
      new Date(),
      new Date(2014, 2, 15),
      new Date('2014-03-15'),
      '2020/02/29',
    ],
    invalid: [
      '',
      '15072002',
      null,
      undefined,
      { year: 2002, month: 7, day: 15 },
      42,
      {
        toString() {
          return '[object Date]';
        },
      }, // faking
      '2020-02-30', // invalid date
      '2019-02-29', // non-leap year
      '2020-04-31', // invalid date
    ],
  });

  test({
    validator: 'isDate',
    args: ['DD/MM/YYYY'],
    valid: ['15-07-2002', '15/07/2002'],
    invalid: ['15/7/2002', '15-7-2002', '15/7/02', '15-7-02'],
  });

  test({
    validator: 'isDate',
    args: ['DD/MM/YY'],
    valid: ['15-07-02', '15/07/02'],
    invalid: ['15/7/2002', '15-7-2002'],
  });

  test({
    validator: 'isDate',
    args: ['D/M/YY'],
    valid: ['5-7-02', '5/7/02'],
    invalid: ['5/07/02', '15/7/02', '15-7-02'],
  });
});
