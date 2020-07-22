import { test } from '../index.ts';

Deno.test('should validate ports', () => {
  test({
    validator: 'isPort',
    valid: ['0', '22', '80', '443', '3000', '8080', '65535'],
    invalid: ['', '-1', '65536'],
  });
});
