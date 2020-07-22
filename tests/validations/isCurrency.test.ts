import { test } from '../index.ts';

Deno.test('should validate currency', () => {
  // -$##,###.## (en-US, en-CA, en-AU, en-NZ, en-HK)
  test({
    validator: 'isCurrency',
    valid: [
      '-$10,123.45',
      '$10,123.45',
      '$10123.45',
      '10,123.45',
      '10123.45',
      '10,123',
      '1,123,456',
      '1123456',
      '1.39',
      '.03',
      '0.10',
      '$0.10',
      '-$0.01',
      '-$.99',
      '$100,234,567.89',
      '$10,123',
      '10,123',
      '-10123',
    ],
    invalid: [
      '1.234',
      '$1.1',
      '$ 32.50',
      '500$',
      '.0001',
      '$.001',
      '$0.001',
      '12,34.56',
      '123456,123,123456',
      '123,4',
      ',123',
      '$-,123',
      '$',
      '.',
      ',',
      '00',
      '$-',
      '$-,.',
      '-',
      '-$',
      '',
      '- $',
    ],
  });

  // -$##,###.## (en-US, en-CA, en-AU, en-NZ, en-HK)
  test({
    validator: 'isCurrency',
    args: [
      {
        allowDecimal: false,
      },
    ],
    valid: [
      '-$10,123',
      '$10,123',
      '$10123',
      '10,123',
      '10123',
      '10,123',
      '1,123,456',
      '1123456',
      '1',
      '0',
      '$0',
      '-$0',
      '$100,234,567',
      '$10,123',
      '10,123',
      '-10123',
    ],
    invalid: [
      '-$10,123.45',
      '$10,123.45',
      '$10123.45',
      '10,123.45',
      '10123.45',
      '1.39',
      '.03',
      '0.10',
      '$0.10',
      '-$0.01',
      '-$.99',
      '$100,234,567.89',
      '1.234',
      '$1.1',
      '$ 32.50',
      '.0001',
      '$.001',
      '$0.001',
      '12,34.56',
      '123,4',
      ',123',
      '$-,123',
      '$',
      '.',
      ',',
      '00',
      '$-',
      '$-,.',
      '-',
      '-$',
      '',
      '- $',
    ],
  });

  // -$##,###.## (en-US, en-CA, en-AU, en-NZ, en-HK)
  test({
    validator: 'isCurrency',
    args: [
      {
        requireDecimal: true,
      },
    ],
    valid: [
      '-$10,123.45',
      '$10,123.45',
      '$10123.45',
      '10,123.45',
      '10123.45',
      '10,123.00',
      '1.39',
      '.03',
      '0.10',
      '$0.10',
      '-$0.01',
      '-$.99',
      '$100,234,567.89',
    ],
    invalid: [
      '$10,123',
      '10,123',
      '-10123',
      '1,123,456',
      '1123456',
      '1.234',
      '$1.1',
      '$ 32.50',
      '500$',
      '.0001',
      '$.001',
      '$0.001',
      '12,34.56',
      '123456,123,123456',
      '123,4',
      ',123',
      '$-,123',
      '$',
      '.',
      ',',
      '00',
      '$-',
      '$-,.',
      '-',
      '-$',
      '',
      '- $',
    ],
  });

  // -$##,###.## (en-US, en-CA, en-AU, en-NZ, en-HK)
  test({
    validator: 'isCurrency',
    args: [
      {
        digitsAfterDecimal: [1, 3],
      },
    ],
    valid: [
      '-$10,123.4',
      '$10,123.454',
      '$10123.452',
      '10,123.453',
      '10123.450',
      '10,123',
      '1,123,456',
      '1123456',
      '1.3',
      '.030',
      '0.100',
      '$0.1',
      '-$0.0',
      '-$.9',
      '$100,234,567.893',
      '$10,123',
      '10,123.123',
      '-10123.1',
    ],
    invalid: [
      '1.23',
      '$1.13322',
      '$ 32.50',
      '500$',
      '.0001',
      '$.01',
      '$0.01',
      '12,34.56',
      '123456,123,123456',
      '123,4',
      ',123',
      '$-,123',
      '$',
      '.',
      ',',
      '00',
      '$-',
      '$-,.',
      '-',
      '-$',
      '',
      '- $',
    ],
  });

  // -$##,###.## with $ required (en-US, en-CA, en-AU, en-NZ, en-HK)
  test({
    validator: 'isCurrency',
    args: [
      {
        requireSymbol: true,
      },
    ],
    valid: [
      '-$10,123.45',
      '$10,123.45',
      '$10123.45',
      '$10,123.45',
      '$10,123',
      '$1,123,456',
      '$1123456',
      '$1.39',
      '$.03',
      '$0.10',
      '$0.10',
      '-$0.01',
      '-$.99',
      '$100,234,567.89',
      '$10,123',
      '-$10123',
    ],
    invalid: [
      '1.234',
      '$1.234',
      '1.1',
      '$1.1',
      '$ 32.50',
      ' 32.50',
      '500',
      '10,123,456',
      '.0001',
      '$.001',
      '$0.001',
      '1,234.56',
      '123456,123,123456',
      '$123456,123,123456',
      '123.4',
      '$123.4',
      ',123',
      '$,123',
      '$-,123',
      '$',
      '.',
      '$.',
      ',',
      '$,',
      '00',
      '$00',
      '$-',
      '$-,.',
      '-',
      '-$',
      '',
      '$ ',
      '- $',
    ],
  });

  // ¥-##,###.## (zh-CN)
  test({
    validator: 'isCurrency',
    args: [
      {
        symbol: '¥',
        negativeSignBeforeDigits: true,
      },
    ],
    valid: [
      '123,456.78',
      '-123,456.78',
      '¥6,954,231',
      '¥-6,954,231',
      '¥10.03',
      '¥-10.03',
      '10.03',
      '1.39',
      '.03',
      '0.10',
      '¥-10567.01',
      '¥0.01',
      '¥1,234,567.89',
      '¥10,123',
      '¥-10,123',
      '¥-10,123.45',
      '10,123',
      '10123',
      '¥-100',
    ],
    invalid: [
      '1.234',
      '¥1.1',
      '5,00',
      '.0001',
      '¥.001',
      '¥0.001',
      '12,34.56',
      '123456,123,123456',
      '123 456',
      ',123',
      '¥-,123',
      '',
      ' ',
      '¥',
      '¥-',
      '¥-,.',
      '-',
      '- ¥',
      '-¥',
    ],
  });

  test({
    validator: 'isCurrency',
    args: [
      {
        negativeSignAfterDigits: true,
      },
    ],
    valid: [
      '$10,123.45-',
      '$10,123.45',
      '$10123.45',
      '10,123.45',
      '10123.45',
      '10,123',
      '1,123,456',
      '1123456',
      '1.39',
      '.03',
      '0.10',
      '$0.10',
      '$0.01-',
      '$.99-',
      '$100,234,567.89',
      '$10,123',
      '10,123',
      '10123-',
    ],
    invalid: [
      '-123',
      '1.234',
      '$1.1',
      '$ 32.50',
      '500$',
      '.0001',
      '$.001',
      '$0.001',
      '12,34.56',
      '123456,123,123456',
      '123,4',
      ',123',
      '$-,123',
      '$',
      '.',
      ',',
      '00',
      '$-',
      '$-,.',
      '-',
      '-$',
      '',
      '- $',
    ],
  });

  // ¥##,###.## with no negatives (zh-CN)
  test({
    validator: 'isCurrency',
    args: [
      {
        symbol: '¥',
        allowNegatives: false,
      },
    ],
    valid: [
      '123,456.78',
      '¥6,954,231',
      '¥10.03',
      '10.03',
      '1.39',
      '.03',
      '0.10',
      '¥0.01',
      '¥1,234,567.89',
      '¥10,123',
      '10,123',
      '10123',
      '¥100',
    ],
    invalid: [
      '1.234',
      '-123,456.78',
      '¥-6,954,231',
      '¥-10.03',
      '¥-10567.01',
      '¥1.1',
      '¥-10,123',
      '¥-10,123.45',
      '5,00',
      '¥-100',
      '.0001',
      '¥.001',
      '¥-.001',
      '¥0.001',
      '12,34.56',
      '123456,123,123456',
      '123 456',
      ',123',
      '¥-,123',
      '',
      ' ',
      '¥',
      '¥-',
      '¥-,.',
      '-',
      '- ¥',
      '-¥',
    ],
  });

  // R ## ###,## and R-10 123,25 (el-ZA)
  test({
    validator: 'isCurrency',
    args: [
      {
        symbol: 'R',
        negativeSignBeforeDigits: true,
        thousandsSeparator: ' ',
        decimalSeparator: ',',
        allowNegativeSignPlaceholder: true,
      },
    ],
    valid: [
      '123 456,78',
      '-10 123',
      'R-10 123',
      'R 6 954 231',
      'R10,03',
      '10,03',
      '1,39',
      ',03',
      '0,10',
      'R10567,01',
      'R0,01',
      'R1 234 567,89',
      'R10 123',
      'R 10 123',
      'R 10123',
      'R-10123',
      '10 123',
      '10123',
    ],
    invalid: [
      '1,234',
      'R -10123',
      'R- 10123',
      'R,1',
      ',0001',
      'R,001',
      'R0,001',
      '12 34,56',
      '123456 123 123456',
      ' 123',
      '- 123',
      '123 ',
      '',
      ' ',
      'R',
      'R- .1',
      'R-',
      '-',
      '-R 10123',
      'R00',
      'R -',
      '-R',
    ],
  });

  // -€ ##.###,## (it-IT)
  test({
    validator: 'isCurrency',
    args: [
      {
        symbol: '€',
        thousandsSeparator: '.',
        decimalSeparator: ',',
        allowSpaceAfterSymbol: true,
      },
    ],
    valid: [
      '123.456,78',
      '-123.456,78',
      '€6.954.231',
      '-€6.954.231',
      '€ 896.954.231',
      '-€ 896.954.231',
      '16.954.231',
      '-16.954.231',
      '€10,03',
      '-€10,03',
      '10,03',
      '-10,03',
      '-1,39',
      ',03',
      '0,10',
      '-€10567,01',
      '-€ 10567,01',
      '€ 0,01',
      '€1.234.567,89',
      '€10.123',
      '10.123',
      '-€10.123',
      '€ 10.123',
      '€10.123',
      '€ 10123',
      '10.123',
      '-10123',
    ],
    invalid: [
      '1,234',
      '€ 1,1',
      '50#,50',
      '123,@€ ',
      '€€500',
      ',0001',
      '€ ,001',
      '€0,001',
      '12.34,56',
      '123456.123.123456',
      '€123€',
      '',
      ' ',
      '€',
      ' €',
      '€ ',
      '€€',
      ' 123',
      '- 123',
      '.123',
      '-€.123',
      '123 ',
      '€-',
      '- €',
      '€ - ',
      '-',
      '- ',
      '-€',
    ],
  });

  // -##.###,## € (el-GR)
  test({
    validator: 'isCurrency',
    args: [
      {
        symbol: '€',
        thousandsSeparator: '.',
        symbolAfterDigits: true,
        decimalSeparator: ',',
        allowSpaceAfterDigits: true,
      },
    ],
    valid: [
      '123.456,78',
      '-123.456,78',
      '6.954.231 €',
      '-6.954.231 €',
      '896.954.231',
      '-896.954.231',
      '16.954.231',
      '-16.954.231',
      '10,03€',
      '-10,03€',
      '10,03',
      '-10,03',
      '1,39',
      ',03',
      '-,03',
      '-,03 €',
      '-,03€',
      '0,10',
      '10567,01€',
      '0,01 €',
      '1.234.567,89€',
      '10.123€',
      '10.123',
      '10.123€',
      '10.123 €',
      '10123 €',
      '10.123',
      '10123',
    ],
    invalid: [
      '1,234',
      '1,1 €',
      ',0001',
      ',001 €',
      '0,001€',
      '12.34,56',
      '123456.123.123456',
      '€123€',
      '',
      ' ',
      '€',
      ' €',
      '€ ',
      ' 123',
      '- 123',
      '.123',
      '-.123€',
      '-.123 €',
      '123 ',
      '-€',
      '- €',
      '-',
      '- ',
    ],
  });

  // kr. -##.###,## (da-DK)
  test({
    validator: 'isCurrency',
    args: [
      {
        symbol: 'kr.',
        negativeSignBeforeDigits: true,
        thousandsSeparator: '.',
        decimalSeparator: ',',
        allowSpaceAfterSymbol: true,
      },
    ],
    valid: [
      '123.456,78',
      '-10.123',
      'kr. -10.123',
      'kr.-10.123',
      'kr. 6.954.231',
      'kr.10,03',
      'kr. -10,03',
      '10,03',
      '1,39',
      ',03',
      '0,10',
      'kr. 10567,01',
      'kr. 0,01',
      'kr. 1.234.567,89',
      'kr. -1.234.567,89',
      '10.123',
      'kr. 10.123',
      'kr.10.123',
      '10123',
      '10.123',
      'kr.-10123',
    ],
    invalid: [
      '1,234',
      'kr.  -10123',
      'kr.,1',
      ',0001',
      'kr. ,001',
      'kr.0,001',
      '12.34,56',
      '123456.123.123456',
      '.123',
      'kr.-.123',
      'kr. -.123',
      '- 123',
      '123 ',
      '',
      ' ',
      'kr.',
      ' kr.',
      'kr. ',
      'kr.-',
      'kr. -',
      'kr. - ',
      ' - ',
      '-',
      '- kr.',
      '-kr.',
    ],
  });

  // kr. ##.###,## with no negatives (da-DK)
  test({
    validator: 'isCurrency',
    args: [
      {
        symbol: 'kr.',
        allowNegatives: false,
        negativeSignBeforeDigits: true,
        thousandsSeparator: '.',
        decimalSeparator: ',',
        allowSpaceAfterSymbol: true,
      },
    ],
    valid: [
      '123.456,78',
      '10.123',
      'kr. 10.123',
      'kr.10.123',
      'kr. 6.954.231',
      'kr.10,03',
      'kr. 10,03',
      '10,03',
      '1,39',
      ',03',
      '0,10',
      'kr. 10567,01',
      'kr. 0,01',
      'kr. 1.234.567,89',
      'kr.1.234.567,89',
      '10.123',
      'kr. 10.123',
      'kr.10.123',
      '10123',
      '10.123',
      'kr.10123',
    ],
    invalid: [
      '1,234',
      '-10.123',
      'kr. -10.123',
      'kr. -1.234.567,89',
      'kr.-10123',
      'kr.  -10123',
      'kr.-10.123',
      'kr. -10,03',
      'kr.,1',
      ',0001',
      'kr. ,001',
      'kr.0,001',
      '12.34,56',
      '123456.123.123456',
      '.123',
      'kr.-.123',
      'kr. -.123',
      '- 123',
      '123 ',
      '',
      ' ',
      'kr.',
      ' kr.',
      'kr. ',
      'kr.-',
      'kr. -',
      'kr. - ',
      ' - ',
      '-',
      '- kr.',
      '-kr.',
    ],
  });

  // ($##,###.##) (en-US, en-HK)
  test({
    validator: 'isCurrency',
    args: [
      {
        parensForNegatives: true,
      },
    ],
    valid: [
      '1,234',
      '(1,234)',
      '($6,954,231)',
      '$10.03',
      '(10.03)',
      '($10.03)',
      '1.39',
      '.03',
      '(.03)',
      '($.03)',
      '0.10',
      '$10567.01',
      '($0.01)',
      '$1,234,567.89',
      '$10,123',
      '(10,123)',
      '10123',
    ],
    invalid: [
      '1.234',
      '($1.1)',
      '-$1.10',
      '$ 32.50',
      '500$',
      '.0001',
      '$.001',
      '($0.001)',
      '12,34.56',
      '123456,123,123456',
      '( 123)',
      ',123',
      '$-,123',
      '',
      ' ',
      '  ',
      '   ',
      '$',
      '$ ',
      ' $',
      ' 123',
      '(123) ',
      '.',
      ',',
      '00',
      '$-',
      '$ - ',
      '$- ',
      ' - ',
      '-',
      '- $',
      '-$',
      '()',
      '( )',
      '(  -)',
      '(  - )',
      '(  -  )',
      '(-)',
      '(-$)',
    ],
  });
  // $##,###.## with no negatives (en-US, en-CA, en-AU, en-HK)
  test({
    validator: 'isCurrency',
    args: [{ allowNegatives: false }],
    valid: [
      '$10,123.45',
      '$10123.45',
      '10,123.45',
      '10123.45',
      '10,123',
      '1,123,456',
      '1123456',
      '1.39',
      '.03',
      '0.10',
      '$0.10',
      '$100,234,567.89',
      '$10,123',
      '10,123',
    ],
    invalid: [
      '1.234',
      '-1.234',
      '-10123',
      '-$0.01',
      '-$.99',
      '$1.1',
      '-$1.1',
      '$ 32.50',
      '500$',
      '.0001',
      '$.001',
      '$0.001',
      '12,34.56',
      '123456,123,123456',
      '-123456,123,123456',
      '123,4',
      ',123',
      '$-,123',
      '$',
      '.',
      ',',
      '00',
      '$-',
      '$-,.',
      '-',
      '-$',
      '',
      '- $',
      '-$10,123.45',
    ],
  });

  //  R$ ##,###.## (pt_BR)
  test({
    validator: 'isCurrency',
    args: [
      {
        symbol: 'R$',
        requireSymbol: true,
        allowSpaceAfterSymbol: true,
        symbolAfterDigits: false,
        thousandsSeparator: '.',
        decimalSeparator: ',',
      },
    ],
    valid: ['R$ 1.400,00', 'R$ 400,00'],
    invalid: ['$ 1.400,00', '$R 1.400,00'],
  });
});