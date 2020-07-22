import { test } from '../index.ts';

Deno.test('should validate EANs', () => {
  test({
    validator: 'isEAN',
    valid: [
      '9421023610112',
      '1234567890128',
      '4012345678901',
      '9771234567003',
      '9783161484100',
      '73513537',
    ],
    invalid: ['5901234123451', '079777681629', '0705632085948'],
  });
});
