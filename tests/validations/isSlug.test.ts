import { test } from '../index.ts';

Deno.test('should validate slug', () => {
  test({
    validator: 'isSlug',
    args: ['cs_67CZ'],
    valid: ['cs-cz', 'cscz'],
    invalid: [
      'not-----------slug',
      '@#_$@',
      '-not-slug',
      'not-slug-',
      '_not-slug',
      'not-slug_',
      'not slug',
    ],
  });
});
