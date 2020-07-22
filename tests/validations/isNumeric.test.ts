import { test } from '../index.ts';

Deno.test('should validate numeric strings', () => {
  test({
    validator: 'isNumeric',
    valid: ['123', '00123', '-00123', '0', '-0', '+123', '123.123', '+000000'],
    invalid: [' ', '', '.'],
  });
});

Deno.test('should validate numeric strings without symbols', () => {
  test({
    validator: 'isNumeric',
    args: [
      {
        noSymbols: true,
      },
    ],
    valid: ['123', '00123', '0'],
    invalid: ['-0', '+000000', '', '+123', '123.123', '-00123', ' ', '.'],
  });
});

Deno.test('should validate numeric strings with locale', () => {
  test({
    validator: 'isNumeric',
    args: [
      {
        locale: 'fr-FR',
      },
    ],
    valid: ['123', '00123', '-00123', '0', '-0', '+123', '123,123', '+000000'],
    invalid: [' ', '', ','],
  });
});
