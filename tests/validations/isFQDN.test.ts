import { test } from '../index.ts';

Deno.test('should validate FQDN', () => {
  test({
    validator: 'isFQDN',
    valid: [
      'domain.com',
      'dom.plato',
      'a.domain.co',
      'foo--bar.com',
      'xn--froschgrn-x9a.com',
      'rebecca.blackfriday',
    ],
    invalid: [
      'abc',
      '256.0.0.0',
      '_.com',
      '*.some.com',
      's!ome.com',
      'domain.com/',
      '/more.com',
      'domain.com�',
      'domain.com©',
    ],
  });
});

Deno.test('should validate FQDN with trailing dot option', () => {
  test({
    validator: 'isFQDN',
    args: [{ allowTrailingDot: true }],
    valid: ['example.com.'],
  });
});
