import { test } from '../index.ts';

Deno.test('should validate whitelisted characters', () => {
  test({
    validator: 'isWhitelisted',
    args: ['abcdefghijklmnopqrstuvwxyz-'],
    valid: ['foo', 'foobar', 'baz-foo'],
    invalid: ['foo bar', 'fo.bar', 'türkçe'],
  });
});
