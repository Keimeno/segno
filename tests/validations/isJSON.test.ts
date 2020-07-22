import { test } from '../index.ts';

Deno.test('should validate JSON', () => {
  test({
    validator: 'isJSON',
    valid: ['{ "key": "value" }', '{}'],
    invalid: [
      '{ key: "value" }',
      "{ 'key': 'value' }",
      'null',
      '1234',
      '"nope"',
    ],
  });
});

Deno.test('should validate JSON with primitives', () => {
  test({
    validator: 'isJSON',
    args: [{ allowPrimitives: true }],
    valid: ['{ "key": "value" }', '{}', 'null', 'false', 'true'],
    invalid: [
      '{ key: "value" }',
      "{ 'key': 'value' }",
      '{ "key": value }',
      '1234',
      '"nope"',
    ],
  });
});
