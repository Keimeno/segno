import { test } from '../index.ts';

Deno.test('should validate variable-width strings', () => {
  test({
    validator: 'isVariableWidth',
    valid: [
      'ひらがなカタカナ漢字ABCDE',
      '３ー０123',
      'Ｆｶﾀｶﾅﾞﾬ',
      'Good＝Parts',
    ],
    invalid: [
      'abc',
      'abc123',
      '!"#$%&()<>/+=-_? ~^|.,@`{}[]',
      'ひらがな・カタカナ、．漢字',
      '１２３４５６',
      'ｶﾀｶﾅﾞﾬ',
    ],
  });
});
