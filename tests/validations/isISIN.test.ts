import { test } from '../index.ts';

Deno.test('should validate ISINs', () => {
  test({
    validator: 'isISIN',
    valid: [
      'AU0000XVGZA3',
      'DE000BAY0017',
      'BE0003796134',
      'SG1G55870362',
      'GB0001411924',
      'DE000WCH8881',
      'PLLWBGD00016',
    ],
    invalid: ['DE000BAY0018', 'PLLWBGD00019', 'foo', '5398228707871528'],
  });
});
