import { test } from '../index.ts';

Deno.test('should validate strings by byte length and min 2', () => {
  test({
    validator: 'isByteLength',
    args: [{ min: 2 }],
    valid: ['abc', 'de', 'abcd', 'ｇｍａｉｌ'],
    invalid: ['', 'a'],
  });
});

Deno.test('should validate strings by byte length and min 2, max 3', () => {
  test({
    validator: 'isByteLength',
    args: [{ min: 2, max: 3 }],
    valid: ['abc', 'de', 'ｇ'],
    invalid: ['', 'a', 'abcd', 'ｇｍ'],
  });
});

Deno.test('should validate strings by byte length and max 3', () => {
  test({
    validator: 'isByteLength',
    args: [{ max: 3 }],
    valid: ['abc', 'de', 'ｇ', 'a', ''],
    invalid: ['abcd', 'ｇｍ'],
  });
});

Deno.test('should validate strings by byte length and max 0', () => {
  test({
    validator: 'isByteLength',
    args: [{ max: 0 }],
    valid: [''],
    invalid: ['ｇ', 'a'],
  });
});
