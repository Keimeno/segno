import { test } from '../index.ts';

Deno.test('should validate ascii strings', () => {
  test({
    validator: 'isAscii',
    valid: ['foobar', '0987654321', 'test@example.com', '1234abcDEF'],
    invalid: ['ｆｏｏbar', 'ｘｙｚ０９８', '１２３456', 'ｶﾀｶﾅ'],
  });
});
