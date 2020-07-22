import { test } from '../index.ts';

Deno.test('should validate MAC addresses', () => {
  test({
    validator: 'isMACAddress',
    valid: [
      'ab:ab:ab:ab:ab:ab',
      'FF:FF:FF:FF:FF:FF',
      '01:02:03:04:05:ab',
      '01:AB:03:04:05:06',
      'A9 C5 D4 9F EB D3',
      '01 02 03 04 05 ab',
      '01-02-03-04-05-ab',
      '0102.0304.05ab',
    ],
    invalid: [
      'abc',
      '01:02:03:04:05',
      '01:02:03:04::ab',
      '1:2:3:4:5:6',
      'AB:CD:EF:GH:01:02',
      'A9C5 D4 9F EB D3',
      '01-02 03:04 05 ab',
      '0102.03:04.05ab',
    ],
  });
});

Deno.test('should validate MAC addresses without colons', () => {
  test({
    validator: 'isMACAddress',
    args: [
      {
        noColons: true,
      },
    ],
    valid: ['abababababab', 'FFFFFFFFFFFF', '0102030405ab', '01AB03040506'],
    invalid: [
      'abc',
      '01:02:03:04:05',
      '01:02:03:04::ab',
      '1:2:3:4:5:6',
      'AB:CD:EF:GH:01:02',
      'ab:ab:ab:ab:ab:ab',
      'FF:FF:FF:FF:FF:FF',
      '01:02:03:04:05:ab',
      '01:AB:03:04:05:06',
      '0102030405',
      '01020304ab',
      '123456',
      'ABCDEFGH0102',
    ],
  });
});
