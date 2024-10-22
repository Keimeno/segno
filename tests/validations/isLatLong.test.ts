import { test } from '../index.ts';

Deno.test('should validate LatLong', () => {
  test({
    validator: 'isLatLong',
    valid: [
      '(-17.738223, 85.605469)',
      '(-12.3456789, +12.3456789)',
      '(-60.978437, -0.175781)',
      '(77.719772, -37.529297)',
      '(7.264394, 165.058594)',
      '0.955766, -19.863281',
      '(31.269161,164.355469)',
      '+12.3456789, -12.3456789',
      '-15.379543, -137.285156',
      '(11.770570, -162.949219)',
      '-55.034319, 113.027344',
      '58.025555, 36.738281',
      '55.720923,-28.652344',
      '-90.00000,-180.00000',
      '(-71, -146)',
      '(-71.616864, -146.616864)',
      '-0.55, +0.22',
      '90, 180',
      '+90, -180',
      '-90,+180',
      '90,180',
      '0, 0',
    ],
    invalid: [
      '(020.000000, 010.000000000)',
      '89.9999999989, 360.0000000',
      '90.1000000, 180.000000',
      '+90.000000, -180.00001',
      '090.0000, 0180.0000',
      '126, -158',
      '(-126.400010, -158.400010)',
      '-95, -96',
      '-95.738043, -96.738043',
      '137, -148',
      '(-137.5942, -148.5942)',
      '(-120, -203)',
      '(-119, -196)',
      '+119.821728, -196.821728',
      '(-110, -223)',
      '-110.369532, 223.369532',
      '(-120.969949, +203.969949)',
      '-116, -126',
      '-116.894222, -126.894222',
      '-112, -160',
      '-112.96381, -160.96381',
      '-90., -180.',
      '+90.1, -180.1',
      '(-17.738223, 85.605469',
      '0.955766, -19.863281)',
      '+,-',
      '(,)',
      ',',
      ' ',
    ],
  });

  test({
    validator: 'isLatLong',
    args: [
      {
        checkDMS: true,
      },
    ],
    valid: [
      '40° 26′ 46″ N, 79° 58′ 56″ W',
      '40° 26′ 46″ S, 79° 58′ 56″ E',
      '90° 0′ 0″ S, 180° 0′ 0″ E',
      '40° 26′ 45.9996″ N, 79° 58′ 55.2″ E',
      '40° 26′ 46″ n, 79° 58′ 56″ w',
      '40°26′46″s, 79°58′56″e',
      '11° 0′ 0.005″ S, 180° 0′ 0″ E',
      '40°26′45.9996″N, 79°58′55.2″E',
    ],
    invalid: [
      '100° 26′ 46″ N, 79° 70′ 56″ W',
      '40° 89′ 46″ S, 79° 58′ 100″ E',
      '40° 26.445′ 45″ N, 79° 58′ 55.2″ E',
      '40° 46″ N, 79° 58′ 56″ W',
    ],
  });
});
