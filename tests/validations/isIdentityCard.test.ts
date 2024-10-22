import { test } from '../index.ts';

Deno.test('should validate identity cards', () => {
  const fixtures = [
    {
      locale: 'ES',
      valid: [
        '99999999R',
        '12345678Z',
        '01234567L',
        '01234567l',
        'X1234567l',
        'x1234567l',
        'X1234567L',
        'Y1234567X',
        'Z1234567R',
      ],
      invalid: [
        '123456789',
        '12345678A',
        '12345 678Z',
        '12345678-Z',
        '1234*6789',
        '1234*678Z',
        '12345678!',
        '1234567L',
        'A1234567L',
        'X1234567A',
        'Y1234567B',
        'Z1234567C',
      ],
    },
    {
      locale: 'IN',
      valid: ['298448863364', '2984 4886 3364'],
      invalid: [
        '99999999R',
        '12345678Z',
        '01234567L',
        '01234567l',
        'X1234567l',
        'x1234567l',
        'X1234567L',
      ],
    },
    {
      locale: 'IT',
      valid: ['CR43675TM', 'CA79382RA'],
      invalid: ['CA00000AA', 'CB2342TG', 'CS123456A', 'C1236EC'],
    },
    {
      locale: 'NO',
      valid: [
        '09053426694',
        '26028338723',
        '08031470790',
        '12051539514',
        '02077448074',
        '14035638319',
        '13031379673',
        '29126214926',
      ],
      invalid: ['09053426699', '26028338724', '92031470790'],
    },
    {
      locale: 'he-IL',
      valid: [
        '219472156',
        '219486610',
        '219488962',
        '219566726',
        '219640216',
        '219645041',
        '334795465',
        '335211686',
        '335240479',
        '335472171',
        '336999842',
        '337090443',
      ],
      invalid: [
        '123456789',
        '12345678A',
        '12345 678Z',
        '12345678-Z',
        '1234*6789',
        '1234*678Z',
        '12345678!',
        '1234567L',
        'A1234567L',
        'X1234567A',
        'Y1234567B',
        'Z1234567C',
        '219772156',
        '219487710',
        '334705465',
        '336000842',
      ],
    },
    {
      locale: 'ar-TN',
      valid: [
        '09958092',
        '09151092',
        '65126506',
        '79378815',
        '58994407',
        '73089789',
        '73260311',
      ],
      invalid: [
        '123456789546',
        '123456789',
        '023456789',
        '12345678A',
        '12345',
        '1234578A',
        '123 578A',
        '12345 678Z',
        '12345678-Z',
        '1234*6789',
        '1234*678Z',
        'GE9800as98',
        'X231071922',
        '1234*678Z',
        '12345678!',
      ],
    },
    {
      locale: 'zh-CN',
      valid: [
        '235407195106112745',
        '210203197503102721',
        '520323197806058856',
        '235477190110989',
      ],
      invalid: [
        '235407195106112742',
        'xx1234567',
        '135407195106112742',
        '123456789546',
        '123456789',
        '023456789',
        '12345678A',
        '12345',
        '1234578A',
        '123 578A',
        '12345 678Z',
        '12345678-Z',
        '1234*6789',
        '1234*678Z',
        'GE9800as98',
        'X231071922',
        '1234*678Z',
        '12345678!',
        '235407207006112742',
      ],
    },
    {
      locale: 'zh-TW',
      valid: [
        'B176944193',
        'K101189797',
        'F112866121',
        'A219758834',
        'A244144802',
        'A146047171',
        'Q170219004',
        'Z277018381',
        'X231071923',
      ],
      invalid: [
        '123456789',
        'A185034995',
        'X431071923',
        'GE9800as98',
        'X231071922',
        '1234*678Z',
        '12345678!',
        '1234567L',
        'A1234567L',
        'X1234567A',
        'Y1234567B',
        'Z1234567C',
        '219772156',
        '219487710',
        '334705465',
        '336000842',
      ],
    },
  ];

  let allValid: string[] = [];

  // Test fixtures
  fixtures.forEach((fixture) => {
    if (fixture.valid) allValid = allValid.concat(fixture.valid);
    test({
      validator: 'isIdentityCard',
      valid: fixture.valid,
      invalid: fixture.invalid,
      args: [fixture.locale],
    });
  });

  // Test generics
  test({
    validator: 'isIdentityCard',
    valid: [...allValid],
    invalid: ['foo'],
    args: ['any'],
  });
});

Deno.test('should error on invalid locale', () => {
  test({
    validator: 'isIdentityCard',
    args: ['is-NOT'],
    error: ['99999999R', '12345678Z'],
  });
});
