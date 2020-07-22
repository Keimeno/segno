import { test } from '../index.ts';

Deno.test('should validate half-width strings', () => {
  test({
    validator: 'isHalfWidth',
    valid: [
      '!"#$%&()<>/+=-_? ~^|.,@`{}[]',
      'l-btn_02--active',
      'abc123い',
      'ｶﾀｶﾅﾞﾬ￩',
    ],
    invalid: ['あいうえお', '００１１'],
  });
});
