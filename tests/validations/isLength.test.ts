import { test } from '../index.ts';

Deno.test('should validate strings by length', () => {
  test({
    validator: 'isLength',
    args: [{ min: 2 }],
    valid: ['abc', 'de', 'abcd'],
    invalid: ['', 'a'],
  });

  test({
    validator: 'isLength',
    args: [{ min: 2, max: 3 }],
    valid: ['abc', 'de'],
    invalid: ['', 'a', 'abcd'],
  });

  test({
    validator: 'isLength',
    args: [{ min: 2, max: 3 }],
    valid: ['干𩸽', '𠮷野家'],
    invalid: ['', '𠀋', '千竈通り'],
  });

  test({
    validator: 'isLength',
    args: [{ max: 3 }],
    valid: ['abc', 'de', 'a', ''],
    invalid: ['abcd'],
  });

  test({
    validator: 'isLength',
    args: [{ max: 0 }],
    valid: [''],
    invalid: ['a', 'ab'],
  });

  test({
    validator: 'isLength',
    valid: ['a', '', 'asds'],
  });
});
