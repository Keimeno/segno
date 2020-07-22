import { test } from '../index.ts';

Deno.test('should validate a string that is in another string or array', () => {
  test({
    validator: 'isIn',
    args: ['foobar'],
    valid: ['foo', 'bar', 'foobar', ''],
    invalid: ['foobarbaz', 'barfoo'],
  });

  test({
    validator: 'isIn',
    args: [['foo', 'bar']],
    valid: ['foo', 'bar'],
    invalid: ['foobar', 'barfoo', ''],
  });

  test({
    validator: 'isIn',
    args: [['1', '2', '3']],
    valid: ['1', '2', '3'],
    invalid: ['4', ''],
  });

  test({
    validator: 'isIn',
    args: [['1', '2', '3', { foo: 'bar' }, () => 5, { toString: 'test' }]],
    valid: ['1', '2', '3', ''],
    invalid: ['4'],
  });

  test({ validator: 'isIn', invalid: ['foo', ''] });
});

Deno.test('should validate a string that is in another object', () => {
  test({
    validator: 'isIn',
    args: [{ foo: 1, bar: 2, foobar: 3 }],
    valid: ['foo', 'bar', 'foobar'],
    invalid: ['foobarbaz', 'barfoo', ''],
  });

  test({
    validator: 'isIn',
    args: [{ 1: 3, 2: 0, 3: 1 }],
    valid: ['1', '2', '3'],
    invalid: ['4', ''],
  });
});
