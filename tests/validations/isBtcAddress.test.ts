import { test } from '../index.ts';

Deno.test('should validate Bitcoin addresses', () => {
  test({
    validator: 'isBtcAddress',
    valid: [
      '1MUz4VMYui5qY1mxUiG8BQ1Luv6tqkvaiL',
      '3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy',
      'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
    ],
    invalid: [
      '4J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy',
      '0x56F0B8A998425c53c75C4A303D4eF987533c5597',
      'pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g',
    ],
  });
});
