import { assertString } from '../helpers/assertString.ts';
import { toFloat } from '../helpers/toFloat.ts';

export const isDivisibleBy = (str: string, num: string) => {
  assertString(str);

  return toFloat(str) % parseInt(num, 10) === 0;
};
