import { test } from '../index.ts';

Deno.test('should validate null strings', () => {
  test({
    validator: 'isEmpty',
    valid: [''],
    invalid: [' ', 'foo', '3'],
  });

  test({
    validator: 'isEmpty',
    args: [{ ignoreWhitespace: false }],
    valid: [''],
    invalid: [' ', 'foo', '3'],
  });

  test({
    validator: 'isEmpty',
    args: [{ ignoreWhitespace: true }],
    valid: ['', ' '],
    invalid: ['foo', '3'],
  });
});
