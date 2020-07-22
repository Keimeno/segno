import { test } from '../index.ts';

Deno.test('should validate taxID', () => {
  test({
    validator: 'isTaxID',
    valid: ['01-1234567', '01 1234567', '011234567'],
    invalid: ['0-11234567', '01#1234567', '01  1234567', '01 1234 567'],
  });
});
