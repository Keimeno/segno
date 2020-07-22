import { test } from '../index.ts';

Deno.test('should validate postal code', () => {
  const fixtures = [
    {
      locale: 'AU',
      valid: ['4000', '2620', '3000', '2017', '0800'],
    },
    {
      locale: 'CA',
      valid: ['L4T 0A5', 'G1A-0A2', 'A1A 1A1', 'X0A-0H0', 'V5K 0A1'],
    },
    {
      locale: 'ES',
      valid: ['01001', '52999', '27880'],
      invalid: ['123', '1234', '53000', '052999', '0123', 'abcde'],
    },
    {
      locale: 'JP',
      valid: ['135-0000', '874-8577', '669-1161', '470-0156', '672-8031'],
    },
    {
      locale: 'GR',
      valid: ['022 93', '29934', '90293', '299 42', '94944'],
    },
    {
      locale: 'GB',
      valid: [
        'TW8 9GS',
        'BS98 1TL',
        'DE99 3GG',
        'DE55 4SW',
        'DH98 1BT',
        'DH99 1NS',
        'GIR0aa',
        'SA99',
        'W1N 4DJ',
        'AA9A 9AA',
        'AA99 9AA',
        'BS98 1TL',
        'DE993GG',
      ],
    },
    {
      locale: 'FR',
      valid: ['75008', '44 522', '98025', '38 499', '39940'],
    },
    {
      locale: 'ID',
      valid: ['10210', '40181', '55161', '60233'],
    },
    {
      locale: 'IE',
      valid: ['A65 TF12', 'A6W U9U9'],
      invalid: [
        '123',
        '75690HG',
        'AW5  TF12',
        'AW5 TF12',
        '756  90HG',
        'A65T F12',
        'O62 O1O2',
      ],
    },
    {
      locale: 'IN',
      valid: ['364240', '360005'],
      invalid: [
        '123',
        '012345',
        '011111',
        '101123',
        '291123',
        '351123',
        '541123',
        '551123',
        '651123',
        '661123',
        '861123',
        '871123',
        '881123',
        '891123',
      ],
    },
    {
      locale: 'IL',
      valid: [
        '10200',
        '10292',
        '10300',
        '10329',
        '3885500',
        '4290500',
        '4286000',
        '7080000',
      ],
      invalid: [
        '123',
        '012345',
        '011111',
        '101123',
        '291123',
        '351123',
        '541123',
        '551123',
        '651123',
        '661123',
        '861123',
        '871123',
        '881123',
        '891123',
      ],
    },
    {
      locale: 'BG',
      valid: ['1000'],
    },
    {
      locale: 'CZ',
      valid: ['20134', '392 90', '39919', '938 29', '39949'],
    },
    {
      locale: 'NL',
      valid: ['1012 SZ', '3432FE', '1118 BH', '3950IO', '3997 GH'],
    },
    {
      locale: 'NP',
      valid: ['10811', '32600', '56806', '977'],
      invalid: ['11977', 'asds', '13 32', '-977', '97765'],
    },
    {
      locale: 'PL',
      valid: ['47-260', '12-930', '78-399', '39-490', '38-483'],
    },
    {
      locale: 'TW',
      valid: ['360', '90312', '399', '935', '38842'],
    },
    {
      locale: 'LI',
      valid: ['9485', '9497', '9491', '9489', '9496'],
    },
    {
      locale: 'PT',
      valid: ['4829-489', '0294-348', '8156-392'],
    },
    {
      locale: 'SE',
      valid: ['12994', '284 39', '39556', '489 39', '499 49'],
    },
    {
      locale: 'AD',
      valid: ['AD100', 'AD200', 'AD300', 'AD400', 'AD500', 'AD600', 'AD700'],
    },
    {
      locale: 'UA',
      valid: ['65000', '65080', '01000'],
    },
    {
      locale: 'BR',
      valid: ['39100-000', '22040-020', '39400-152'],
      invalid: [
        '79800A12',
        '13165-00',
        '38175-abc',
        '81470-2763',
        '78908',
        '13010|111',
      ],
    },
    {
      locale: 'NZ',
      valid: ['7843', '3581', '0449', '0984', '4144'],
    },
    {
      locale: 'MT',
      valid: ['VLT2345', 'VLT 2345', 'ATD1234', 'MSK8723'],
    },
    {
      locale: 'PR',
      valid: ['00979', '00631', '00786', '00987'],
    },
  ];

  let allValid: any[] = [];

  // Test fixtures
  fixtures.forEach((fixture) => {
    if (fixture.valid) allValid = allValid.concat(fixture.valid);
    test({
      validator: 'isPostalCode',
      valid: fixture.valid,
      invalid: fixture.invalid,
      args: [fixture.locale],
    });
  });

  // Test generics
  test({
    validator: 'isPostalCode',
    valid: [
      ...allValid,
      '1234',
      '6900',
      '1292',
      '9400',
      '27616',
      '90210',
      '10001',
      '21201',
      '33142',
      '060623',
      '123456',
      '293940',
      '002920',
    ],
    invalid: [
      'asdf',
      '1',
      'ASDFGJKLmZXJtZtesting123',
      'Vml2YW11cyBmZXJtZtesting123',
      '48380480343',
      '29923-329393-2324',
      '4294924224',
      '13',
    ],
    args: ['any'],
  });
});

Deno.test('should error on invalid locale', () => {
  test({
    validator: 'isPostalCode',
    args: ['is-NOT'],
    error: ['293940', '1234'],
  });
});
